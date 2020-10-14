import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesService {
  private activityURL = 'http://localhost:4200/api/activities';


  constructor(private http: HttpClient) {
  }

  getActivities() {
    return this.http.get<Activity[]>(this.activityURL);
  }
}
