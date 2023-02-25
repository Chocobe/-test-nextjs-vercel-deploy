import {
    createAction, 
    createReducer, 
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'signinPage';

export type TSigninPageState = {
    signinPage: {
        email: string;
        password: string;
    };
};

//
// initialState
//
export const signinPageInitialState: TSigninPageState = {
    signinPage: {
        email: '',
        password: '',
    },
};

//
// action
//
export const resetSigninContext = createAction(`${NAMESPACE}/reset`);
export const setEmailToSigninContext = createAction<string>(`${NAMESPACE}/setEmail`);
export const setPasswordToSigninContext = createAction<string>(`${NAMESPACE}/setPassword`);

//
// reducer
//
export const signinPageReducer = createReducer(signinPageInitialState, builder => {
    builder
        .addCase(resetSigninContext, state => {
            state.signinPage = {
                email: '',
                password: '',
            };
        })
        .addCase(setEmailToSigninContext, (state, action: PayloadAction<string>) => {
            state.signinPage.email = action.payload;
        })
        .addCase(setPasswordToSigninContext, (state, action: PayloadAction<string>) => {
            state.signinPage.password = action.payload;
        });
});
