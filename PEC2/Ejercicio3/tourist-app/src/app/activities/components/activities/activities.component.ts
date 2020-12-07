import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Activity, generateMockActivity } from 'src/app/shared/models/Activity';
import { User } from 'src/app/shared/models/User';
import { getAdminActivities, getAllActivities, getMyActivities } from '../../actions';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[] = [];
  user: User = null

  @Input() selectedActivity: Activity

  @Input() showUserActivities: boolean
  @Input() isOwnerLoggedIn: boolean

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('activities').subscribe(activitiesResponse => this.activities = activitiesResponse.activities);

    this.store.select('login').subscribe(userResponse =>
      this.user = userResponse.user);

    this.getActivities();
  }

  getActivities() {

    if (this.showUserActivities) {
      if (this.isOwnerLoggedIn) {
        this.store.dispatch(getAdminActivities({ ownerId: this.user.id }));
      } else {
        this.store.dispatch(getMyActivities({ userId: this.user.id }));
      }
    } else {
      this.store.dispatch(getAllActivities());
    }

  }

  onSelected(activity: Activity) {
    if (activity) {
      this.selectedActivity = activity
    } else {
      this.selectedActivity = generateMockActivity();
    }

  }

  onEdited() {
    this.selectedActivity = null
    this.getActivities()
  }


}
