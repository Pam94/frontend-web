import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule, InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './shared/services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { MessagesComponent } from './shared/components/messages/messages.component';
import { ProfileComponent } from './views/profile/profile.component';
import { EducationComponent } from './views/education/education.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { MyActivitiesComponent } from './views/my-activities/my-activities.component';
import { AdminComponent } from './views/admin/admin.component';
import { LoginModule } from './login/login.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';
import { ActivitiesModule } from './activities/activities.module';
import { appReducers } from './app.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EffectsArray } from './login/effects';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MessagesComponent,
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
    LoginModule,
    ActivitiesModule,
    HttpClientModule,
    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    StoreModule.forRoot(appReducers),
    EffectsModule.forRoot(EffectsArray),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
