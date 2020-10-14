import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Form, FormBuilder, Validators } from '@angular/forms';
import { User, Nationality } from 'src/app/shared/models/user.model';
import { ProfileService } from 'src/app/shared/services/profile.service';
import { Router } from '@angular/router';
import { NameValidator } from 'src/app/shared/directives/name-validator.directive';
import { MockData } from 'src/app/shared/mock-data';
import { DateValidator } from 'src/app/shared/directives/date-validator.directive';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user: User;

  /**User Personal Data */

  /**Only if the user type is Company */
  public companyName: FormControl;
  public companyDescription: FormControl;
  public CIF: FormControl;
  /** */

  public name: FormControl;
  public surname: FormControl;
  public birthdate: FormControl;
  public phone: FormControl;
  public nationality: FormControl;
  public NIF: FormControl;
  public aboutMe: FormControl;

  public profileForm: FormGroup;

  nationalities: Nationality[];

  isTourist: boolean;

  constructor(
    private profileService: ProfileService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {

    this.nationalities = MockData.NATIONALITY;
    this.isTourist = this.profileService.isTourist();

    if (!this.isTourist) {
      this.companyName = new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]);
      this.companyDescription = new FormControl('');
      this.CIF = new FormControl('', Validators.required);
    }

    this.name = new FormControl(this.profileService.user.name, [Validators.required, Validators.minLength(3), Validators.maxLength(55), NameValidator.checkNameValid()]);
    this.surname = new FormControl(this.profileService.user.surname, [Validators.minLength(3), Validators.maxLength(55), NameValidator.checkNameValid()]);
    this.birthdate = new FormControl(this.profileService.user.birthdate, DateValidator.checkDateValid());
    this.phone = new FormControl(this.profileService.user.phone);
    this.nationality = new FormControl(this.profileService.user.nationality, Validators.required);
    this.NIF = new FormControl(this.profileService.user.NIF, [Validators.required]);
    this.aboutMe = new FormControl(this.profileService.user.aboutMe);

    this.profileForm = this.formBuilder.group({
      companyName: this.companyName,
      companyDescription: this.companyDescription,
      CIF: this.CIF,
      name: this.name,
      surname: this.surname,
      birthdate: this.birthdate,
      phone: this.phone,
      nationality: this.nationality,
      NIF: this.NIF,
      aboutMe: this.aboutMe
    });
  }

  checkProfile() {
  }

  compareByUID(option1, option2) {
    return option1.uid === (option2 && option2.uid);
  }

}
