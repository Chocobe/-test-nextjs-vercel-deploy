// saga
import {
    call,
    put,
    takeLatest,
} from 'redux-saga/effects';
// redux
import { 
    PayloadAction,
} from '@reduxjs/toolkit';
import { 
    actionSigninRequested,
    actionSigninSucceeded,
    actionSigninFailed,
} from '@/redux/slices/apiSlices/accountsApiSlice/accountApiSlice';
// type
import { 
    TSigninApiPayload, 
    TSigninApiResponse,
} from '@/network/api/accountsApi/accountsApiTypes';
import {
    TSagaGenerator,
} from '../sagaGeneratorType';

import ApiManager from '@/network/ApiManager';

function* signinSaga(
    action: PayloadAction<TSigninApiPayload>
): TSagaGenerator<TSigninApiResponse> {
    try {
        const response = yield call(
            ApiManager.accountsApi.signin,
            action.payload
        );

        const data = response?.data;

        yield put(actionSigninSucceeded(data));
    } catch(error: any) {
        yield put(actionSigninFailed(error));
    }
}

function* accountsSaga() {
    yield takeLatest(actionSigninRequested, signinSaga);
}

export default accountsSaga;
