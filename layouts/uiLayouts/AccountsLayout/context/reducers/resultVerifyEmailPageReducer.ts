import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'resultVerifyEmailPage';

export type TResultVerifyEmailPageState = {
    resultVerifyEmail: {
        email: string;
        expirationTime: number;
        hasExpired: boolean;
    };
};

export const resultVerifyEmailPageInitialState: TResultVerifyEmailPageState = {
    resultVerifyEmail: {
        email: '',
        expirationTime: 5000,
        hasExpired: false,
    },
};

export const setEmailToResultVerifyEmailPage = createAction<string>(`${NAMESPACE}/setEmail`);
export const setHasExpiredToResultVerifyEmailPage = createAction<boolean>(`${NAMESPACE}/sethasExpired`);

export const resultVerifyEmailPageReducer = createReducer(resultVerifyEmailPageInitialState, builder => {
    builder
        .addCase(setEmailToResultVerifyEmailPage, (state, action: PayloadAction<string>) => {
            state.resultVerifyEmail.email = action.payload;
        })
        .addCase(setHasExpiredToResultVerifyEmailPage, (state, action: PayloadAction<boolean>) => {
            state.resultVerifyEmail.hasExpired = action.payload;
        });
});
