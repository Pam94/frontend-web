import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/shared/models/Activity';

/**
 * Create Activity
 */
export const createActivity = createAction(
    '[Activity] Create Activity',
    props<{ name: string, category: string, subcategory: string, price: number, language: string, minimumCapacity: number, limitCapacity: number, userId: number }>()
);

/*export const createActivitySuccess = createAction(
    '[Activity] Create Activity Sucess',
    props<{ activity: Activity }>());

export const createActivityError = createAction(
    '[Activity] Create Activity Error',
    props<{ payload: any }>());*/

/**
 * Cancel Activity
 */
export const cancellActivity = createAction(
    '[Activity] Cancel Activity',
    props<{ id: number }>());

/**
 * Edit Activity
 */
export const editActivity = createAction(
    '[Activity] Edit Activity',
    props<{ id: number, newInfo: Activity }>()
);

/**
 * Delete Activity
 */
export const deleteActivity = createAction(
    '[Activity] Delete Activity',
    props<{ id: number }>()
);

/**
 * Sign Up Activity
 */
export const signUpActivity = createAction(
    '[Activity] Sign Up Activity',
    props<{ id: number, userId: number }>()
)