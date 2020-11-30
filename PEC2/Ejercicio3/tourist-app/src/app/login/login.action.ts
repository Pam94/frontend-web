import { createAction, props } from '@ngrx/store';
import { UserType } from '../shared/models/UserType';

export const logIn = createAction(
    '[Login] LogIn',
    props<{ email: string, password: string }>()
)

export const addUser = createAction(
    '[Login] AddUser',
    props<{ name: string, surname: string, userType: UserType, email: string, password: string }>()
)

export const logOut = createAction(
    '[Login] LogOut'
)