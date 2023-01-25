// redux
import { combineReducers } from '@reduxjs/toolkit';
// mockSlices
import mockUsersSlice from './mockUsersSlice/mockUsersSlice';
// authSlices
import {
    signinPageSlice,
} from './pageSlices';

const rootReducer = combineReducers({
    mockUsers: mockUsersSlice.reducer,
    // api reducers

    // page reducers
    signinPage: signinPageSlice.reducer,

    // ui reducers
});

export default rootReducer;