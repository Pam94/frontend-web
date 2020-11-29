import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/Activity';
import { User } from 'src/app/shared/models/User';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { StorageService } from 'src/app/shared/services/storage.service';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.scss']
})
export class FavoritesComponent implements OnInit {

  constructor(private usersService: UsersService, private storageService: StorageService, private activitiesService: ActivitiesService) { }

  public favorites: Activity[]
  public currentUser: User = this.usersService.currentUser

  ngOnInit(): void {
    this.getFavorites()
    // this.getActivities()
  }

  async getFavorites() {
    const favorites = this.storageService.getItem('favorites')

    const allActivities = await this.activitiesService.getActivities().toPromise()

    this.favorites = allActivities.filter(act => favorites.includes(act.id))

    // return this.activitiesService.getFavorites(this.currentUser.id).subscribe(fav => {
    //   this.favorites = fav
    // })
  }

  remove(id) {
    const favorites = this.storageService.getItem('favorites')
    const index = favorites.indexOf(id);
    if (index > -1) {
      favorites.splice(index, 1);
      this.storageService.addItem('favorites', favorites)
    }
    this.getFavorites()
  }


}
