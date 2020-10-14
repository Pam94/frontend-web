import { Component, OnInit } from '@angular/core';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { Activity } from 'src/app/shared/models/activity.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  activities: Activity[];
  selectedActivity: Activity;

  constructor(private activityService: ActivitiesService) { }

  ngOnInit(): void {
    this.activityService.getActivities().subscribe(data => this.activities = data);
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

}
