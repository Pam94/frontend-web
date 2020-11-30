import { on, createReducer } from '@ngrx/store';
import { Activity } from 'src/app/shared/models/Activity';
import { cancellActivity, createActivity, deleteActivity, editActivity, signUpActivity } from '../actions';

export interface ActivityState {
    activities: Activity[],
    loading: boolean,
    loaded: boolean,
    errorMessage: string | null
}

export const initialActivityState: ActivityState = {
    activities: [],
    loading: false,
    loaded: false,
    errorMessage: null
}

const _activityReducer = createReducer(
    initialActivityState,
    on(createActivity, (state, { name, category, subcategory, price, language, minimumCapacity, limitCapacity }) => ({
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
            limitCapacity)]
    })),
    /*on(cancellActivity, (state, { id }) => {
        return state.map((activity) => {
            if (activity.id === id) {
                return {
                    ...activity,
                    cancelled: true
                };
            } else {
                return activity;
            }
        });
    }),
    on(editActivity, (state, { id, newActivityInformation }) => {
        return state.map((activity) => {
            if (activity.id === id) {
                return {
                    ...activity,
                    name: newActivity.name,
                    category: newActivity.category,
                    subcategory: newActivity.subcategory,
                    price: newActivity.price,
                    language: newActivity.language,
                    minimumCapacity: newActivity.minimumCapacity,
                    limitCapacity: newActivity.limitCapacity,
                    userId: newActivity.userId,
                    cancelled: newActivity.cancelled,
                    date: newActivity.date,
                    description: newActivity.description

                };
            } else {
                return activity;
            }
        });
    }),
    on(deleteActivity, (state, { id }) => state.filter(activity => activity.id !== id)),
    on(signUpActivity, (state, { id, userId }) => {
        return state.map((activity) => {
            if (activity.id === id) {
                return {
                    ...activity,
                    userId: userId
                };
            } else {
                return activity;
            }
        });
    })*/
);

export function activityReducer(state, action) {
    return _activityReducer(state, action);
}