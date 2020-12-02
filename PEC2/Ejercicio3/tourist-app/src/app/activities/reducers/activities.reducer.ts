import { on, createReducer } from '@ngrx/store';
import { Activity } from 'src/app/shared/models/Activity';
import { cancellActivity, createActivity, deleteActivity, editActivity, getAllActivities, getAllActivitiesError, getAllActivitiesSuccess, signUpActivity } from '../actions';

export interface ActivityState {
    activities: Activity[],
    userId: number,
    ownerId: number,
    loading: boolean,
    loaded: boolean,
    errorMessage: string | null
}

export const initialActivityState: ActivityState = {
    activities: [],
    userId: 0,
    ownerId: 0,
    loading: false,
    loaded: false,
    errorMessage: null
}

const _activityReducer = createReducer(
    initialActivityState,
    on(getAllActivities, (state, { userId, ownerId }) => ({
        ...state,
        userId,
        ownerId,
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
    on(createActivity, (state, { name, category, subcategory, price, language, minimumCapacity, limitCapacity, userId }) => ({
        ...state,
        loading: false,
        loaded: false,
        userId,
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
        activities: [...state.activities.filter((activity) => activity.id !== id)]
    })),
    on(signUpActivity, (state, { id, userId }) => ({
        ...state,
        loading: false,
        loaded: false,
        userId,
        errorMessage: null,
        activities: [...state.activities.map((activity) => {
            if (activity.id === id) {
                return {
                    ...activity,
                    userId
                }
            } else {
                return activity;
            }
        })]
    }))
);

export function activityReducer(state, action) {
    return _activityReducer(state, action);
}