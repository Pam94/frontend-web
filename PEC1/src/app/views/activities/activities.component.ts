import { Component, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/activity.model';
import { ProfileService } from 'src/app/shared/services/profile.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[];
  selectedActivity: Activity;

  constructor(private profileService: ProfileService) { }

  ngOnInit(): void {
    this.activities = this.profileService.user.activities;
  }

  onSelect(activity: Activity): void {
    this.selectedActivity = activity;
  }

}
