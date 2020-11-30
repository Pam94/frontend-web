import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Activity, generateMockActivity } from 'src/app/shared/models/Activity';
import { User } from 'src/app/shared/models/User';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UsersService } from 'src/app/shared/services/users.service';
import { cancellActivity, createActivity, editActivity, signUpActivity } from '../../activities.action';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.component.html',
  styleUrls: ['./activity-details.component.scss']
})
export class ActivityDetailsComponent implements OnInit {

  @Input() id: number
  @Input() ownerId: number

  @Output() edited = new EventEmitter<boolean>()


  public activity: Activity = generateMockActivity();

  public activityForm: FormGroup
  public name: FormControl
  public category: FormControl
  public subcategory: FormControl
  public description: FormControl
  public language: FormControl
  public price: FormControl
  public minimumCapacity: FormControl
  public limitCapacity: FormControl
  public cancelled: FormControl

  public categoryList: string[]
  public subcategoryList: string[]
  public languageList: any[]

  public peopleRegistered: number
  public isFavorite: boolean
  public alreadySignedUp: boolean

  public user: User = this.storageService.getItem('user')

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private activitiesService: ActivitiesService,
    private storageService: StorageService,
    private store: Store<AppState>
  ) { }

  public isTourist = this.usersService.currentUser && this.usersService.currentUser.type == 0
  public isCompany = this.usersService.currentUser && this.usersService.currentUser.type == 1

  ngOnInit(): void {
    this.getCurrentUser()

    this.categoryList = [
      'Cultura i patrimoni',
      'Enoturisme',
      'Platges'
    ]

    this.languageList = [
      {
        value: 'ES',
        label: 'Spanish'
      },
      {
        value: 'CA',
        label: 'Catalan'
      },
      {
        value: 'EN',
        label: 'English'
      }
    ]
    this.name = new FormControl({ value: '', disabled: !this.ownerId }, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(35)
    ])

    this.description = new FormControl({ value: '', disabled: !this.ownerId })

    this.category = new FormControl({ value: '', disabled: !this.ownerId }, [
      Validators.required
    ])

    this.subcategory = new FormControl({ value: '', disabled: !this.ownerId }, [
      Validators.required
    ])

    this.language = new FormControl({ value: '', disabled: !this.ownerId }, [
      Validators.required
    ])

    this.price = new FormControl({ value: '', disabled: !this.ownerId }, [
      Validators.required,
      Validators.min(0)
    ])

    this.minimumCapacity = new FormControl({ value: '', disabled: !this.ownerId }, [
      Validators.required,
      Validators.min(0)
    ])

    this.limitCapacity = new FormControl({ value: '', disabled: !this.ownerId }, [
      Validators.required,
      Validators.min(0)
    ])

    this.cancelled = new FormControl({ value: '', disabled: !this.ownerId })

    this.activityForm = this.formBuilder.group({
      name: this.name,
      category: this.category,
      subcategory: this.subcategory,
      description: this.description,
      language: this.language,
      price: this.price,
      minimumCapacity: this.minimumCapacity,
      limitCapacity: this.limitCapacity,
      cancelled: this.cancelled,
      userId: this.usersService.currentUser ? this.usersService.currentUser.id : null
    })
    this.getActivity()
    if (this.id) {
      this.getPeopleRegistered(this.id)
    }
    this.onChanges()
  }

  onChanges(): void {
    this.activityForm.get('category').valueChanges.subscribe(val => {
      if (val == 'Cultura i patrimoni') {
        this.subcategoryList = ['Concert', 'Espectacle', 'Excursió', 'Festivals', 'Visita guiada', 'Museu', 'Monument']
      } else if (val == 'Enoturisme') {
        this.subcategoryList = ['Bodega', 'Tast de productes', 'Excursió', 'Museu de vi', 'Visita guiada']
      } else {
        this.subcategoryList = ['Activitat nàutica', 'Cala', 'Concert', 'Excursió', 'Taller']
      }
    });
  }

  /*async save(): Promise<void | Activity> {
    this.activity.name = this.name.value
    this.activity.description = this.description.value
    this.activity.category = this.category.value
    this.activity.subcategory = this.subcategory.value
    this.activity.language = this.language.value
    this.activity.price = this.price.value
    this.activity.minimumCapacity = this.minimumCapacity.value
    this.activity.limitCapacity = this.limitCapacity.value
    this.activity.cancelled = this.cancelled.value || false
    this.activity.userId = this.usersService.currentUser ? this.usersService.currentUser.id : null



    if (this.id) {
      return this.activitiesService.updateActivity(this.activity).toPromise().then(() => this.edited.emit(true))
    } else {
      return this.activitiesService.addActivity(this.activity).toPromise().then(() => this.edited.emit(true))
    }
  }*/

  save(): void {
    this.activity.name = this.name.value
    this.activity.description = this.description.value
    this.activity.category = this.category.value
    this.activity.subcategory = this.subcategory.value
    this.activity.language = this.language.value
    this.activity.price = this.price.value
    this.activity.minimumCapacity = this.minimumCapacity.value
    this.activity.limitCapacity = this.limitCapacity.value
    this.activity.cancelled = this.cancelled.value || false
    this.activity.userId = this.usersService.currentUser ? this.usersService.currentUser.id : null

    if (!this.activityForm.invalid) {
      if (this.id) {
        this.store.dispatch(
          editActivity({ id: this.activity.id, newActivity: this.activity })
        );
      } else {
        this.store.dispatch(
          createActivity({
            name: this.activity.name,
            category: this.activity.category,
            subcategory: this.activity.subcategory,
            price: this.activity.price,
            language: this.activity.language,
            minimumCapacity: this.activity.minimumCapacity,
            limitCapacity: this.activity.limitCapacity,
            userId: this.activity.userId
          })
        );
      }
    }
  }

  ngOnChanges() {
    this.getActivity()
    this.getPeopleRegistered(this.id)
  }

  getPeopleRegistered(id) {
    return this.activitiesService.getPeopleOnActivity(id).subscribe(_ => this.peopleRegistered = _.length)
  }

  get state() {

    if (this.cancelled.value) {
      return 'Cancelled'
    } else if (this.peopleRegistered == this.limitCapacity.value) {
      return 'Complete'
    } else {
      return 'Places available'
    }
  }

  getActivity(): void {
    const id = this.id
    if (!id) {
      this.activity = generateMockActivity();

      if (this.activityForm) {
        return this.activityForm.setValue({
          name: '',
          description: '',
          category: '',
          subcategory: '',
          language: '',
          price: '',
          minimumCapacity: '',
          limitCapacity: '',
          cancelled: false,
          userId: this.usersService.currentUser ? this.usersService.currentUser.id : null
        })
      }
      return
    }
    this.isSignedUp()

    const favorites = this.storageService.getItem('favorites') || []
    const index = favorites.indexOf(this.id);
    if (index > -1) {
      this.isFavorite = true
    } else {
      this.isFavorite = false
    }

    this.activitiesService.getActivity(id)
      .subscribe(activity => {
        // console.log('activity', activity)
        this.activity = activity
        this.activityForm.setValue({
          name: activity.name,
          description: activity.description || '',
          category: activity.category,
          subcategory: activity.subcategory,
          language: activity.language,
          price: activity.price,
          minimumCapacity: activity.minimumCapacity,
          limitCapacity: activity.limitCapacity,
          cancelled: activity.cancelled || false,
          userId: this.usersService.currentUser ? this.usersService.currentUser.id : null
        })
      })
  }

  async isSignedUp() {
    const userId = this.usersService.currentUser ? this.usersService.currentUser.id : null
    if (userId) {
      const myActivities = await this.activitiesService.getMyActivities(userId).toPromise()
      const myActivitiesArray = myActivities.map(act => act.activityId)
      this.alreadySignedUp = myActivitiesArray.includes(this.id)
    }
  }

  /*async cancel() {
    const userId = this.usersService.currentUser ? this.usersService.currentUser.id : null
    if (userId) {
      const myActivities = await this.activitiesService.getMyActivities(userId).toPromise()
      const myActivity = myActivities.find(a => a.activityId == this.id)
      const id = myActivity.id
      return this.activitiesService.removeMyActivity(id).subscribe(() => {
        this.getPeopleRegistered(this.id)
        this.getActivity()
      })
    }
  }*/

  cancel() {
    this.store.dispatch(cancellActivity({ id: this.activity.id }));
  }

  /*signup() {
    return this.activitiesService.signUpActivity(this.usersService.currentUser.id, this.id).subscribe(() => {
      this.getPeopleRegistered(this.id)
      this.getActivity()
    })
  }*/

  signup() {
    this.store.dispatch(signUpActivity({ activityId: this.id, userId: this.activity.userId }));
  }

  toggleFavorite() {
    const favorites = this.storageService.getItem('favorites') || []
    if (favorites.includes(this.id)) {
      const index = favorites.indexOf(this.id);
      if (index > -1) {
        favorites.splice(index, 1);
      }
      this.isFavorite = false
    } else {
      favorites.push(this.id)
      this.isFavorite = true
    }
    return this.storageService.addItem('favorites', favorites)
  }

  getCurrentUser() {
    this.usersService.getCurrentUser().subscribe(user => this.user = user)
  }

}
