import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { completeTodo, createTodo, deleteTodo, editTodo } from '../actions/todo.action';

export interface TodoState {
    todos: Todo[],
    loading: boolean,
    loaded: boolean,
    error: any
}

export const initialState: TodoState = {
    todos: [new Todo('Tarea 1')],
    loading: false,
    loaded: false,
    error: null
};

const _todoReducer = createReducer(
    initialState,
    on(createTodo, (state, { title }) => ({
        ...state,
        loading: false,
        loaded: false,
        todos: [...state.todos, new Todo(title)]
    })),
    /*on(completeTodo, (state, { id }) => {
        return state.todos.map((todo) => {
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
    on(deleteTodo, (state, { id }) => state.filter(todo => todo.id !== id))*/
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

