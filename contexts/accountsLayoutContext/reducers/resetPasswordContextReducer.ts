import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'resetPasswordPage';

export type TResetPasswordPageState = {
    resetPassword: {
        password: string;
        passwordConfirm: string;
    };
};

//
// initialState
//
export const initialState_ResetPasswordContext: TResetPasswordPageState = {
    resetPassword: {
        password: '',
        passwordConfirm: '',
    },
};

//
// action
//
export const reset_ResetPasswordContext = createAction(`${NAMESPACE}/reset`);
export const setPassword_ResetPasswordContext = createAction<string>(`${NAMESPACE}/setPassword`);
export const setPasswordConfirm_ResetPasswordContext = createAction<string>(`${NAMESPACE}/setPasswordConfirm`);

//
// reducer
//
export const reducer_ResetPasswordContext = createReducer(initialState_ResetPasswordContext, builder => {
    builder
        .addCase(reset_ResetPasswordContext, state => {
            state.resetPassword = {
                password: '',
                passwordConfirm: '',
            };
        })
        .addCase(setPassword_ResetPasswordContext, (state, action: PayloadAction<string>) => {
            state.resetPassword.password = action.payload;
        })
        .addCase(setPasswordConfirm_ResetPasswordContext, (state, action: PayloadAction<string>) => {
            state.resetPassword.passwordConfirm = action.payload;
        });
});
