import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { getAllActivities, getAllActivitiesError, getAllActivitiesSuccess } from '../actions';

@Injectable()
export class ActivitiesEffects {
    constructor(
        private actions$: Actions,
        private activityService: ActivitiesService) { }


    getActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllActivities),
            mergeMap((action) => {
                this.activityService.getActivities().pipe(
                    switchMap(activities => {
                        if (action.userId) {
                            this.activityService.getMyActivities(action.userId).pipe(
                                map(myActivities => myActivities.map(act => act.activityId)),
                                map(array => activities.filter(act => array.includes(act.id)))
                            );
                            getAllActivitiesSuccess({ activities: activities })
                        } else if (action.ownerId) {
                            getAllActivitiesSuccess({ activities: activities.filter(act => act.id === action.ownerId) })
                        } else {
                            getAllActivitiesSuccess({ activities: activities })
                        }
                    }),
                    catchError((err) => of(getAllActivitiesError({ payload: err })))
                )
            })
        )
    );
}