import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Activity } from '../models/Activity';
import { Favorites } from '../models/Favorites';
import { MyActivities } from '../models/MyActivities';

@Injectable({
  providedIn: 'root'
})

export class ActivitiesService {

  activitiesUrl = 'api/activities'

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) {
  }

  getActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activitiesUrl).pipe()
  }

  getActivity(id: number): Observable<Activity> {
    return this.http.get<Activity>(`${this.activitiesUrl}/${id}`).pipe()
  }

  getFavorites(id): Observable<Favorites[]> {
    return this.http.get<Favorites[]>('api/favorites_user').pipe(
      map(_ => _.filter(a => a.userId == id))
    )
  }

  getMyActivities(id): Observable<MyActivities[]> {
    return this.http.get<MyActivities[]>('api/my_activities_user').pipe(
      map(_ => _.filter(a => a.userId == id))
    )
  }

  getPeopleOnActivity(id): Observable<MyActivities[]> {
    return this.http.get<MyActivities[]>('api/my_activities_user').pipe(
      map(_ => _.filter(a => a.activityId == id))
    )
  }

  updateActivity(activity: Activity): Observable<Activity> {
    // console.log('updated activity', activity)
    return this.http.put<Activity>('api/activities/' + activity.id, activity, this.httpOptions)
  }

  addActivity(activity: Activity): Observable<any> {
    // console.log('added activity', activity)
    return this.http.post('api/activities/', activity, this.httpOptions)
  }

  deleteActivity(activity: Activity | number): Observable<Activity> {
    const id = typeof activity === 'number' ? activity : activity.id;
    const url = `api/activities/${id}`;

    return this.http.delete<Activity>(url, this.httpOptions)
  }

  signUpActivity(userId: number, activityId: number): Observable<MyActivities> {
    return this.http.post<MyActivities>('api/my_activities_user', { activityId, userId })
  }

  removeMyActivity(myActivityId: number): Observable<MyActivities> {
    // console.log('removing my activity', myActivityId)
    return this.http.delete<MyActivities>(`api/my_activities_user/${myActivityId}`)
  }
}
