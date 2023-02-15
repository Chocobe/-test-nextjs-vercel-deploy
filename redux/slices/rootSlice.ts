// redux
import { combineReducers } from '@reduxjs/toolkit';
// mockSlices
import mockUsersSlice from './mockUsersSlice/mockUsersSlice';
// apiSlices
import {
    accountsApiSlice,
} from './apiSlices';

const rootReducer = combineReducers({
    mockUsers: mockUsersSlice.reducer,

    /** api reducers */
    accountsApi: accountsApiSlice.reducer,
});

export default rootReducer;
