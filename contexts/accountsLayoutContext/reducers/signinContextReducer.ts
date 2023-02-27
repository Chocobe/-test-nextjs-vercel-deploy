import {
    createAction, 
    createReducer, 
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'signinPage';

export type TSigninPageState = {
    signin: {
        email: string;
        password: string;
    };
};

//
// initialState
//
export const initialState_SigninContext: TSigninPageState = {
    signin: {
        email: '',
        password: '',
    },
};

//
// action
//
export const reset_SigninContext = createAction(`${NAMESPACE}/reset`);
export const setEmail_SigninContext = createAction<string>(`${NAMESPACE}/setEmail`);
export const setPassword_SigninContext = createAction<string>(`${NAMESPACE}/setPassword`);

//
// reducer
//
export const reducer_SigninContext = createReducer(initialState_SigninContext, builder => {
    builder
        .addCase(reset_SigninContext, state => {
            state.signin = {
                email: '',
                password: '',
            };
        })
        .addCase(setEmail_SigninContext, (state, action: PayloadAction<string>) => {
            state.signin.email = action.payload;
        })
        .addCase(setPassword_SigninContext, (state, action: PayloadAction<string>) => {
            state.signin.password = action.payload;
        });
});
