// react
import { 
    createContext, 
    Dispatch,
} from 'react';
// reducer
import { 
    PayloadAction
} from '@reduxjs/toolkit';
import {
    combineLabelrReducers,
} from '@/utils';
// reducer
import {
    initialState_SigninContext,
    reducer_SigninContext,
} from './reducers/signinContextReducer';
import {
    initialState_SignupContext,
    reducer_SignupContext,
} from './reducers/signupContextReducer';
import {
    initialState_FindPasswordContext,
    reducer_FindPasswordContext,
} from './reducers/findPasswordContextReducer';
import {
    initialState_ResetPasswordContext,
    reducer_ResetPasswordContext,
} from './reducers/resetPasswordContextReducer';
import {
    initialState_RequestVerifyEmailContext,
    reducer_requestVerifyEmailContext,
} from './reducers/requestVerifyEmailContextReducer';

//
// initialState
//
const initialState = {
    ...initialState_SigninContext,
    ...initialState_SignupContext,
    ...initialState_FindPasswordContext,
    ...initialState_ResetPasswordContext,
    ...initialState_RequestVerifyEmailContext,
};

//
// reducer
//
export const accountsLayoutReducer = combineLabelrReducers([
    reducer_SigninContext,
    reducer_SignupContext,
    reducer_FindPasswordContext,
    reducer_ResetPasswordContext,
    reducer_requestVerifyEmailContext,
], initialState);

//
// context
//
export const AccountsLayoutContextState = createContext<typeof initialState>(initialState);
export const AccountsLayoutContextDispatch = createContext<
    Dispatch<PayloadAction<any>>
>(() => {/** */});
