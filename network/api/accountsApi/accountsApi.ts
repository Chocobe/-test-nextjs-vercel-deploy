import {
    TSigninApiPayload,
    TSigninApiResponse,
    TSignupApiPayload,
    TSignupApiResponse,
    TResetPasswordApiPayload,
    TResetPasswordApiResponse,
    TConfirmResetPasswordApiPayload,
    TConfirmResetPasswordApiResponse,
} from './accountsApiTypes';
import RestClient from '@/network/RestClient';
import accountsApiUrlFactory from './accountsApiUrlFactory';

const accountsApi = {
    signin(payload: TSigninApiPayload) {
        return RestClient.post<TSigninApiResponse>(
            accountsApiUrlFactory.signinUrl(),
            payload
        );
    },

    signup(payload: TSignupApiPayload) {
        return RestClient.post<TSignupApiResponse>(
            accountsApiUrlFactory.signupUrl(),
            payload
        );
    },

    resetPassword(payload: TResetPasswordApiPayload) {
        return RestClient.post<TResetPasswordApiResponse>(
            accountsApiUrlFactory.resetPasswordUrl(),
            payload
        );
    },

    confirmResetPassword(payload: TConfirmResetPasswordApiPayload) {
        return RestClient.post<TConfirmResetPasswordApiResponse>(
            accountsApiUrlFactory.confirmResetPasswordUrl(),
            payload
        );
    },
};

export default accountsApi;
