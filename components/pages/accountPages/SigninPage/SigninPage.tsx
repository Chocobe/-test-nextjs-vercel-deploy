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
import Link from 'next/link';
import {
    useRouter,
} from 'next/router';
import { 
    RoutePathFactory,
} from '@/router/RoutePathFactory';
// redux
import {
    useAppSelector,
    useAppDispatch,
} from '@/redux/hooks';
import { 
    actionRequested_Signin,
    actionReset_ConfirmSignup,
    actionRequested_ConfirmSignup,
    actionReset_ConfirmResetPassword,
} from '@/redux/slices/apiSlices/accountsApiSlice/accountsApiSlice';
import {
    useApiResponseHandler,
} from '@/redux/hooks';
// context
import { 
    AccountsLayoutContextState,
    AccountsLayoutContextDispatch,
} from '@/contexts/accountsLayoutContext/accountsLayoutContext';
import { 
    reset_SigninContext,
    setEmail_SigninContext,
    setPassword_SigninContext,
} from '@/contexts/accountsLayoutContext/reducers/signinContextReducer';
import { 
    setHasExpired_RequestVerifyEmailContext,
} from '@/contexts/accountsLayoutContext/reducers/requestVerifyEmailContextReducer';
// types
import { 
    accountPageFooterTypeMapper,
} from '../AccountPageFooter/accountPageFooterTypes';
import { 
    TConfirmSignupPayload,
} from '@/network/api/accountsApi/accountsApiTypes';
// styled-components
import styled from 'styled-components';
// ui components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import AccountPageFooter from '../AccountPageFooter/AccountPageFooter';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
import { 
    useLabelrSnackbar
} from '@/components/ui/LabelrSnackbar/hooks/useLabelrSnackbar';
// i18next
import {
    useTranslation,
} from 'react-i18next';
// localStorage
import { 
    setAuthTokensToLocalStorage,
} from '@/network/localStorageApi/localStorageApi';

const StyledSigninPageRoot = styled.div`
    //

    .signin-body {
        .inputWrapper{
            margin-top: 20px;
    
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .linkWrapper {
            margin: 18px 0;

            &-link {
                font-size: 12px;
                line-height: 18px;
                font-weight: 500;
            }
        }

        .questionMessage {
            margin: 8px 0;
            padding: 20px 0;
            width: 100%;

            display: flex;
            justify-content: center;
            align-items: center;
            gap: 4px;

            font-size: 12px;
            line-height: 18px;
            font-weight: 400;

            &-link {
                font-weight: 500;
            }
        }
    }
`;

function SigninPage() {
    //
    // context
    //
    const dispatchContext = useContext(AccountsLayoutContextDispatch);
    const state = useContext(AccountsLayoutContextState);

    const email = useMemo(() => {
        return state.signin.email;
    }, [state.signin.email]);

    const password = useMemo(() => {
        return state.signin.password;
    }, [state.signin.password]);

    //
    // state
    //
    const [validationState, setValidationState] = useState({
        isValidEmail: false,
        isValidPassword: false,
    });

    //
    // api state
    //
    const signinApiState = useAppSelector(({ accountsApi }) => accountsApi.signin);
    const confirmSignupApiState = useAppSelector(({ accountsApi }) => accountsApi.confirmSignup);

    //
    // hook
    //
    const dispatch = useAppDispatch();
    const router = useRouter();
    const i18next = useTranslation();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();

    //
    // cache
    //
    const routePathForFindPassword = useMemo(() => {
        return RoutePathFactory.accounts['/find-password']();
    }, []);

    const routePathForSignup = useMemo(() => {
        return RoutePathFactory.accounts['/signup']();
    }, []);

    const isValidInputValues = useMemo(() => {
        return Object
            .values(validationState)
            .every(isValid => isValid);
    }, [validationState]);

    const isDisableSigninButton = useMemo(() => {
        return !isValidInputValues ||
            signinApiState.isLoading ||
            confirmSignupApiState.isLoading;
    }, [isValidInputValues, signinApiState, confirmSignupApiState]);

    const confirmSignupPayload = useMemo<TConfirmSignupPayload | null>(() => {
        const email = router.query?.email as string;
        const code = router.query?.code as string;

        if (!email || !code) {
            return null;
        }

        return {
            email,
            code,
        };
    }, [router]);

    //
    // callback
    //
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setEmail_SigninContext(e.currentTarget.value));
    }, [dispatchContext]);

    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setPassword_SigninContext(e.currentTarget.value));
    }, [dispatchContext]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setValidationState(state => ({
            ...state,
            isValidEmail,
        }));
    }, []);

    const onIsValidPassword = useCallback((isValidPassword: boolean) => {
        setValidationState(state => ({
            ...state,
            isValidPassword,
        }));
    }, []);

    const onClickSignin = useCallback(() => {
        dispatch(actionRequested_Signin({
            email,
            password,
        }));
    }, [dispatch, email, password]);

    const onClickGoogleSignin = useCallback(() => {
        console.log('Google Social 로그인 버튼 클릭');
    }, []);

    const onClickAppleSignin = useCallback(() => {
        console.log('Apple Social 로그인 버튼 클릭');
    }, []);

    //
    // api handler
    //
    useApiResponseHandler({
        apiState: signinApiState,
        onSucceeded: {
            callback(data) {
                if (router.isReady) {
                    setAuthTokensToLocalStorage(data);
                    router.replace(RoutePathFactory.console['/']());
                }
            },
            deps: [router],
        },
        onFailed(error) {
            openLabelrSnackbar({
                type: 'danger',
                content: error.errorData?.detail,
            });
        },
    });

    useApiResponseHandler({
        apiState: confirmSignupApiState,
        onSucceeded() {
            openLabelrSnackbar({
                type: 'safe',
                content: i18next.t('/accounts/signin/SNACKBAR__CONFIRM_SIGNUP__MESSAGE'),
            });
        },
        onFailed: {
            callback(error) {
                if (router.isReady) {
                    openLabelrSnackbar({
                        type: 'danger',
                        content: error.errorData.detail,
                    });

                    dispatchContext(setHasExpired_RequestVerifyEmailContext(true));
                    router.replace(RoutePathFactory.accounts['/request-verify-email']());
                }
            },
            deps: [router],
        },
    });

    //
    // effect
    //
    useEffect(function requestConfirmSignup() {
        if (confirmSignupPayload) {
            dispatch(actionRequested_ConfirmSignup(confirmSignupPayload));
        }
    }, [confirmSignupPayload, dispatch]);

    useEffect(function resetState() {
        return () => {
            dispatchContext(reset_SigninContext());
            dispatch(actionReset_ConfirmSignup());
            dispatch(actionReset_ConfirmResetPassword());
        };
    }, [dispatchContext, dispatch]);

    return (
        <StyledSigninPageRoot>
            {/* Header */}
            <AccountPageHeader 
                message={i18next.t('/accounts/signin/HEADER__MESSAGE')}
                linkText={i18next.t('/accounts/signin/HEADER__LINK')}
                linkHref={routePathForSignup}>
                {i18next.t('/accounts/signin/HEADER__TITLE')}
            </AccountPageHeader>

            {/* Body */}
            <div className="signin-body">
                <div className="inputWrapper">
                    <LabelrInputEmail
                        // value={email}
                        value={state?.signin.email || ''}
                        onChange={onChangeEmail}
                        onIsValid={onIsValidEmail}
                        placeholder={i18next.t('/accounts/signin/BODY__INPUT_EMAIL__PLACEHOLDER')}
                        autofocus
                        fluid />

                    <LabelrInputPassword
                        // value={password}
                        value={state?.signin.password || ''}
                        onChange={onChangePassword}
                        onIsValid={onIsValidPassword}
                        placeholder={i18next.t('/accounts/signin/BODY__INPUT_PASSWORD__PLACEHOLDER')}
                        fluid />
                </div>

                <div className="linkWrapper">
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForFindPassword}>
                        <a className="linkWrapper-link">
                            {i18next.t('/accounts/signin/BODY__FORGOT_PASSWORD')}
                        </a>
                    </Link>
                </div>

                <LabelrButton
                    fluid
                    isDisabled={isDisableSigninButton}
                    onClick={onClickSignin} >
                    {i18next.t('/accounts/signin/BODY__SIGNIN_BUTTON')}
                </LabelrButton>

                <div className="questionMessage">
                    {i18next.t('/accounts/signin/BODY__SIGNUP_LEADING_MESSAGE')}
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForSignup}>
                        <a className="questionMessage-link">
                            {i18next.t('/accounts/signin/BODY__SIGNUP_BUTTON')}
                        </a>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <AccountPageFooter 
                type={accountPageFooterTypeMapper.SIGNIN}
                onClickGoogle={onClickGoogleSignin}
                onClickApple={onClickAppleSignin} />
        </StyledSigninPageRoot>
    );
}

export default SigninPage;