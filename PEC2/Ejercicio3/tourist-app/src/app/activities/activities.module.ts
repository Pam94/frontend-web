import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ActivityDetailsComponent } from './components/activity-details/activity-details.component';
import { ActivitiesComponent } from './components/activities/activities.component';



@NgModule({
  declarations: [ActivitiesComponent, ActivityDetailsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [ActivitiesComponent, ActivityDetailsComponent]
})
export class ActivitiesModule { }
