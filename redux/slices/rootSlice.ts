// redux
import { combineReducers } from '@reduxjs/toolkit';
// apiSlices
import {
    accountsApiSlice,
} from './apiSlices';

const rootReducer = combineReducers({
    /** api reducers */
    accountsApi: accountsApiSlice.reducer,
});

export default rootReducer;
