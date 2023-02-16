// rtk
import {
    createSlice, 
    PayloadAction,
} from '@reduxjs/toolkit';
// type
import {
    TAccountsApiSliceState
} from './accountsApiSliceTypes';
import { 
    TSigninApiPayload, 
    TSigninApiResponse,
    TSignupApiPayload,
    TSignupApiResponse,
    TResetPasswordApiPayload,
    TResetPasswordApiResponse,
    TConfirmResetPasswordApiPayload,
    TConfirmResetPasswordApiResponse,
} from '@/network/api/accountsApi/accountsApiTypes';

const NAMESPACE = 'accountsApi';

const initialState: TAccountsApiSliceState = {
    signin: {
        isLoading: false,
        data: undefined,
        error: undefined,
    },
    signup: {
        isLoading: false,
        data: undefined,
        error: undefined,
    },
    resetPassword: {
        isLoading: false,
        data: undefined,
        error: undefined,
    },
    confirmResetPassword: {
        isLoading: false,
        data: undefined,
        error: undefined,
    },
};

const accountsApiSlice = createSlice({
    name: NAMESPACE,
    initialState,
    reducers: {
        // 
        // signin
        //
        actionSigninReset(state: TAccountsApiSliceState) {
            state.signin = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionSigninRequested(
            state: TAccountsApiSliceState, 
            _action: PayloadAction<TSigninApiPayload>
        ) {
            state.signin = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSigninSucceeded(
            state: TAccountsApiSliceState,
            action: PayloadAction<TSigninApiResponse>
        ) {
            state.signin = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionSigninFailed(
            state: TAccountsApiSliceState,
            action: PayloadAction<any>
        ) {
            state.signin = {
                isLoading: false,
                data: null,
                error: action.payload,
            };
        },

        // 
        // signup
        // 
        actionSignupReset(state: TAccountsApiSliceState) {
            state.signup = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionSignupRequested(
            state: TAccountsApiSliceState,
            _action: PayloadAction<TSignupApiPayload>
        ) {
            state.signup = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSignupSucceeded(
            state: TAccountsApiSliceState,
            action: PayloadAction<TSignupApiResponse>
        ) {
            state.signup = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionSignupFailed(
            state: TAccountsApiSliceState,
            action: PayloadAction<any>
        ) {
            state.signup = {
                isLoading: false,
                data: null,
                error: action.payload,
            };
        },

        //
        // resetPassword
        //
        actionResetPasswordReset(state: TAccountsApiSliceState) {
            state.resetPassword = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionResetPasswordRequested(
            state: TAccountsApiSliceState,
            _action: PayloadAction<TResetPasswordApiPayload>
        ) {
            state.resetPassword = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionResetPasswordSucceeded(
            state: TAccountsApiSliceState,
            action: PayloadAction<TResetPasswordApiResponse>
        ) {
            state.resetPassword = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionResetPasswordFailed(
            state: TAccountsApiSliceState,
            action: PayloadAction<any>
        ) {
            state.resetPassword = {
                isLoading: false,
                data: null,
                error: action.payload,
            };
        },

        //
        // confirmResetPassword
        //
        actionConfirmResetPasswordReset(state: TAccountsApiSliceState) {
            state.confirmResetPassword = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionConfirmResetPasswordRequested(
            state: TAccountsApiSliceState,
            _actions: PayloadAction<TConfirmResetPasswordApiPayload>
        ) {
            state.confirmResetPassword = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionConfirmResetPasswordSucceeded(
            state: TAccountsApiSliceState,
            action: PayloadAction<TConfirmResetPasswordApiResponse>
        ) {
            state.confirmResetPassword = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionConfirmResetPasswordFailed(
            state: TAccountsApiSliceState,
            action: PayloadAction<any>
        ) {
            state.confirmResetPassword = {
                isLoading: false,
                data: null,
                error: action.payload,
            };
        },
    },
});

export default accountsApiSlice;
export const {
    actionSigninReset,
    actionSigninRequested,
    actionSigninSucceeded,
    actionSigninFailed,

    actionSignupReset,
    actionSignupRequested,
    actionSignupSucceeded,
    actionSignupFailed,

    actionResetPasswordReset,
    actionResetPasswordRequested,
    actionResetPasswordSucceeded,
    actionResetPasswordFailed,

    actionConfirmResetPasswordReset,
    actionConfirmResetPasswordRequested,
    actionConfirmResetPasswordSucceeded,
    actionConfirmResetPasswordFailed,
} = accountsApiSlice.actions;
