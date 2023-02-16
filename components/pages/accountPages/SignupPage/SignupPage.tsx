// react
import {
    useState,
    useMemo,
    useCallback,
    useContext,
    ChangeEvent,
} from 'react';
// nextjs
import Link from 'next/link';
import {
    useRouter,
} from 'next/router';
// redux
import {
    AccountsLayoutContextState,
    AccountsLayoutContextDispatch,
} from '@/layouts/uiLayouts/AccountsLayout/context/accountsLayoutContext';
import { 
    setEmailToSignupPage,
    setPasswordToSignupPage,
    setPasswordConfirmToSignupPage,
} from '@/layouts/uiLayouts/AccountsLayout/context/reducers/signupPageReducer';
import {
    RoutePathFactory,
} from '@/router/RoutePathFactory';
// type
import { 
    accountPageFooterTypeMapper,
} from '../AccountPageFooter/accountPageFooterTypes';
// styled-components
import styled, {
    useTheme,
} from 'styled-components';
// UI components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import AccountPageFooter from '../AccountPageFooter/AccountPageFooter';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
import LabelrInputConfirm from '@/components/ui/LabelrInputConfirm/LabelrInputConfirm';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
// i18n
import {
    useTranslation,
} from 'react-i18next';

const StyledSignupPageRoot = styled.div`
    //

    .signup-body {
        .inputWrapper{
            margin-top: 20px;
    
            display: flex;
            flex-direction: column;
            gap: 8px;
        }

        .noticeMessage {
            margin-top: 8px;

            color: ${({ theme }) => theme.colors.gs[600]};
            font-size: 10px;
            line-height: 16px;
            font-weight: 400;
            text-align: center;
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

function SignupPage() {
    //
    // context
    //
    const dispatchContext = useContext(AccountsLayoutContextDispatch)!;
    const state = useContext(AccountsLayoutContextState);

    const email = useMemo(() => {
        return state?.signupPage.email || '';
    }, [state?.signupPage.email]);

    const password = useMemo(() => {
        return state?.signupPage.password || '';
    }, [state?.signupPage.password]);

    const passwordConfirm = useMemo(() => {
        return state?.signupPage.passwordConfirm || '';
    }, [state?.signupPage.passwordConfirm]);

    //
    // state
    //
    const [validationState, setValidationState] = useState({
        isValidEmail: false,
        isValidPassword: false,
        isValidPasswordConfirm: false,
    });

    //
    // hook
    //
    const router = useRouter();
    const theme = useTheme();
    const i18next = useTranslation();

    //
    // cache
    //
    const routePathForSignin = useMemo(() => {
        return RoutePathFactory.account['/signin']();
    }, []);

    const isValidInputValues = useMemo(() => {
        return Object
            .values(validationState)
            .every(isValid => isValid);
    }, [validationState]);

    //
    // callback
    //
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setEmailToSignupPage(e.currentTarget.value));
    }, [dispatchContext]);

    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setPasswordToSignupPage(e.currentTarget.value));
    }, [dispatchContext]);

    const onChangePasswordConfirm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setPasswordConfirmToSignupPage(e.currentTarget.value));
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

    const onIsValidPasswordConfirm = useCallback((isValidPasswordConfirm: boolean) => {
        setValidationState(state => ({
            ...state,
            isValidPasswordConfirm,
        }));
    }, []);

    const onClickSignup = useCallback(() => {
        // TODO: API 응답 결과 => 성공 시
        // TODO: => (임시) verifyEmail 페이지로 이동
        router.push(RoutePathFactory.account['/verify-email']());
    }, [router]);

    const onClickGoogleSignup = useCallback(() => {
        console.log('Google Signup 버튼 클릭');
    }, []);

    const onClickAppleSignup = useCallback(() => {
        console.log('Apple Signup 버튼 클릭');
    }, []);

    return (
        <StyledSignupPageRoot>
            {/* Header */}
            <AccountPageHeader
                message={i18next.t('/account/signup/HEADER__MESSAGE')}
                linkText={i18next.t('/account/signup/HEADER__LINK')}
                linkHref={routePathForSignin}>
                {i18next.t('/account/signup/HEADER__TITLE')}
            </AccountPageHeader>

            {/* Body */}
            <div className="signup-body">
                <div className="inputWrapper">
                    <LabelrInputEmail
                        value={email}
                        onChange={onChangeEmail}
                        onIsValid={onIsValidEmail}
                        placeholder={i18next.t('/account/signup/BODY__INPUT_EMAIL__PLACEHOLDER')}
                        fluid
                        autofocus />

                    <LabelrInputPassword
                        value={password}
                        onChange={onChangePassword}
                        onIsValid={onIsValidPassword}
                        placeholder={i18next.t('/account/signup/BODY__INPUT_PASSWORD__PLACEHOLDER')}
                        fluid />

                    <LabelrInputConfirm
                        value={passwordConfirm}
                        targetValue={password}
                        onChange={onChangePasswordConfirm}
                        onIsValid={onIsValidPasswordConfirm}
                        invalidMessage={i18next.t('/account/signup/BODY__INPUT_PASSWORD_CONFIRM__INVALID_MESSAGE')}
                        placeholder={i18next.t('/account/signup/BODY__INPUT_PASSWORD_CONFIRM__PLACEHOLDER')}
                        fluid
                        isEnableMasking />

                    <LabelrButton
                        fluid
                        isDisabled={!isValidInputValues}
                        onClick={onClickSignup}>
                        {i18next.t('/account/signup/BODY__SIGNUP_BUTTON')}
                    </LabelrButton>
                </div>

                <div className="noticeMessage">
                    <span dangerouslySetInnerHTML={{ __html: i18next.t('/account/signup/BODY__NOTICE_MESSAGE', {
                        accentTagStart: `<span style="color: ${theme.colors.indigo[500]}">`,
                        accentTagEnd: '</span>',
                    })}} />
                </div>

                <div className="questionMessage">
                    {i18next.t('/account/signup/BODY__SIGNIN_LEADING_MESSAGE')}
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForSignin}>
                        <a className="questionMessage-link">
                            {i18next.t('/account/signup/BODY__BUTTON')}
                        </a>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <AccountPageFooter
                type={accountPageFooterTypeMapper.SIGNUP}
                onClickGoogle={onClickGoogleSignup}
                onClickApple={onClickAppleSignup} />
        </StyledSignupPageRoot>
    );
}

export default SignupPage;
