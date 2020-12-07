import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users.service';
import { addUser, addUserError, addUserSuccess } from '../actions';

@Injectable()
export class SignUpEffects {
    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }

    signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addUser),
            switchMap((action) =>
                this.usersService.addUser(action.newUser).pipe(
                    tap((newUser) => {
                        if (newUser) {
                            this.usersService.loggedIn = true;
                            this.usersService.logger.next(
                                this.usersService.loggedIn);
                            this.usersService.currentUser = newUser;
                            this.usersService.userSubject.next(
                                this.usersService.currentUser);
                        }
                    }),
                    map((user) => addUserSuccess({ newUser: user })),
                    catchError((err) => of(addUserError({ payload: err })))
                )
            )
        ));
}