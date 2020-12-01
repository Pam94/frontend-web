import { createReducer, on } from '@ngrx/store';
import { Todo } from '../model/todo.model';
import { completeAllTodos, completeTodo, createTodo, deleteAlllCompletedTodos, deleteTodo, editTodo, getAllTodos, getAllTodosError, getAllTodosSuccess } from '../actions/todo.action';

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
    on(completeTodo, (state, { id }) => ({
        ...state,
        loading: false,
        loaded: false,
        todos: [...state.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    done: true
                };
            } else {
                return todo;
            }
        })]
    })),
    on(editTodo, (state, { id, title }) => ({
        ...state,
        loading: false,
        loaded: false,
        todos: [...state.todos.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    title
                }
            } else {
                return todo;
            }
        })]
    })),
    on(deleteTodo, (state, { id }) => ({
        ...state,
        loading: false,
        loaded: false,
        todos: [...state.todos.filter(todo => todo.id !== id)]
    })),
    on(getAllTodos, state => ({ ...state, loading: true })),
    on(getAllTodosSuccess, (state, { todos }) => ({
        ...state,
        loading: false,
        loaded: true,
        errorMessage: null,
        todos: [...todos]
    })),
    on(getAllTodosError, (state, { payload }) => ({
        ...state,
        loading: false,
        loaded: false,
        error: payload
    })),
    on(completeAllTodos, state => ({
        ...state,
        loading: false,
        loaded: true,
        error: null,
        todos: [...state.todos.map((todo) => {
            return {
                ...todo,
                done: true
            };
        })]
    })),
    on(deleteAlllCompletedTodos, state => ({
        ...state,
        loading: false,
        loaded: false,
        error: null,
        todos: [...state.todos.filter((todo) => !todo.done)]
    }))
);

export function todoReducer(state, action) {
    return _todoReducer(state, action);
}

