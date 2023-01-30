// rtk
import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
// type
import {
    TResetPasswordPageSliceState,
} from './resetPasswordPageSliceTypes';

const NAMESPACE = 'resetPasswordPageSlice';

const initialState: TResetPasswordPageSliceState = {
    password: '',
    passwordConfirm: '',
};

const resetPasswordPageSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        // reset
        resetResetPasswordPageSliceState(state: TResetPasswordPageSliceState) {
            state.password = '';
            state.passwordConfirm = '';
        },

        // mutators
        setPassword(state: TResetPasswordPageSliceState, action: PayloadAction<string>) {
            state.password = action.payload;
        },
        setPasswordConfirm(state: TResetPasswordPageSliceState, action: PayloadAction<string>) {
            state.passwordConfirm = action.payload;
        },
    },
});

export default resetPasswordPageSlice;
export const {
    resetResetPasswordPageSliceState,
    setPassword,
    setPasswordConfirm,
} = resetPasswordPageSlice.actions;
