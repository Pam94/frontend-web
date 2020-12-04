import { createAction, props } from '@ngrx/store';
import { Activity } from 'src/app/shared/models/Activity';


/**
 * Get All Activities
 */
export const getAllActivities = createAction(
    '[Activity] Get All Activities'
);

export const getAllActivitiesSuccess = createAction(
    '[Activity] Get All Activities Success',
    props<{ activities: Activity[] }>()
);

export const getAllActivitiesError = createAction(
    '[Activity] Get All Activities Error',
    props<{ payload: any }>()
)

/**
 * Get Admin Activities
 */
export const getAdminActivities = createAction(
    '[Activity] Get Admin Activities',
    props<{ ownerId: number }>()
);

export const getAdminActivitiesSuccess = createAction(
    '[Activity] Get Admin Activities Success',
    props<{ activities: Activity[] }>()
);

export const getAdminActivitiesError = createAction(
    '[Activity] Get Admin Activities Error',
    props<{ payload: any }>()
)

/**
 * Get My Activities
 */
export const getMyActivities = createAction(
    '[Activity] Get My Activities',
    props<{ userId: number }>()
);

export const getMyActivitiesSuccess = createAction(
    '[Activity] Get My Activities Success',
    props<{ activities: Activity[] }>()
);

export const getMyActivitiesError = createAction(
    '[Activity] Get My Activities Error',
    props<{ payload: any }>()
)

/**
 * Create Activity
 */
export const createActivity = createAction(
    '[Activity] Create Activity',
    props<{ name: string, category: string, subcategory: string, price: number, language: string, minimumCapacity: number, limitCapacity: number, userId: number }>()
);

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