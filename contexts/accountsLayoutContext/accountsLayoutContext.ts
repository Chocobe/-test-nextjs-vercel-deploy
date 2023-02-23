import { 
    createContext, 
    Dispatch
} from 'react';
import {
    combineLabelrReducers,
} from '@/utils';
import { 
    PayloadAction
} from '@reduxjs/toolkit';
// reducer
import {
    signinPageInitialState,
    signinPageReducer,
} from './reducers/signinPageReducer';
import {
    signupPageInitialState,
    signupPageReducer,
} from './reducers/signupPageReducer';
import {
    findPasswordPageInitialState,
    findPasswordPageReducer,
} from './reducers/findPasswordPageReducer';
import {
    resetPasswordPageInitialState,
    resetPasswordPageReducer,
} from './reducers/resetPasswordPageReducer';
import {
    requestVerifyEmailPageInitialState,
    requestVerifyEmailPageReducer,
} from './reducers/requestVerifyEmailPageReducer';

const initialState = {
    ...signinPageInitialState,
    ...signupPageInitialState,
    ...findPasswordPageInitialState,
    ...resetPasswordPageInitialState,
    ...requestVerifyEmailPageInitialState,
};

export const accountsLayoutReducer = combineLabelrReducers([
    signinPageReducer,
    signupPageReducer,
    findPasswordPageReducer,
    resetPasswordPageReducer,
    requestVerifyEmailPageReducer,
], initialState);

export const AccountsLayoutContextState = createContext<typeof initialState | null>(null);
export const AccountsLayoutContextDispatch = createContext<Dispatch<PayloadAction<any>> | null>(null);
