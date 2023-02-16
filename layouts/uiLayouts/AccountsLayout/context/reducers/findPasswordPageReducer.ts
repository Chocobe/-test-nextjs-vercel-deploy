import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'findPasswordPage';

export type TFindPasswordPageState = {
    findPassword: {
        email: string;
    };
};

export const findPasswordPageInitialState: TFindPasswordPageState = {
    findPassword: {
        email: '',
    },
};

export const setEmailToFindPasswordPage = createAction<string>(`${NAMESPACE}/setEmail`);

export const findPasswordPageReducer = createReducer(findPasswordPageInitialState, builder => {
    builder
        .addCase(setEmailToFindPasswordPage, (state, action: PayloadAction<string>) => {
            state.findPassword.email = action.payload;
        });
});
