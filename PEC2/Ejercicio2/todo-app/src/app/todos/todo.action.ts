import { createAction, props } from '@ngrx/store';

export const createTodo = createAction('[TODO] Create Todo', props<{ title: string }>()
);
