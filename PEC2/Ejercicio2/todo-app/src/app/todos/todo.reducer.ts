import { createReducer, on } from '@ngrx/store';
import { Todo } from './model/todo.model';
import { createTodo } from './todo.action';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
    initialState,
    on(createTodo, (state, { title }) => [...state, new Todo(title)])
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

