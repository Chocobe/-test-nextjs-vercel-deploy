import {
    createAction, createReducer, PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'signinPage';

export type TSigninPageState = {
    signinPage: {
        email: string;
        password: string;
    };
};

export const signinPageInitialState: TSigninPageState = {
    signinPage: {
        email: '',
        password: '',
    },
};

export const setEmailToSigninPage = createAction<string>(`${NAMESPACE}/setEmail`);
export const setPasswordToSigninPage = createAction<string>(`${NAMESPACE}/setPassword`);

export const signinPageReducer = createReducer(signinPageInitialState, builder => {
    builder
        .addCase(setEmailToSigninPage, (state, action: PayloadAction<string>) => {
            state.signinPage.email = action.payload;
        })
        .addCase(setPasswordToSigninPage, (state, action: PayloadAction<string>) => {
            state.signinPage.password = action.payload;
        });
});
