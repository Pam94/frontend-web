import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, switchMap } from 'rxjs/operators';
import { ActivitiesService } from 'src/app/shared/services/activities.service';
import { getAdminActivities, getAdminActivitiesError, getAdminActivitiesSuccess, getAllActivities, getAllActivitiesError, getAllActivitiesSuccess, getMyActivities, getMyActivitiesError, getMyActivitiesSuccess, getPeopleRegistered, getPeopleRegisteredError, getPeopleRegisteredSuccess, getSignedUpActivities, getSignedUpActivitiesError, getSignedUpActivitiesSuccess } from '../actions';

@Injectable()
export class ActivitiesEffects {
    constructor(
        private actions$: Actions,
        private activityService: ActivitiesService) { }

    getAllActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAllActivities),
            switchMap(() =>
                this.activityService.getActivities().pipe(
                    map((activities) => getAllActivitiesSuccess({ activities: activities })),
                    catchError((err) => of(getAllActivitiesError({ payload: err })))
                )
            )
        )
    );

    getAdminActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getAdminActivities),
            switchMap((action) =>
                this.activityService.getActivities().pipe(
                    map((activities) => getAdminActivitiesSuccess({ activities: activities.filter(act => act.userId === action.ownerId) })),
                    catchError((err) => of(getAdminActivitiesError({ payload: err })))
                ))
        )
    );

    getMyActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getMyActivities),
            switchMap((action) =>
                this.activityService.getActivities().pipe(
                    mergeMap((activities) =>
                        this.activityService.getMyActivities(action.userId).pipe(
                            map(myactivities => myactivities.map(act => act.activityId)),
                            map(array => activities.filter(act => array.includes(act.id))),
                            map((signUpActivities) =>
                                getMyActivitiesSuccess({ activities: signUpActivities })),
                            catchError((err) => of(getMyActivitiesError({ payload: err })))
                        )
                    ),
                    catchError((err) => of(getMyActivitiesError({ payload: err })))
                )
            )
        )
    );

    getSignedUpActivities$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getSignedUpActivities),
            switchMap((action) =>
                this.activityService.getMyActivities(action.userId).pipe(
                    map((myactivities) =>
                        getSignedUpActivitiesSuccess({ myactivities: myactivities })),
                    catchError((err) =>
                        of(getSignedUpActivitiesError({ payload: err })
                        )
                    )
                )
            )
        ));

    getPeopleRegistered$ = createEffect(() =>
        this.actions$.pipe(
            ofType(getPeopleRegistered),
            switchMap((action) =>
                this.activityService.getPeopleOnActivity(action.activityId).pipe(
                    map((myActivities) =>
                        getPeopleRegisteredSuccess({ peopleRegistered: myActivities.length })
                    ),
                    catchError((err) =>
                        of(getPeopleRegisteredError({ payload: err }))
                    )
                )
            )
        )
    )
}