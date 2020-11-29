import { Component, Input, OnInit } from '@angular/core';
import { Activity } from 'src/app/shared/models/Activity';
import { ActivitiesService } from 'src/app/shared/services/activities.service';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.scss']
})
export class ActivitiesComponent implements OnInit {

  activities: Activity[]

  @Input() selectedActivity: Activity

  @Input() userId: number

  @Input() ownerId: number




  constructor(
    private activitiesService: ActivitiesService
  ) { }

  ngOnInit(): void {
    this.getActivities()
  }

  getActivities() {
    return this.activitiesService.getActivities().subscribe(async activities => {
      if (this.userId) {
        const myActivities = await this.activitiesService.getMyActivities(this.userId).toPromise()
        const myActivitiesArray = myActivities.map(act => act.activityId)
        this.activities = activities.filter(act => myActivitiesArray.includes(act.id))
      } else if (this.ownerId) {
        const ownerActivities = activities.filter(act => act.userId == this.ownerId)
        this.activities = ownerActivities
      } else {
        this.activities = activities
      }
    })
  }

  onSelected(activity: Activity) {
    if (activity) {
      this.selectedActivity = activity
    } else {
      this.selectedActivity = new Activity()
    }

  }

  onEdited() {
    this.selectedActivity = null
    this.getActivities()
  }


}
