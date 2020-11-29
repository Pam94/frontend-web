import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsCompanyGuard } from './shared/guards/is-company.guard';
import { LoggedInGuard } from './shared/guards/logged-in.guard';
import { AdminComponent } from './views/admin/admin.component';
import { EducationComponent } from './views/education/education.component';
import { FavoritesComponent } from './views/favorites/favorites.component';
import { HomeComponent } from './views/home/home.component';
import { LanguagesComponent } from './views/languages/languages.component';
import { LoginComponent } from './views/login/login.component';
import { MyActivitiesComponent } from './views/my-activities/my-activities.component';
import { ProfileComponent } from './views/profile/profile.component';
import { SignupComponent } from './views/signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [LoggedInGuard], },
  { path: 'education', component: EducationComponent, canActivate: [LoggedInGuard], },
  { path: 'education/:id', component: EducationComponent, canActivate: [LoggedInGuard], },
  { path: 'language', component: LanguagesComponent, canActivate: [LoggedInGuard], },
  { path: 'language/:id', component: LanguagesComponent, canActivate: [LoggedInGuard], },
  { path: 'favorites', component: FavoritesComponent, canActivate: [LoggedInGuard], },
  { path: 'my-activities', component: MyActivitiesComponent, canActivate: [LoggedInGuard], },
  { path: 'admin', component: AdminComponent, canActivate: [IsCompanyGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
