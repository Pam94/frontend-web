import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';
import { logInError, logInSucess, logOut } from '../actions';

export interface LoginState {
    isLoggedIn: boolean;
    user: User | null;
    errorMessage: string | null;
}

export const initialLoginState: LoginState = {
    isLoggedIn: false,
    user: null,
    errorMessage: null
}

const _loginReducer = createReducer(
    initialLoginState,
    on(logInSucess, (state, { user }) => ({
        ...state,
        isLoggedIn: true,
        user: user,
        errorMessage: null

    })),
    on(logInError, (state, { payload }) => {
        return {
            ...state,
            isLoggedIn: false,
            user: null,
            errorMessage: payload
        }
    }),
    on(logOut, () => initialLoginState)
);

export function loginReducer(state, action) {
    return _loginReducer(state, action);
}