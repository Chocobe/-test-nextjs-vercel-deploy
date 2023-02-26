import {
    TApiSliceSingleState,
} from '../apiSliceSingleStateType';
import {
    TSigninApiResponse,
    TSignupApiResponse,
    TConfirmSignupResponse,
    TResetPasswordApiResponse,
    TConfirmResetPasswordApiResponse,
} from '@/network/api/accountsApi/accountsApiTypes';

export type TAccountsApiSliceState = {
    signin: TApiSliceSingleState<TSigninApiResponse>;
    signup: TApiSliceSingleState<TSignupApiResponse>;
    confirmSignup: TApiSliceSingleState<TConfirmSignupResponse>;
    resetPassword: TApiSliceSingleState<TResetPasswordApiResponse>;
    confirmResetPassword: TApiSliceSingleState<TConfirmResetPasswordApiResponse>;
};
