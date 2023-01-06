import { combineReducers } from '@reduxjs/toolkit';
import mockUsersSlice from './mockUsersSlice/mockUsersSlice';

const rootReducer = combineReducers({
    mockUsers: mockUsersSlice.reducer,
});

export default rootReducer;