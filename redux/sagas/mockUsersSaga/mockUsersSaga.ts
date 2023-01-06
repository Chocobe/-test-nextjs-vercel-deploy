import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
import { PayloadAction } from '@reduxjs/toolkit';
import {
    retrieveMockUsersRequested,
    retrieveMockUsersSucceed,
    retrieveMockUsersFailed,
} from '@/redux/slices/mockUsersSlice/mockUsersSlice';
import {
    RetrieveMockUsersApiPayload, 
} from '@/network/api/mockUsersApi/mockUsersApiTypes';

import apiManager from '@/network/apiManager';
import { RetrieveMockUsersSagaType } from './mockUsersSagaTypes';

function* retrieveMockUsers(
    action: PayloadAction<RetrieveMockUsersApiPayload>
): RetrieveMockUsersSagaType {
    try {
        const { id } = action.payload;
        const response = yield call(
            apiManager.mockUsersApi.retrieveMockUsers,
            id
        );
        const data = response.data;

        yield put(retrieveMockUsersSucceed(data));
    } catch (error) {
        yield put(retrieveMockUsersFailed(error));
    }
}

function* mockUsersSaga() {
    yield takeLatest(retrieveMockUsersRequested, retrieveMockUsers);
}

export default mockUsersSaga;