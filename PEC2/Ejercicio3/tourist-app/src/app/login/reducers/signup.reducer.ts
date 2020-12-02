import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';
import { addUserError, addUserSuccess } from '../actions';

export interface UsersState {
    users: User[],
    errorMessage: string | null
}

export const initialSignUpState: UsersState = {
    users: [],
    errorMessage: null
}

const _signUpReducer = createReducer(
    initialSignUpState,
    on(addUserSuccess, (state, { newUser }) => ({
        ...state,
        errorMessage: null,
        users: [...state.users, new User(
            newUser.name,
            newUser.surname,
            newUser.email,
            newUser.password,
            newUser.type
        )]
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