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
export const resetPasswordPageInitialState: TResetPasswordPageState = {
    resetPassword: {
        password: '',
        passwordConfirm: '',
    },
};

//
// action
//
export const resetResetPasswordContext = createAction(`${NAMESPACE}/reset`);
export const setPasswordToResetPasswordContext = createAction<string>(`${NAMESPACE}/setPassword`);
export const setPasswordConfirmToResetPasswordContext = createAction<string>(`${NAMESPACE}/setPasswordConfirm`);

//
// reducer
//
export const resetPasswordPageReducer = createReducer(resetPasswordPageInitialState, builder => {
    builder
        .addCase(resetResetPasswordContext, state => {
            state.resetPassword = {
                password: '',
                passwordConfirm: '',
            };
        })
        .addCase(setPasswordToResetPasswordContext, (state, action: PayloadAction<string>) => {
            state.resetPassword.password = action.payload;
        })
        .addCase(setPasswordConfirmToResetPasswordContext, (state, action: PayloadAction<string>) => {
            state.resetPassword.passwordConfirm = action.payload;
        });
});
