import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'findPasswordPage';

export type TFindPasswordContextState = {
    findPassword: {
        email: string;
    };
};

//
// initialState
//
export const initialState_FindPasswordContext: TFindPasswordContextState = {
    findPassword: {
        email: '',
    },
};

//
// actions
//
export const reset_FindPasswordContext = createAction<void>(`${NAMESPACE}/resetFindPassword`);
export const setEmail_FindPasswordContext = createAction<string>(`${NAMESPACE}/setEmail`);

//
// reducer
//
export const reducer_FindPasswordContext = createReducer(initialState_FindPasswordContext, builder => {
    builder
        .addCase(reset_FindPasswordContext, state => {
            state.findPassword = {
                email: '',
            };
        })
        .addCase(setEmail_FindPasswordContext, (
            state, 
            action: PayloadAction<string>
        ) => {
            state.findPassword.email = action.payload;
        });
});
