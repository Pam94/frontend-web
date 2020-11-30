import { createReducer, on } from '@ngrx/store';
import { User } from 'src/app/shared/models/User';
import { addUserError, addUserSuccess } from '../actions';

export interface UsersState {
    users: User[],
    loading: boolean,
    loaded: boolean,
    errorMessage: string | null
}

export const initialSignUpState: UsersState = {
    users: [],
    loading: false,
    loaded: false,
    errorMessage: null
}

const _signUpReducer = createReducer(
    initialSignUpState,
    on(addUserSuccess, (state, { newUserInformation }) => {
        return {
            ...state,
            users: [...state.users, new User(
                newUserInformation.name,
                newUserInformation.surname,
                newUserInformation.email,
                newUserInformation.password,
                newUserInformation.type
            )],
            loading: false,
            loaded: false,
            errorMessage: null
        }
    }),
    on(addUserError, (state, { payload }) => {
        return {
            ...state,
            loading: false,
            loaded: false,
            errorMessage: payload
        }
    })
);

export function signUpReducer(state, action) {
    return _signUpReducer(state, action);
}