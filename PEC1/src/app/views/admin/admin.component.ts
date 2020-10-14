import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity.model';
import { ActivitiesService } from 'src/app/shared/services/activities.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

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
