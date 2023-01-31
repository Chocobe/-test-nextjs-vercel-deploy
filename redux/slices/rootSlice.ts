// redux
import { combineReducers } from '@reduxjs/toolkit';
// mockSlices
import mockUsersSlice from './mockUsersSlice/mockUsersSlice';
// accountSlices
import {
    signinPageSlice,
    signupPageSlice,
    findPasswordPageSlice,
    resetPasswordPageSlice,
} from './pageSlices';

const rootReducer = combineReducers({
    mockUsers: mockUsersSlice.reducer,

    // api reducers

    /** page reducers */
    // accountPages reducers
    signinPage: signinPageSlice.reducer,
    signupPage: signupPageSlice.reducer,
    findPasswordPage: findPasswordPageSlice.reducer,
    resetPasswordPage: resetPasswordPageSlice.reducer,
});

export default rootReducer;
