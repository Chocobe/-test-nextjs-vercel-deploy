// rtk
import {
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
// types
import {
    TFindPasswordSliceState,
} from './findPasswordPageSliceTypes';

const NAMESPACE = 'findPasswordSlice';

const initialState: TFindPasswordSliceState = {
    email: '',
};

const findPasswordSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        // reset
        resetFindPasswordState(state: TFindPasswordSliceState) {
            state.email = '';
        },

        // mutators
        setEmail(state: TFindPasswordSliceState, action: PayloadAction<string>) {
            state.email = action.payload;
        },
    },
});

export default findPasswordSlice;
export const {
    resetFindPasswordState,
    setEmail,
} = findPasswordSlice.actions;
