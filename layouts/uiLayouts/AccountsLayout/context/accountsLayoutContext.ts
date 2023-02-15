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
    signupPageReducer,
    signupPageInitialState,
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
    resultVerifyEmailPageInitialState,
    resultVerifyEmailPageReducer,
} from './reducers/resultVerifyEmailPageReducer';

const initialState = {
    ...signinPageInitialState,
    ...signupPageInitialState,
    ...findPasswordPageInitialState,
    ...resetPasswordPageInitialState,
    ...resultVerifyEmailPageInitialState,
};

export const accountsLayoutReducer = combineLabelrReducers([
    signinPageReducer,
    signupPageReducer,
    findPasswordPageReducer,
    resetPasswordPageReducer,
    resultVerifyEmailPageReducer,
], initialState);

export const AccountsLayoutContextState = createContext<typeof initialState | null>(null);
export const AccountsLayoutContextDispatch = createContext<Dispatch<PayloadAction<any>> | null>(null);
