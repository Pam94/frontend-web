import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainLayoutComponent } from './shared/components/main-layout/main-layout.component';


const routes: Routes = [
  {
    path: 'signin',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./views/signin/signin.module').then(m => m.SigninModule),
    data: { tittle: 'Signin', breadcumb: 'SIGNIN' }
  },
  {
    path: 'signup',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./views/signup/signup.module').then(m => m.SignupModule),
    data: { tittle: 'Signup', breadcumb: 'SIGNUP' }
  },
  {
    path: '',
    component: MainLayoutComponent,
    loadChildren: () =>
      import('./views/home/home.module').then(m => m.HomeModule),
    pathMatch: 'full'
  },
  {
    path: 'tourist',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./views/home/home.module').then(m => m.HomeModule),
        data: { tittle: 'Home', breadcumb: 'HOME' }
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./views/profile/profile.module').then(m => m.ProfileModule),
        data: { tittle: 'Profile', breadcumb: 'PROFILE' }
      },
      {
        path: 'logout',
        redirectTo: '/'
      },
      {
        path: 'activities',
        loadChildren: () =>
          import('./views/activities/activities.module').then(m => m.ActivitiesModule),
        data: { tittle: 'Activities', breadcumb: 'ACTIVITIES' }
      }
    ]
  },
  {
    path: 'company',
    component: MainLayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./views/home/home.module').then(m => m.HomeModule),
        data: { tittle: 'Home', breadcumb: 'HOME' }
      },
      {
        path: 'profile',
        loadChildren: () =>
          import('./views/profile/profile.module').then(m => m.ProfileModule),
        data: { tittle: 'Profile', breadcumb: 'PROFILE' }
      },
      {
        path: 'logout',
        redirectTo: '/'
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('./views/admin/admin.module').then(m => m.AdminModule),
        data: { tittle: 'Admin', breadcumb: 'ADMIN' }
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'sessions/404'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
