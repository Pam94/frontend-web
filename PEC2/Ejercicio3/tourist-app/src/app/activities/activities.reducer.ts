import { on, createReducer } from '@ngrx/store';
import { Activity } from '../shared/models/Activity';
import { cancellActivity, createActivity, deleteActivity, editActivity, signUpActivity } from './activities.action';

export const initialState: Activity[] = [];

const _activityReducer = createReducer(
    initialState,
    on(createActivity, (state, { name, category, subcategory, price, language, minimumCapacity, limitCapacity }) =>
        [state, new Activity(name, category, subcategory, price, language, minimumCapacity, limitCapacity)]),
    on(cancellActivity, (state, { id }) => {
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
    on(editActivity, (state, { id, newActivity }) => {
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
    on(signUpActivity, (state, { activityId, userId }) => {
        return state.map((activity) => {
            if (activity.id === activityId) {
                return {
                    ...activity,
                    userId: userId
                };
            } else {
                return activity;
            }
        });
    })
);

export function activityReducer(state, action) {
    return _activityReducer(state, action);
}