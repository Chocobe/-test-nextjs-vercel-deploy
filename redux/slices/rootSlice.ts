// redux
import { combineReducers } from '@reduxjs/toolkit';
// mockSlices
import mockUsersSlice from './mockUsersSlice/mockUsersSlice';

const rootReducer = combineReducers({
    mockUsers: mockUsersSlice.reducer,
    // api reducers
    // page reducers
    // ui reducers
});

export default rootReducer;