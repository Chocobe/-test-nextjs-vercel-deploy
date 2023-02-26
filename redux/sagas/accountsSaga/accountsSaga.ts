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

    actionSignupRequested,
    actionSignupSucceeded,
    actionSignupFailed,

    actionConfirmSignupRequested,
    actionConfirmSignupSucceeded,
    actionConfirmSignupFailed,

    actionResetPasswordRequested,
    actionResetPasswordFailed,
    actionResetPasswordSucceeded,

    actionConfirmResetPasswordFailed,
    actionConfirmResetPasswordSucceeded,
    actionConfirmResetPasswordRequested,
} from '@/redux/slices/apiSlices/accountsApiSlice/accountsApiSlice';
// type
import { 
    TSigninApiPayload, 
    TSigninApiResponse,
    
    TSignupApiPayload,
    TSignupApiResponse,

    TResetPasswordApiPayload,
    TResetPasswordApiResponse,
    TConfirmResetPasswordApiPayload,
    TConfirmResetPasswordApiResponse,
    TConfirmSignupPayload,
    TConfirmSignupResponse,
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

function* signupSaga(
    action: PayloadAction<TSignupApiPayload>
): TSagaGenerator<TSignupApiResponse> {
    try {
        const response = yield call(
            ApiManager.accountsApi.signup,
            action.payload
        );

        const data = response?.data;

        yield put(actionSignupSucceeded(data));
    } catch(error: any) {
        yield put(actionSignupFailed(error));
    }
}

function* confirmSignupSaga(
    action: PayloadAction<TConfirmSignupPayload>
): TSagaGenerator<TConfirmSignupResponse> {
    try {
        const response = yield call(
            ApiManager.accountsApi.confirmSignup,
            action.payload
        );

        const data = response?.data;

        yield put(actionConfirmSignupSucceeded(data));
    } catch(error) {
        yield put(actionConfirmSignupFailed(error));
    }
}

function* resetPasswordSaga(
    action: PayloadAction<TResetPasswordApiPayload>
): TSagaGenerator<TResetPasswordApiResponse> {
    try {
        const response = yield call(
            ApiManager.accountsApi.resetPassword,
            action.payload
        );

        const data = response?.data;

        yield put(actionResetPasswordSucceeded(data));
    } catch(error) {
        yield put(actionResetPasswordFailed(error));
    }
}

function* confirmResetPasswordSaga(
    action: PayloadAction<TConfirmResetPasswordApiPayload>
): TSagaGenerator<TConfirmResetPasswordApiResponse> {
    try {
        const response = yield call(
            ApiManager.accountsApi.confirmResetPassword,
            action.payload
        );

        const data = response?.data;

        yield put(actionConfirmResetPasswordSucceeded(data));
    } catch(error) {
        yield put(actionConfirmResetPasswordFailed(error));
    }
}

function* accountsSaga() {
    yield takeLatest(actionSigninRequested, signinSaga);
    yield takeLatest(actionSignupRequested, signupSaga);
    yield takeLatest(actionConfirmSignupRequested, confirmSignupSaga);
    yield takeLatest(actionResetPasswordRequested, resetPasswordSaga);
    yield takeLatest(actionConfirmResetPasswordRequested, confirmResetPasswordSaga);
}

export default accountsSaga;
