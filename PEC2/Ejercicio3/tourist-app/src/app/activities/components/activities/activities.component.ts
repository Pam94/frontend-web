import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Activity, generateMockActivity } from 'src/app/shared/models/Activity';
import { getAllActivities } from '../../actions';

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
    if (this.userId) {
      this.store.dispatch(getAllActivities({ userId: this.userId, ownerId: null }));
    } else if (this.ownerId) {
      this.store.dispatch(getAllActivities({ userId: null, ownerId: this.ownerId }));
    } else {
      this.store.dispatch(getAllActivities({ userId: null, ownerId: null }));
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
