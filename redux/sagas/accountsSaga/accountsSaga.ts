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
    actionRequested_Signin,
    actionSucceeded_Signin,
    actionFailed_Signin,

    actionRequested_Signup,
    actionSucceeded_Signup,
    actionFailed_Signup,

    actionRequested_ConfirmSignup,
    actionSucceeded_ConfirmSignup,
    actionFailed_ConfirmSignup,

    actionRequested_ResetPassword,
    actionFailed_ResetPassword,
    actionSucceeded_ResetPassword,

    actionFailed_ConfirmResetPassword,
    actionSucceeded_ConfirmResetPassword,
    actionRequested_ConfirmResetPassword,
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

        yield put(actionSucceeded_Signin(data));
    } catch(error: any) {
        yield put(actionFailed_Signin(error));
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

        yield put(actionSucceeded_Signup(data));
    } catch(error: any) {
        yield put(actionFailed_Signup(error));
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

        yield put(actionSucceeded_ConfirmSignup(data));
    } catch(error) {
        yield put(actionFailed_ConfirmSignup(error));
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

        yield put(actionSucceeded_ResetPassword(data));
    } catch(error) {
        yield put(actionFailed_ResetPassword(error));
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

        yield put(actionSucceeded_ConfirmResetPassword(data));
    } catch(error) {
        yield put(actionFailed_ConfirmResetPassword(error));
    }
}

function* accountsSaga() {
    yield takeLatest(actionRequested_Signin, signinSaga);
    yield takeLatest(actionRequested_Signup, signupSaga);
    yield takeLatest(actionRequested_ConfirmSignup, confirmSignupSaga);
    yield takeLatest(actionRequested_ResetPassword, resetPasswordSaga);
    yield takeLatest(actionRequested_ConfirmResetPassword, confirmResetPasswordSaga);
}

export default accountsSaga;
