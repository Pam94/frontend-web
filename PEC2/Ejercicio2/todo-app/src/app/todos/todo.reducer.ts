import { createReducer, on } from '@ngrx/store';
import { Todo } from './model/todo.model';
import { completeTodo, createTodo, deleteTodo, editTodo } from './todo.action';

export const initialState: Todo[] = [];

const _todoReducer = createReducer(
    initialState,
    on(createTodo, (state, { title }) => [...state, new Todo(title)]),
    on(completeTodo, (state, { id }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: true
                };
            } else {
                return todo;
            }
        });
    }),
    on(editTodo, (state, { id, title }) => {
        return state.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title: title
                };
            } else {
                return todo;
            }
        })
    }),
    on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

