import { on, createReducer } from '@ngrx/store';
import { Activity } from 'src/app/shared/models/Activity';
import { MyActivities } from 'src/app/shared/models/MyActivities';
import { cancellActivity, createActivity, deleteActivity, editActivity, getAdminActivities, getAdminActivitiesError, getAdminActivitiesSuccess, getAllActivities, getAllActivitiesError, getAllActivitiesSuccess, getMyActivities, getMyActivitiesError, getMyActivitiesSuccess, getPeopleRegistered, getPeopleRegisteredError, getPeopleRegisteredSuccess, getSignedUpActivities, getSignedUpActivitiesError, getSignedUpActivitiesSuccess, signUpActivity } from '../actions';

export interface ActivityState {
    activities: Activity[],
    myActivities: MyActivities[],
    activity: Activity,
    activityId: number,
    peopleRegistered: number,
    userId: number,
    ownerId: number,
    loading: boolean,
    loaded: boolean,
    errorMessage: string | null
}

export const initialActivityState: ActivityState = {
    activities: [],
    myActivities: [],
    activity: null,
    activityId: 0,
    peopleRegistered: 0,
    userId: 0,
    ownerId: 0,
    loading: false,
    loaded: false,
    errorMessage: null
}

const _activityReducer = createReducer(
    initialActivityState,
    on(getAllActivities, state => ({
        ...state,
        loading: true
    })),
    on(getAllActivitiesSuccess, (state, { activities }) => ({
        ...state,
        loading: false,
        loaded: true,
        errorMessage: null,
        activities: [...activities]
    })),
    on(getAllActivitiesError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        errorMessage: payload
    })),
    on(getAdminActivities, (state, { ownerId }) => ({
        ...state,
        loading: true,
        ownerId: ownerId
    })),
    on(getAdminActivitiesSuccess, (state, { activities }) => ({
        ...state,
        loading: false,
        loaded: true,
        errorMessage: null,
        activities: [...activities]
    })),
    on(getAdminActivitiesError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        errorMessage: payload
    })),
    on(getMyActivities, (state, { userId }) => ({
        ...state,
        loading: true,
        userId: userId
    })),
    on(getMyActivitiesSuccess, (state, { activities }) => ({
        ...state,
        loading: false,
        loaded: true,
        errorMessage: null,
        activities: [...activities]
    })),
    on(getMyActivitiesError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        errorMessage: payload
    })),
    on(getSignedUpActivities, (state, { userId }) => ({
        ...state,
        loading: true,
        userId: userId
    })),
    on(getSignedUpActivitiesSuccess, (state, { myactivities }) => ({
        ...state,
        loading: false,
        loaded: true,
        errorMessage: null,
        myactivities: [...myactivities]
    })),
    on(getSignedUpActivitiesError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        errorMessage: payload
    })),
    on(createActivity, (state, { name, category, subcategory, price, language, minimumCapacity, limitCapacity, userId }) => ({
        ...state,
        loading: false,
        loaded: false,
        activities: [...state.activities,
        new Activity(name,
            category,
            subcategory,
            price,
            language,
            minimumCapacity,
            limitCapacity,
            userId)],
        errorMessage: null
    })),
    on(cancellActivity, (state, { id }) => ({
        ...state,
        loading: false,
        loaded: false,
        activities: [...state.activities.map((activity) => {
            if (activity.id === id) {
                return {
                    ...activity,
                    cancelled: true
                }
            } else {
                return activity;
            }
        })],
        errorMessage: null
    })),
    on(editActivity, (state, { id, newInfo }) => ({
        ...state,
        loading: false,
        loaded: false,
        errorMessage: null,
        activities: [...state.activities.map((activity) => {
            if (activity.id === id) {
                return {
                    ...activity,
                    newInfo
                }
            } else {
                return activity;
            }
        })]
    })),
    on(deleteActivity, (state, { id }) => ({
        ...state,
        loading: false,
        loaded: false,
        errorMessage: null,
        activities: [...state.activities.filter((activity) =>
            activity.id !== id)]
    })),
    on(signUpActivity, (state, { currentActivity, userId }) => ({
        ...state,
        myActivities: [...state.myActivities,
        new MyActivities(
            userId,
            currentActivity
        )],
        errorMessage: null
    })),
    on(getPeopleRegistered, (state, { activityId }) => ({
        ...state,
        activityId
    })),
    on(getPeopleRegisteredSuccess, (state, { peopleRegistered }) => ({
        ...state,
        peopleRegistered
    })),
    on(getPeopleRegisteredError, (state, { payload }) => ({
        ...state,
        errorMessage: payload
    }))
);

export function activityReducer(state, action) {
    return _activityReducer(state, action);
}