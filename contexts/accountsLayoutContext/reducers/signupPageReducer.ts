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
export const resetSignupContext = createAction(`${NAMESPACE}/reset`);
export const setEmailToSignupContext = createAction<string>(`${NAMESPACE}/setEmail`);
export const setPasswordToSignupContext = createAction<string>(`${NAMESPACE}/setPassword`);
export const setPasswordConfirmToSignupContext = createAction<string>(`${NAMESPACE}/setConfirmPassword`);

//
// reducer
//
export const signupPageReducer = createReducer(signupPageInitialState, builder => {
    builder
        .addCase(resetSignupContext, (state, _action: PayloadAction<void>) => {
            state.signupPage = {
                email: '',
                password: '',
                passwordConfirm: '',
            };
        })
        .addCase(setEmailToSignupContext, (state, action: PayloadAction<string>) => {
            state.signupPage.email = action.payload;
        })
        .addCase(setPasswordToSignupContext, (state, action: PayloadAction<string>) => {
            state.signupPage.password = action.payload;
        })
        .addCase(setPasswordConfirmToSignupContext, (state, action: PayloadAction<string>) => {
            state.signupPage.passwordConfirm = action.payload;
        });
});
