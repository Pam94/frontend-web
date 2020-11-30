import { ActionReducerMap } from '@ngrx/store';
import * as reducers from './login/reducers';

export interface AppState {
    login: reducers.LoginState,
    users: reducers.UsersState,
    //activities: Activity[]
}

export const appReducers: ActionReducerMap<AppState> = {
    login: reducers.loginReducer,
    users: reducers.signUpReducer
}