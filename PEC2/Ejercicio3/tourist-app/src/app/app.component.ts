import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { tap } from 'rxjs/operators';
import { User } from './shared/models/User';
import { StorageService } from './shared/services/storage.service';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'Tourist app';
  public user: User = this.storageService.getItem('user')
  public isLoggedIn = false

  constructor(private usersService: UsersService, private storageService: StorageService){}

  ngOnInit(): void{
    this.getCurrentUser()
    this.usersService.isLoggedIn().subscribe(res => this.isLoggedIn = res)
  }

  getCurrentUser(){
    this.usersService.getCurrentUser().subscribe(user => this.user = user)
  }

  logout(){
    this.usersService.logout()
  }
}
