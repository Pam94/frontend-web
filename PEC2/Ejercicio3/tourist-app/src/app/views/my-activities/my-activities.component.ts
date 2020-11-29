import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-my-activities',
  templateUrl: './my-activities.component.html',
  styleUrls: ['./my-activities.component.scss']
})
export class MyActivitiesComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  public userId: number = this.usersService.currentUser.id

  ngOnInit(): void {
  }

}
