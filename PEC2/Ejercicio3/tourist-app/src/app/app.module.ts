import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { ActivitiesComponent } from './views/activities/activities.component';
import { ActivityDetailsComponent } from './views/activity-details/activity-details.component';
import { SignupComponent } from './views/signup/signup.component';
import { ProfileComponent } from './views/profile/profile.component';
import { EducationComponent } from './views/education/education.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { MyActivitiesComponent } from './views/my-activities/my-activities.component';
import { AdminComponent } from './views/admin/admin.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    MessagesComponent,
    ActivitiesComponent,
    ActivityDetailsComponent,
    SignupComponent,
    ProfileComponent,
    EducationComponent,
    LanguagesComponent,
    FavoritesComponent,
    MyActivitiesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
