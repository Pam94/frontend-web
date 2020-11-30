import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './todos/reducers';

export interface AppState {
    todosApp: reducers.TodoState;
}

export const appReducers: ActionReducerMap<AppState> = {
    todosApp: reducers.todoReducer
}