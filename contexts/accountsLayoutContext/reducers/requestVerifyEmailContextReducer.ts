import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';
import { 
    TRequestVerifyEmailType,
} from '@/components/pages/accountPages/RequestVerifyEmailPage/requestVerifyEmailPageTypes';

const NAMESPACE = 'requestVerifyEmailPage';

export type TRequestVerifyEmailPageState = {
    requestVerifyEmail: {
        email: string;
        type?: TRequestVerifyEmailType;
        hasExpired: boolean;
    };
};

//
// initialState
//
export const initialState_RequestVerifyEmailContext: TRequestVerifyEmailPageState = {
    requestVerifyEmail: {
        email: '',
        type: undefined,
        hasExpired: false,
    },
};

//
// actions
//
export const reset_RequestVerifyEmailContext = createAction<void>(`${NAMESPACE}/reset`);
export const setEmail_RequestVerifyEmailContext = createAction<string>(`${NAMESPACE}/setEmail`);
export const setType_RequestVerifyEmailContext = createAction<TRequestVerifyEmailType>(`${NAMESPACE}/setType`);
export const setHasExpired_RequestVerifyEmailContext = createAction<boolean>(`${NAMESPACE}/setHasExpired`);

//
// reducer
//
export const reducer_requestVerifyEmailContext = createReducer(initialState_RequestVerifyEmailContext, builder => {
    builder
        .addCase(reset_RequestVerifyEmailContext, state => {
            state.requestVerifyEmail = {
                email: '',
                type: undefined,
                hasExpired: false,
            };
        })
        .addCase(setEmail_RequestVerifyEmailContext, (state, action: PayloadAction<string>) => {
            state.requestVerifyEmail.email = action.payload;
        })
        .addCase(setType_RequestVerifyEmailContext, (state, action: PayloadAction<TRequestVerifyEmailType>) => {
            state.requestVerifyEmail.type = action.payload;
        })
        .addCase(setHasExpired_RequestVerifyEmailContext, (state, action: PayloadAction<boolean>) => {
            state.requestVerifyEmail.hasExpired = action.payload;
        });
});
