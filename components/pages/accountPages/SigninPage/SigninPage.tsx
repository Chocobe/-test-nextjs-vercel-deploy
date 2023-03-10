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
    authPageFooterTypeMapper
} from '../AuthPageFooter/authPageFooterTypes';
// styled-components
import styled from 'styled-components';
// ui components
import AuthPageHeader from '../AuthPageHeader/AuthPageHeader';
import AuthPageFooter from '../AuthPageFooter/AuthPageFooter';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';

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
        console.log('Google Social ????????? ?????? ??????');
    }, []);

    const onClickAppleSignin = useCallback(() => {
        console.log('Apple Social ????????? ?????? ??????');
    }, []);

    return (
        <StyledSigninPageRoot>
            {/* Header */}
            <AuthPageHeader 
                message='?????? ????????? ?????????????'
                linkText='????????????'
                linkHref={routePathForSignup}>
                {'???????????? ?????????'}
            </AuthPageHeader>

            {/* Body */}
            <div className="signin-body">
                <div className="inputWrapper">
                    <LabelrInputEmail
                        value={email}
                        onChange={onChangeEmail}
                        onIsValid={onIsValidEmail}
                        placeholder="????????? ????????? ????????? ?????????"
                        autofocus
                        fluid />

                    <LabelrInputPassword
                        value={password}
                        onChange={onChangePassword}
                        onIsValid={onIsValidPassword}
                        placeholder="??????????????? ????????? ?????????"
                        fluid />
                </div>

                <div className="linkWrapper">
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForFindPassword}>
                        <a className="linkWrapper-link">
                            ??????????????? ????????????????
                        </a>
                    </Link>
                </div>

                <LabelrButton
                    fluid
                    isDisabled={!isValidInputValues}
                    onClick={onClickSignin} >
                    ?????????
                </LabelrButton>

                <div className="questionMessage">
                    ?????? ????????? ?????????????
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForSignup}>
                        <a className="questionMessage-link">
                            ????????????
                        </a>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <AuthPageFooter 
                type={authPageFooterTypeMapper.SIGNIN}
                onClickGoogle={onClickGoogleSignin}
                onClickApple={onClickAppleSignin} />
        </StyledSigninPageRoot>
    );
}

export default SigninPage;