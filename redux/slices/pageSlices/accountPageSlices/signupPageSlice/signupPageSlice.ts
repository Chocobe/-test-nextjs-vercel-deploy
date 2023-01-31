// rtk
import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
// types
import {
    TSignupPageSliceState,
} from './signupPageSliceTypes';

const NAMESPACE = 'signupPage';

const initialState: TSignupPageSliceState = {
    email: '',
    password: '',
    passwordConfirm: '',
};

const signupPageSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        // reset
        resetSignupPageState(state: TSignupPageSliceState) {
            state.email = '';
            state.password = '';
            state.passwordConfirm = '';
        },

        // mutators
        setEmail(state: TSignupPageSliceState, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state: TSignupPageSliceState, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setPasswordConfirm(state: TSignupPageSliceState, action: PayloadAction<string>) {
            state.passwordConfirm = action.payload;
        },
    },
});

export default signupPageSlice;
export const {
    resetSignupPageState,
    setEmail,
    setPassword,
    setPasswordConfirm,
} = signupPageSlice.actions;
