import { createReducer, on } from '@ngrx/store';
import { decrement, duplicate, increment, reset } from './counter.action';
/*
export function counterReducer(state: number = 20, action: Action) {

    switch (action.type) {

        case increment.type:
            return state + 1;

        case decrement.type:
            return state - 1;

        default: return state;

    }
}*/

export const initialState = 20;

const _counterReducer = createReducer(
    initialState,
    on(increment, (state) => state + 1),
    on(decrement, (state) => state - 1),
    on(duplicate, (state, { number }) => state * number),
    on(reset, (state) => initialState)
);

export function counterReducer(state, action) {
    return _counterReducer(state, action);
}