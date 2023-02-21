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

//
// initialState
//
export const signupPageInitialState: TSignupPageState = {
    signupPage: {
        email: '',
        password: '',
        passwordConfirm: '',
    },
};

//
// actions
//
export const resetSignupPage = createAction(`${NAMESPACE}/reset`);
export const setEmailToSignupPage = createAction<string>(`${NAMESPACE}/setEmail`);
export const setPasswordToSignupPage = createAction<string>(`${NAMESPACE}/setPassword`);
export const setPasswordConfirmToSignupPage = createAction<string>(`${NAMESPACE}/setConfirmPassword`);

//
// reducer
//
export const signupPageReducer = createReducer(signupPageInitialState, builder => {
    builder
        .addCase(resetSignupPage, (state, _action: PayloadAction<void>) => {
            state.signupPage = {
                email: '',
                password: '',
                passwordConfirm: '',
            };
        })
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
