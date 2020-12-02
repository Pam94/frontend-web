import { Injectable } from "@angular/core";
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users.service';
import { login, logInError, logInSucess } from '../actions';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private router: Router,
        private usersService: UsersService
    ) { }

    logIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            mergeMap((action) =>
                this.usersService.login(action.email, action.password).pipe(
                    map((user) => logInSucess({ user: user })),
                    catchError((err) => of(logInError({ payload: err })))
                )
            )));
}