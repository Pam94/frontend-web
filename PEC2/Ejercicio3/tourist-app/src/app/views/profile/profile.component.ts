import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/models/User';
import Countries from 'src/app/shared/helpers/Countries';
import { UsersService } from 'src/app/shared/services/users.service';
import { validateSpanishId } from 'spain-id'
import { Education } from 'src/app/shared/models/Education';
import { UserLanguage } from 'src/app/shared/models/UserLanguage';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  public user: User
  public name: FormControl
  public surname: FormControl
  public nationality: FormControl
  public birthdate: FormControl
  public phone: FormControl
  public nif: FormControl
  public aboutMe: FormControl
  public companyName: FormControl
  public companyDescription: FormControl
  public cif: FormControl

  public profileForm: FormGroup

  public error: string
  public message: string

  public nationalities = Countries
  public educations: Education[]
  public languages: UserLanguage[]

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
    ) {
   }

  ngOnInit(): void {
    this.user = this.usersService.currentUser

    const companyValidators = this.user.type == 1 ? [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(35),
      this.noWhitespaceValidator()
    ] : null

    const cifValidators = this.user.type == 1 ? [
      Validators.required
    ] : null

    this.getEducations()
    this.getLanguages()

    this.name = new FormControl(this.user.name, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(35),
      Validators.pattern("^[a-zA-Z ]*$"),
      this.noWhitespaceValidator()
    ])

    this.surname = new FormControl(this.user.surname, [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(35),
      Validators.pattern("^[a-zA-Z ]*$"),
      this.noWhitespaceValidator()
    ])

    this.nationality = new FormControl(this.user.nationality)

    this.birthdate = new FormControl(this.user.birthdate)

    this.nif = new FormControl(this.user.nif)

    this.aboutMe = new FormControl(this.user.aboutMe)

    this.phone = new FormControl(this.user.phone)

    this.companyName = new FormControl(this.user.companyName, companyValidators)

    this.companyDescription = new FormControl(this.user.companyDescription)

    this.cif = new FormControl(this.user.cif, cifValidators)


    this.profileForm = this.formBuilder.group({
      name: this.name,
      surname: this.surname,
      nationality: this.nationality,
      birthdate: this.birthdate,
      nif: this.nif,
      aboutMe: this.aboutMe,
      phone: this.phone,
      companyName: this.companyName,
      companyDescription: this.companyDescription,
      cif: this.cif
    })

    this.onChanges()
  }
  getEducations() {
    return this.usersService.getEducations(this.user.id).subscribe(edu => this.educations = edu)
  }

  getLanguages() {
    return this.usersService.getLanguages(this.user.id).subscribe(lang => this.languages = lang)
  }

  noWhitespaceValidator(): ValidatorFn {
    const nameRe = new RegExp('(^\s+|\s+$)')
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {noWhiteSpace: {value: control.value}} : null;
    }
  }

  nifValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if(!control.value) return null
      const valid = validateSpanishId(control.value)
      return !valid ? {nif: {value: control.value}} : null;
    }
  }

  public async save(): Promise<void> {
    this.user.name = this.name.value
    this.user.surname = this.surname.value
    this.user.nationality = this.nationality.value
    this.user.birthdate = this.birthdate.value
    this.user.phone = this.phone.value
    this.user.nif = this.nif.value
    this.user.aboutMe = this.aboutMe.value
    if (this.user.type == 1) {
      this.user.companyName = this.companyName.value
      this.user.companyDescription = this.companyDescription.value
      this.user.cif = this.cif.value
    }
    
    const profile = await this.usersService.updateUser(this.user).subscribe()
    // console.log('profile', profile)
    if (profile) {
      this.usersService.getCurrentUser()
      this.error = null
      this.message = 'Profile saved'
    } else {
      this.error = 'Something wrong happened'
    }
    
  }

  onChanges(): void {
    this.profileForm.get('nationality').valueChanges.subscribe(val => {
      if(val == 'ES') {
        this.profileForm.get('nif').setValidators([this.nifValidator()])
      } else {
        this.profileForm.get('nif').clearValidators();
      }
    });
  }

  editEducation(id) {
    this.router.navigateByUrl(`/education/${id}`)
  }

  deleteEducation(id) {
    if (confirm(`Are you sure you want to delete education number ${id}!`)) {
      this.educations = this.educations.filter(e => e.id !== id);
      this.usersService.deleteEducation(id).subscribe()
    } else {
      return
    }
  }

  editLanguage(id) {
    this.router.navigateByUrl(`/language/${id}`)
  }

  deleteLanguage(id) {
    if (confirm(`Are you sure you want to delete language number ${id}!`)) {
      this.languages = this.languages.filter(e => e.id !== id);
      this.usersService.deleteLanguage(id).subscribe()
    } else {
      return
    }
  }

}
