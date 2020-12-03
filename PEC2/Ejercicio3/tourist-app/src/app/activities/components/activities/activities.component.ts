import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Activity, generateMockActivity } from 'src/app/shared/models/Activity';
import { getAdminActivities, getAllActivities, getMyActivities } from '../../actions';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[] = [];

  @Input() selectedActivity: Activity

  @Input() userId: number

  @Input() ownerId: number

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select('activities').subscribe(activitiesResponse => this.activities = activitiesResponse.activities);

    this.getActivities();
  }

  getActivities() {

    if (this.userId > 0) {
      this.store.dispatch(getMyActivities({ userId: this.userId }));
    } else if (this.ownerId > 0) {
      this.store.dispatch(getAdminActivities({ ownerId: this.ownerId }));
    } else {
      this.store.dispatch(getAllActivities());
    }

  }

  onSelected(activity: Activity) {
    if (activity) {
      this.selectedActivity = activity
    } else {
      this.selectedActivity = generateMockActivity();
    }

  }

  onEdited() {
    this.selectedActivity = null
    this.getActivities()
  }


}
