import {
    createAction,
    createReducer,
    PayloadAction,
} from '@reduxjs/toolkit';

const NAMESPACE = 'signupPage';

export type TSignupPageState = {
    signup: {
        email: string;
        password: string;
        passwordConfirm: string;
    };
};

//
// initialState
//
export const initialState_SignupContext: TSignupPageState = {
    signup: {
        email: '',
        password: '',
        passwordConfirm: '',
    },
};

//
// actions
//
export const reset_SignupContext = createAction(`${NAMESPACE}/reset`);
export const setEmail_SignupContext = createAction<string>(`${NAMESPACE}/setEmail`);
export const setPassword_SignupContext = createAction<string>(`${NAMESPACE}/setPassword`);
export const setPasswordConfirm_SignupContext = createAction<string>(`${NAMESPACE}/setConfirmPassword`);

//
// reducer
//
export const reducer_SignupContext = createReducer(initialState_SignupContext, builder => {
    builder
        .addCase(reset_SignupContext, (state, _action: PayloadAction<void>) => {
            state.signup = {
                email: '',
                password: '',
                passwordConfirm: '',
            };
        })
        .addCase(setEmail_SignupContext, (state, action: PayloadAction<string>) => {
            state.signup.email = action.payload;
        })
        .addCase(setPassword_SignupContext, (state, action: PayloadAction<string>) => {
            state.signup.password = action.payload;
        })
        .addCase(setPasswordConfirm_SignupContext, (state, action: PayloadAction<string>) => {
            state.signup.passwordConfirm = action.payload;
        });
});
