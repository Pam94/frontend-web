import { createAction, props } from '@ngrx/store';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const duplicate = createAction('[Counter Component] Duplicate', props<{ number: number }>());
export const reset = createAction('[Counter Component] Reset');
