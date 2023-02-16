import {
    TApiSliceSingleState,
} from '../apiSliceSingleStateType';
import {
    TSigninApiResponse,
    TSignupApiResponse,
    TResetPasswordApiResponse,
    TConfirmResetPasswordApiResponse,
} from '@/network/api/accountsApi/accountsApiTypes';

export type TAccountsApiSliceState = {
    signin: TApiSliceSingleState<TSigninApiResponse>;
    signup: TApiSliceSingleState<TSignupApiResponse>;
    resetPassword: TApiSliceSingleState<TResetPasswordApiResponse>;
    confirmResetPassword: TApiSliceSingleState<TConfirmResetPasswordApiResponse>;
};
