// react
import {
    useState,
    useMemo,
    useCallback,
    useContext,
    useEffect,
    ChangeEvent,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import { 
    RoutePathFactory
} from '@/router/RoutePathFactory';
// redux
import {
    useAppSelector,
    useAppDispatch,
} from '@/redux/hooks';
import { 
    actionRequested_ConfirmResetPassword, 
    actionReset_ConfirmResetPassword,
} from '@/redux/slices/apiSlices/accountsApiSlice/accountsApiSlice';
import {
    useApiResponseHandler,
} from '@/redux/hooks';
// context
import {
    AccountsLayoutContextDispatch,
    AccountsLayoutContextState,
} from '@/contexts/accountsLayoutContext/accountsLayoutContext';
import {
    resetResetPasswordContext,
    setPasswordToResetPasswordContext,
    setPasswordConfirmToResetPasswordContext,
} from '@/contexts/accountsLayoutContext/reducers/resetPasswordPageReducer';
import { 
    setHasExpiredToRequestVerifyEmailContext, 
} from '@/contexts/accountsLayoutContext/reducers/requestVerifyEmailPageReducer';
// styled-components
import styled from 'styled-components';
// UI components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
import LabelrInputConfirm from '@/components/ui/LabelrInputConfirm/LabelrInputConfirm';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
import {
    useLabelrSnackbar,
} from '@/components/ui/LabelrSnackbar/hooks/useLabelrSnackbar';
// i18n
import {
    useTranslation,
} from 'react-i18next';
// type
import { 
    TRequestVerifyEmailType
} from '../RequestVerifyEmailPage/requestVerifyEmailPageTypes';

const StyledResetPasswordPageRoot = styled.div`
    //

    .message {
        margin-top: 12px;

        color: ${({ theme }) => theme.colors.gs[700]};
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
        white-space: pre-line;
    }

    .formWrapper {
        margin-top: 20px;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

function ResetPasswordPage() {
    //
    // context
    //
    const dispatchContext = useContext(AccountsLayoutContextDispatch)!;
    const state = useContext(AccountsLayoutContextState)!;

    const password = useMemo(() => {
        return state.resetPassword.password;
    }, [state.resetPassword.password]);

    const passwordConfirm = useMemo(() => {
        return state.resetPassword.passwordConfirm;
    }, [state.resetPassword.passwordConfirm]);

    //
    // api state
    //
    const confirmResetPasswordApiState = useAppSelector(({ accountsApi }) => {
        return accountsApi.confirmResetPassword;
    });

    //
    // state
    //
    const [validationState, setValidationState] = useState({
        isValidPassword: false,
        isValidPasswordConfirm: false,
    });

    //
    // hook
    //
    const dispatch = useAppDispatch();
    const i18next = useTranslation();
    const router = useRouter();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();

    //
    // cache
    //
    const isValidInputValues = useMemo(() => {
        return Object
            .values(validationState)
            .every(isValid => isValid);
    }, [validationState]);

    const email = useMemo(() => {
        return router.query.email as string;
    }, [router]);

    const code = useMemo(() => {
        return router.query.code as TRequestVerifyEmailType;
    }, [router]);

    //
    // callback
    //
    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setPasswordToResetPasswordContext(e.currentTarget.value));
    }, [dispatchContext]);

    const onChangePasswordConfirm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setPasswordConfirmToResetPasswordContext(e.currentTarget.value));
    }, [dispatchContext]);

    const onIsValidPassword = useCallback((isValidPassword: boolean) => {
        setValidationState(state => ({
            ...state,
            isValidPassword,
        }));
    }, []);

    const onIsValidPasswordConfirm = useCallback((isValidPasswordConfirm: boolean) => {
        setValidationState(state => ({
            ...state,
            isValidPasswordConfirm,
        }));
    }, []);

    const onClickSubmit = useCallback(() => {
        dispatch(actionRequested_ConfirmResetPassword({
            code,
            email,
            password,
            password2: passwordConfirm,
        }));
    }, [
        code, email, password, 
        passwordConfirm, dispatch,
    ]);

    //
    // api handler
    //
    useApiResponseHandler({
        apiState: confirmResetPasswordApiState,
        onSucceeded: {
            callback() {
                if (router.isReady) {
                    openLabelrSnackbar({
                        type: 'safe',
                        content: i18next.t('/accounts/reset-password/SNACKBAR__CONFIRM_RESET_PASSWORD__MESSAGE'),
                    });

                    router.replace(RoutePathFactory.accounts['/signin']());
                }
            },
            deps: [router],
        },
        onFailed: {
            callback(error) {
                openLabelrSnackbar({
                    type: 'danger',
                    content: error.errorData.detail,
                });

                dispatchContext(setHasExpiredToRequestVerifyEmailContext(true));
                router.replace(RoutePathFactory.accounts['/request-verify-email']());
            },
            deps: [router],
        },
    });

    //
    // effect
    //
    useEffect(function resetSlices() {
        return () => {
            dispatch(actionReset_ConfirmResetPassword());
            dispatchContext(resetResetPasswordContext());
        };
    }, [dispatch, dispatchContext]);

    return (
        <StyledResetPasswordPageRoot>
            <AccountPageHeader
                linkText={i18next.t('/accounts/reset-password/HEADER__LINK')}
                linkHref={RoutePathFactory.accounts['/signin']()}>
                {i18next.t('/accounts/reset-password/HEADER__TITLE')}
            </AccountPageHeader>

            <div className="message">
                {i18next.t('/accounts/reset-password/BODY__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputPassword
                    value={password}
                    onChange={onChangePassword}
                    onIsValid={onIsValidPassword}
                    placeholder={i18next.t('/accounts/reset-password/BODY__INPUT_EMAIL__PLACEHOLDER')}
                    autofocus
                    fluid />

                <LabelrInputConfirm
                    value={passwordConfirm}
                    targetValue={password}
                    onChange={onChangePasswordConfirm}
                    onIsValid={onIsValidPasswordConfirm}
                    invalidMessage={i18next.t('/accounts/reset-password/BODY__INPUT_CONFIRM__INVALID_MESSAGE')}
                    placeholder={i18next.t('/accounts/reset-password/BODY__INPUT_CONFIRM__PLACEHOLDER')}
                    isEnableMasking
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidInputValues}
                    fluid>
                    {i18next.t('/accounts/reset-password/BODY__SUBMIT_BUTTON')}
                </LabelrButton>
            </div>
        </StyledResetPasswordPageRoot>
    );
}

export default ResetPasswordPage;
