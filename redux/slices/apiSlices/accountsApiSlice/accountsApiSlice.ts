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

    TConfirmSignupPayload,
    TConfirmSignupResponse,

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
    confirmSignup: {
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
        actionSigninReset(state) {
            state.signin = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionSigninRequested(
            state, 
            _action: PayloadAction<TSigninApiPayload>
        ) {
            state.signin = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSigninSucceeded(
            state,
            action: PayloadAction<TSigninApiResponse>
        ) {
            state.signin = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionSigninFailed(
            state,
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
        actionSignupReset(state) {
            state.signup = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionSignupRequested(
            state,
            _action: PayloadAction<TSignupApiPayload>
        ) {
            state.signup = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSignupSucceeded(
            state,
            action: PayloadAction<TSignupApiResponse>
        ) {
            state.signup = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionSignupFailed(
            state,
            action: PayloadAction<any>
        ) {
            state.signup = {
                isLoading: false,
                data: null,
                error: action.payload,
            };
        },

        //
        // confirmSignup
        //
        actionConfirmSignupReset(state) {
            state.confirmSignup = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionConfirmSignupRequested(
            state,
            _action: PayloadAction<TConfirmSignupPayload>
        ) {
            state.confirmSignup = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionConfirmSignupSucceeded(
            state,
            action: PayloadAction<TConfirmSignupResponse>
        ) {
            state.confirmSignup = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionConfirmSignupFailed(
            state,
            action: PayloadAction<any>
        ) {
            state.confirmSignup = {
                isLoading: false,
                data: null,
                error: action.payload,
            };
        },

        //
        // resetPassword
        //
        actionResetPasswordReset(state) {
            state.resetPassword = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionResetPasswordRequested(
            state,
            _action: PayloadAction<TResetPasswordApiPayload>
        ) {
            state.resetPassword = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionResetPasswordSucceeded(
            state,
            action: PayloadAction<TResetPasswordApiResponse>
        ) {
            state.resetPassword = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionResetPasswordFailed(
            state,
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
        actionConfirmResetPasswordReset(state) {
            state.confirmResetPassword = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionConfirmResetPasswordRequested(
            state,
            _actions: PayloadAction<TConfirmResetPasswordApiPayload>
        ) {
            state.confirmResetPassword = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionConfirmResetPasswordSucceeded(
            state,
            action: PayloadAction<TConfirmResetPasswordApiResponse>
        ) {
            state.confirmResetPassword = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionConfirmResetPasswordFailed(
            state,
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

    actionConfirmSignupReset,
    actionConfirmSignupRequested,
    actionConfirmSignupSucceeded,
    actionConfirmSignupFailed,

    actionResetPasswordReset,
    actionResetPasswordRequested,
    actionResetPasswordSucceeded,
    actionResetPasswordFailed,

    actionConfirmResetPasswordReset,
    actionConfirmResetPasswordRequested,
    actionConfirmResetPasswordSucceeded,
    actionConfirmResetPasswordFailed,
} = accountsApiSlice.actions;
