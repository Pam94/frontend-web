import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap, pluck } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users.service';
import { addUser, addUserError, addUserSuccess } from '../actions';

@Injectable()
export class SignUpEffects {
    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }

    /*signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addUser),
            mergeMap((action) =>
                this.usersService.addUser(action.newUser).pipe(
                    map((user) => addUserSuccess({ newUser: user })),
                    catchError((err) => of(addUserError({ payload: err })))
                )
            )
        ));*/
}