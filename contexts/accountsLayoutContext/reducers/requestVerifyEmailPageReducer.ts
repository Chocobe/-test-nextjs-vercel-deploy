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
export const requestVerifyEmailPageInitialState: TRequestVerifyEmailPageState = {
    requestVerifyEmail: {
        email: '',
        type: undefined,
        hasExpired: false,
    },
};

//
// actions
//
export const resetRequestVerifyEmailContext = createAction<void>(`${NAMESPACE}/reset`);
export const setEmailToRequestVerifyEmailContext = createAction<string>(`${NAMESPACE}/setEmail`);
export const setTypeToRequestVerifyEmailContext = createAction<TRequestVerifyEmailType>(`${NAMESPACE}/setType`);
export const setHasExpiredToRequestVerifyEmailContext = createAction<boolean>(`${NAMESPACE}/setHasExpired`);

//
// reducer
//
export const requestVerifyEmailPageReducer = createReducer(requestVerifyEmailPageInitialState, builder => {
    builder
        .addCase(resetRequestVerifyEmailContext, state => {
            state.requestVerifyEmail = {
                email: '',
                type: undefined,
                hasExpired: false,
            };
        })
        .addCase(setEmailToRequestVerifyEmailContext, (state, action: PayloadAction<string>) => {
            state.requestVerifyEmail.email = action.payload;
        })
        .addCase(setTypeToRequestVerifyEmailContext, (state, action: PayloadAction<TRequestVerifyEmailType>) => {
            state.requestVerifyEmail.type = action.payload;
        })
        .addCase(setHasExpiredToRequestVerifyEmailContext, (state, action: PayloadAction<boolean>) => {
            state.requestVerifyEmail.hasExpired = action.payload;
        });
});
