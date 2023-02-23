import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'requestVerifyEmailPage';

export type TRequestVerifyEmailPageState = {
    requestVerifyEmail: {
        email: string;
    };
};

//
// initialState
//
export const requestVerifyEmailPageInitialState: TRequestVerifyEmailPageState = {
    requestVerifyEmail: {
        email: '',
    },
};

//
// actions
//
export const setEmailToRequestVerifyEmailPage = createAction<string>(`${NAMESPACE}/setEmail`);
// FIXME: 지우기
export const setHasExpiredToResultVerifyEmailPage = createAction<boolean>(`${NAMESPACE}/sethasExpired`);

//
// reducer
//
export const requestVerifyEmailPageReducer = createReducer(requestVerifyEmailPageInitialState, builder => {
    builder
        .addCase(setEmailToRequestVerifyEmailPage, (state, action: PayloadAction<string>) => {
            state.requestVerifyEmail.email = action.payload;
        });
});
