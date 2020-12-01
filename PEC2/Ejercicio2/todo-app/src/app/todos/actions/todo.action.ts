import { createAction, props } from '@ngrx/store';
import { Todo } from '../model/todo.model';

export const createTodo = createAction('[TODO] Create Todo', props<{ title: string }>()
);
export const completeTodo = createAction('[TODO] Complete Todo',
    props<{ id: number }>());

export const editTodo = createAction('[TODO] Edit Todo', props<{ id: number, title: string }>());

export const deleteTodo = createAction('[TODO] Delete Todo', props<{ id: number }>());

export const getAllTodos = createAction('[TODO] Get All Todos');

export const getAllTodosSuccess = createAction('[TODO] Get All Todos Success',
    props<{ todos: Todo[] }>());

export const getAllTodosError = createAction('[Todo] Get All Todos Error',
    props<{ payload: any }>());

export const completeAllTodos = createAction('[TODO] Complete All Todos');

export const deleteAlllCompletedTodos = createAction('[TODO] Delete All Completed Todos');