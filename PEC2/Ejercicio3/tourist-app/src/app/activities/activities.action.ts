import { createAction, props } from '@ngrx/store';
import { Activity } from '../shared/models/Activity';

export const createActivity = createAction(
    '[Activity] Create Activity',
    props<{ name: string, category: string, subcategory: string, price: number, language: string, minimumCapacity: number, limitCapacity: number, userId: number }>()
);

export const cancellActivity = createAction(
    '[Activity] Cancel Activity',
    props<{ id: number }>());

export const editActivity = createAction(
    '[Activity] Edit Activity',
    props<{ id: number, newActivity: Activity }>()
);

export const deleteActivity = createAction(
    '[Activity] Delete Activity',
    props<{ id: number }>()
);

export const signUpActivity = createAction(
    '[Activity] Sign Up Activity',
    props<{ activityId: number, userId: number }>()
)