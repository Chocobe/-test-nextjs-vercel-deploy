// rtk
import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
// type
import {
    TResultVerifyEmailPageSliceState,
} from './resultVerifyEmailPageSliceTypes';

const NAMESPACE = 'resultVerifyEmailPageSlice';

const initialState: TResultVerifyEmailPageSliceState = {
    expirationTime: 5000,
    hasExpired: false,
    email: '',
};

const resultVerifyEmailPageSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        // reset
        resetResultVerifyEmailPageState(state: TResultVerifyEmailPageSliceState) {
            state.email = '';
        },

        // mutators
        setEmail(state: TResultVerifyEmailPageSliceState, action: PayloadAction<string>) {
            state.email = action.payload;
        },
        setHasExpired(state: TResultVerifyEmailPageSliceState, action: PayloadAction<boolean>) {
            state.hasExpired = action.payload;
        },
    },
});

export default resultVerifyEmailPageSlice;
export const {
    resetResultVerifyEmailPageState,
    setEmail,
    setHasExpired,
} = resultVerifyEmailPageSlice.actions;
