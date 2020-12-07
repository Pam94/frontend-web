import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { UsersService } from 'src/app/shared/services/users.service';
import { login, logInError, logInSucess, logOut, logOutSuccess } from '../actions';

@Injectable()
export class LoginEffects {
    constructor(
        private actions$: Actions,
        private usersService: UsersService
    ) { }

    logIn$ = createEffect(() =>
        this.actions$.pipe(
            ofType(login),
            switchMap((action) =>
                this.usersService.login(action.email, action.password).pipe(
                    tap((user) => {
                        if (user) {
                            this.usersService.loggedIn = true;
                            this.usersService.currentUser = user;
                            this.usersService.logger.next(
                                this.usersService.loggedIn);
                            this.usersService.userSubject.next(
                                this.usersService.currentUser);

                            this.usersService.getCurrentUser();
                            this.usersService.router.navigate(['/']);
                        }
                        else {
                            this.usersService.loggedIn = false;
                            this.usersService.currentUser = null;
                            this.usersService.logger.next(
                                this.usersService.loggedIn);
                            this.usersService.userSubject.next(
                                this.usersService.currentUser);
                        }
                    }),
                    map((loggedUser) => logInSucess({ user: loggedUser })),
                    catchError((err) => of(logInError({ payload: err })))
                )
            )));

    logOut$ = createEffect(() =>
        this.actions$.pipe(
            ofType(logOut),
            map(() => {
                this.usersService.logout();
                return logOutSuccess();
            })
        ));
}