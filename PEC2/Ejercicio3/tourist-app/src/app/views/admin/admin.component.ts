import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public ownerId: number = this.usersService.currentUser.id

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }


}
