import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAdminActivities, getAllActivities } from 'src/app/activities/actions';
import { AppState } from 'src/app/app.reducer';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  public ownerId: number = this.userService.currentUser.id

  constructor(private store: Store<AppState>,
    private userService: UsersService) { }

  ngOnInit(): void {
    /*this.store.select('activities').subscribe(ownerResponse =>
      this.ownerId = ownerResponse.ownerId);*/

    //this.store.dispatch(getAdminActivities({ ownerId: this.ownerId }));
  }


}
