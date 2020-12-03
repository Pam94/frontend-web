import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';
import { addUser, addUserError, addUserSuccess } from '../actions';
import { initialLoginState } from './login.reducer';

const _signUpReducer = createReducer(
    initialLoginState,
    on(addUserSuccess, (state, { newUser }) => ({
        ...state,
        errorMessage: null,
        user: newUser
    })),
    on(addUserError, (state, { payload }) => {
        return {
            ...state,
            errorMessage: payload
        }
    })
);

export function signUpReducer(state, action) {
    return _signUpReducer(state, action);
}