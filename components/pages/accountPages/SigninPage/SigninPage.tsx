// react
import {
    useState,
    useMemo,
    useCallback,
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
// rtk
import {
    useAppSelector,
    useAppDispatch,
} from '@/redux/hooks';
// redux
import { 
    setEmail,
    setPassword,
} from '@/redux/slices/pageSlices/accountPageSlices/signinPageSlice/signinPageSlice';
// types
import { 
    accountPageFooterTypeMapper
} from '../AccountPageFooter/accountPageFooterTypes';
// styled-components
import styled from 'styled-components';
// ui components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import AccountPageFooter from '../AccountPageFooter/AccountPageFooter';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
// i18next
import {
    useTranslation,
} from 'react-i18next';

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
    // state
    const email = useAppSelector(({ signinPage }) => signinPage.email);
    const password = useAppSelector(({ signinPage }) => signinPage.password);

    const [validationState, setValidationState] = useState({
        isValidEmail: false,
        isValidPassword: false,
    });

    // hook
    const dispatch = useAppDispatch();
    const router = useRouter();
    const i18next = useTranslation();

    // cache
    const routePathForFindPassword = useMemo(() => {
        return RoutePathFactory.account['/find-password']();
    }, []);

    const routePathForSignup = useMemo(() => {
        return RoutePathFactory.account['/signup']();
    }, []);

    const isValidInputValues = useMemo(() => {
        return Object
            .values(validationState)
            .every(isValid => isValid);
    }, [validationState]);

    // callback
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value));
    }, [dispatch]);

    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.currentTarget.value));
    }, [dispatch]);

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
        router.push(RoutePathFactory.console['/']());
    }, [router]);

    const onClickGoogleSignin = useCallback(() => {
        console.log('Google Social 로그인 버튼 클릭');
    }, []);

    const onClickAppleSignin = useCallback(() => {
        console.log('Apple Social 로그인 버튼 클릭');
    }, []);

    return (
        <StyledSigninPageRoot>
            {/* Header */}
            <AccountPageHeader 
                message={i18next.t('/account/signin/HEADER__MESSAGE')}
                linkText={i18next.t('/account/signin/HEADER__LINK')}
                linkHref={routePathForSignup}>
                {i18next.t('/account/signin/HEADER__TITLE')}
            </AccountPageHeader>

            {/* Body */}
            <div className="signin-body">
                <div className="inputWrapper">
                    <LabelrInputEmail
                        value={email}
                        onChange={onChangeEmail}
                        onIsValid={onIsValidEmail}
                        placeholder={i18next.t('/account/signin/BODY__INPUT_EMAIL__PLACEHOLDER')}
                        autofocus
                        fluid />

                    <LabelrInputPassword
                        value={password}
                        onChange={onChangePassword}
                        onIsValid={onIsValidPassword}
                        placeholder={i18next.t('/account/signin/BODY__INPUT_PASSWORD__PLACEHOLDER')}
                        fluid />
                </div>

                <div className="linkWrapper">
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForFindPassword}>
                        <a className="linkWrapper-link">
                            {i18next.t('/account/signin/BODY__FORGOT_PASSWORD')}
                        </a>
                    </Link>
                </div>

                <LabelrButton
                    fluid
                    isDisabled={!isValidInputValues}
                    onClick={onClickSignin} >
                    {i18next.t('/account/signin/BODY__SIGNIN_BUTTON')}
                </LabelrButton>

                <div className="questionMessage">
                    {i18next.t('/account/signin/BODY__SIGNUP_LEADING_MESSAGE')}
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForSignup}>
                        <a className="questionMessage-link">
                            {i18next.t('/account/signin/BODY__SIGNUP_BUTTON')}
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