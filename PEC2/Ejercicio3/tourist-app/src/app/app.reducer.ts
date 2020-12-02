import { ActionReducerMap } from '@ngrx/store';
import * as loginReducers from './login/reducers';
import * as activityReducers from './activities/reducers'

export interface AppState {
    login: loginReducers.LoginState,
    users: loginReducers.UsersState,
    activities: activityReducers.ActivityState
}

export const appReducers: ActionReducerMap<AppState> = {
    login: loginReducers.loginReducer,
    users: loginReducers.signUpReducer,
    activities: activityReducers.activityReducer
}