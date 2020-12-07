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
        private usersService: UsersService,
        private router: Router
    ) { }

    signUp$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addUser),
            switchMap((action) =>
                this.usersService.addUser(action.newUser).pipe(
                    map((user) => addUserSuccess({ newUser: user })),
                    catchError((err) => of(addUserError({ payload: err })))
                )
            )
        ));

    signUpSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(addUserSuccess),
            tap((action) => {
                if (action.newUser) {
                    this.usersService.loggedIn = true;
                    this.usersService.logger.next(
                        this.usersService.loggedIn);
                    this.usersService.currentUser = action.newUser;
                    this.usersService.userSubject.next(
                        this.usersService.currentUser);

                    this.router.navigate(['/']);
                }
            })
        ));
}