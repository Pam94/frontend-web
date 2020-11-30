import { createReducer, on } from '@ngrx/store';
import { User } from '../shared/models/User';
import { logIn, logOut } from './login.action';

export interface LoginState {
    isLoggedIn: boolean;
    user: User | null;
    errorMessage: string | null;
}

export const initialState: LoginState = {
    isLoggedIn: false,
    user: null,
    errorMessage: null
}

const _loginReducer = createReducer(
    initialState,
    on(logIn, (state, { email, password }) => {
        return {
            ...state,
            isLoggedIn: true,
            user: {
                email: email,
                password: password
            },
            errorMessage: null
        }
    }),
    on(logOut, () => initialState)
);

export function loginReducer(state, action) {
    return _loginReducer(state, action);
}