// rtk
import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
// types
import {
    TSigninPageSliceState,
} from './signinPageSliceTypes';

const NAMESPACE = 'signinPage';

const initialState: TSigninPageSliceState = {
    email: '',
    password: '',
};

const signinPageSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        // reset
        resetSigninState(state: TSigninPageSliceState) {
            state.email = '';
            state.password = '';
        },

        // mutators
        setEmail(state: TSigninPageSliceState, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setPassword(state: TSigninPageSliceState, action: PayloadAction<string>) {
            state.password = action.payload;
        },
    },
});

export default signinPageSlice;
export const {
    resetSigninState,
    setEmail,
    setPassword,
} = signinPageSlice.actions;
