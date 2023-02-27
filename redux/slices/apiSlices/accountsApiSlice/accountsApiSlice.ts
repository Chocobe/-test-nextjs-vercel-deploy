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
        actionReset_Signin(state) {
            state.signin = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionRequested_Signin(
            state, 
            _action: PayloadAction<TSigninApiPayload>
        ) {
            state.signin = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSucceeded_Signin(
            state,
            action: PayloadAction<TSigninApiResponse>
        ) {
            state.signin = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionFailed_Signin(
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
        actionReset_Signup(state) {
            state.signup = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionRequested_Signup(
            state,
            _action: PayloadAction<TSignupApiPayload>
        ) {
            state.signup = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSucceeded_Signup(
            state,
            action: PayloadAction<TSignupApiResponse>
        ) {
            state.signup = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionFailed_Signup(
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
        actionReset_ConfirmSignup(state) {
            state.confirmSignup = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionRequested_ConfirmSignup(
            state,
            _action: PayloadAction<TConfirmSignupPayload>
        ) {
            state.confirmSignup = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSucceeded_ConfirmSignup(
            state,
            action: PayloadAction<TConfirmSignupResponse>
        ) {
            state.confirmSignup = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionFailed_ConfirmSignup(
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
        actionReset_ResetPassword(state) {
            state.resetPassword = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionRequested_ResetPassword(
            state,
            _action: PayloadAction<TResetPasswordApiPayload>
        ) {
            state.resetPassword = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSucceeded_ResetPassword(
            state,
            action: PayloadAction<TResetPasswordApiResponse>
        ) {
            state.resetPassword = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionFailed_ResetPassword(
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
        actionReset_ConfirmResetPassword(state) {
            state.confirmResetPassword = {
                isLoading: false,
                data: undefined,
                error: undefined,
            };
        },
        actionRequested_ConfirmResetPassword(
            state,
            _actions: PayloadAction<TConfirmResetPasswordApiPayload>
        ) {
            state.confirmResetPassword = {
                isLoading: true,
                data: null,
                error: null,
            };
        },
        actionSucceeded_ConfirmResetPassword(
            state,
            action: PayloadAction<TConfirmResetPasswordApiResponse>
        ) {
            state.confirmResetPassword = {
                isLoading: false,
                data: action.payload,
                error: null,
            };
        },
        actionFailed_ConfirmResetPassword(
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
    actionReset_Signin,
    actionRequested_Signin,
    actionSucceeded_Signin,
    actionFailed_Signin,

    actionReset_Signup,
    actionRequested_Signup,
    actionSucceeded_Signup,
    actionFailed_Signup,

    actionReset_ConfirmSignup,
    actionRequested_ConfirmSignup,
    actionSucceeded_ConfirmSignup,
    actionFailed_ConfirmSignup,

    actionReset_ResetPassword,
    actionRequested_ResetPassword,
    actionSucceeded_ResetPassword,
    actionFailed_ResetPassword,

    actionReset_ConfirmResetPassword,
    actionRequested_ConfirmResetPassword,
    actionSucceeded_ConfirmResetPassword,
    actionFailed_ConfirmResetPassword,
} = accountsApiSlice.actions;
