import { TodoState } from './todo.state';
import { Injectable } from '@angular/core';
import { mergeMap, map, catchError } from 'rxjs/operators';

import { Action } from '@ngrx/store';

import * as TodoActions from './todo.action';

import { environment } from 'src/environments/environment';

import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoEffects {

    constructor(
        private http: HttpClient,
        private actions$: Actions
    ) { }


    @Effect()
    GetTodos$: Observable<Action> =
        this.actions$.pipe(
            ofType<TodoActions.GetTodos>(TodoActions.GET_TODOS),
            mergeMap(() =>
                this.http.get(environment.client.base_url + '/api/todos')
                    .pipe(
                        map((data: Response) => {

                            console.log(data);
                            return new TodoActions.GetTodosSuccess(data["data"]["docs"] as TodoState[]);
                        }),
                        catchError(() => of(new TodoActions.GetTodoError())
                        )
                    )));

    @Effect()
    createTodo$: Observable<Action> =
        this.actions$.pipe(
            ofType<TodoActions.CreateTodo>(TodoActions.CREATE_TODO),
            mergeMap(action =>
                this.http.post(environment.client.base_url + '/api/todos', action.payload).pipe(
                    map((data: Response) => {


                        return new TodoActions.CreateTodoSuccess({
                            ...data["data"], loading: false
                        });
                    }),
                    catchError(() => of(new TodoActions.CreateTodoError())))
            ));


    @Effect()
    deleteTodo$: Observable<Action> =
        this.actions$.pipe(
            ofType<TodoActions.DeleteTodo>(TodoActions.DELETE_TODO),
            mergeMap(action =>
                this.http.delete(environment.client.base_url + '/api/todos/' + action.payload._id).pipe(
                    map((data: Response) => {

                        return new TodoActions.DeleteTodoSuccess({
                            ...action.payload, loading: false
                        });
                    }),
                    catchError(() => of(new TodoActions.DeleteTodoError(action.payload))))
            ));

    @Effect()
    updateTodo$: Observable<Action> =
        this.actions$.pipe(
            ofType<TodoActions.UpdateTodo>(TodoActions.UPDATE_TODO),
            mergeMap(action =>
                this.http.put(environment.client.base_url + '/api/todos/', action.payload).pipe(
                    map((data: Response) => {

                        return new TodoActions.UpdateTodoSuccess({
                            ...action.payload, loading: false, editing: false
                        });
                    }),
                    catchError(() => of(new TodoActions.DeleteTodoError(action.payload))))
            ));



}
