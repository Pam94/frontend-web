import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public name: FormControl;
  public surname: FormControl;
  public birthdate: FormControl;
  public phone: FormControl;
  public nationality: FormControl;
  public NIF: FormControl;
  public aboutMe: FormControl;

  public profileForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  checkProfile() {

  }

}
