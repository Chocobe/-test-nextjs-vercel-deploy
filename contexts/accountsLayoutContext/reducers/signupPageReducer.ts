import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'signupPage';

export type TSignupPageState = {
    signupPage: {
        email: string;
        password: string;
        passwordConfirm: string;
    };
};

export const signupPageInitialState: TSignupPageState = {
    signupPage: {
        email: '',
        password: '',
        passwordConfirm: '',
    },
};

export const setEmailToSignupPage = createAction<string>(`${NAMESPACE}/setEmail`);
export const setPasswordToSignupPage = createAction<string>(`${NAMESPACE}/setPassword`);
export const setPasswordConfirmToSignupPage = createAction<string>(`${NAMESPACE}/setConfirmPassword`);

export const signupPageReducer = createReducer(signupPageInitialState, builder => {
    builder
        .addCase(setEmailToSignupPage, (state, action: PayloadAction<string>) => {
            state.signupPage.email = action.payload;
        })
        .addCase(setPasswordToSignupPage, (state, action: PayloadAction<string>) => {
            state.signupPage.password = action.payload;
        })
        .addCase(setPasswordConfirmToSignupPage, (state, action: PayloadAction<string>) => {
            state.signupPage.passwordConfirm = action.payload;
        });
});
