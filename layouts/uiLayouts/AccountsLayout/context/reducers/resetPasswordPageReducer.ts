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

export const resetPasswordPageInitialState: TResetPasswordPageState = {
    resetPassword: {
        password: '',
        passwordConfirm: '',
    },
};

export const setPasswordToResetPasswordPage = createAction<string>(`${NAMESPACE}/setPassword`);
export const setPasswordConfirmToResetPasswordPage = createAction<string>(`${NAMESPACE}/setPasswordConfirm`);

export const resetPasswordPageReducer = createReducer(resetPasswordPageInitialState, builder => {
    builder
        .addCase(setPasswordToResetPasswordPage, (state, action: PayloadAction<string>) => {
            state.resetPassword.password = action.payload;
        })
        .addCase(setPasswordConfirmToResetPasswordPage, (state, action: PayloadAction<string>) => {
            state.resetPassword.passwordConfirm = action.payload;
        });
});
