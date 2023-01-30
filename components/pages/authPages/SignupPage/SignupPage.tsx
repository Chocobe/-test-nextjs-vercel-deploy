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
// redux
import {
    useAppSelector,
    useAppDispatch,
} from '@/redux/hooks';
import {
    setEmail,
    setPassword,
    setPasswordConfirm,
} from '@/redux/slices/pageSlices/authPageSlices/signupPageSlice/signupPageSlice';
import {
    RoutePathFactory,
} from '@/router/RoutePathFactory';
// type
import { 
    authPageFooterTypeMapper,
} from '../AuthPageFooter/authPageFooterTypes';
// styled-components
import styled from 'styled-components';
// UI components
import AuthPageHeader from '../AuthPageHeader/AuthPageHeader';
import AuthPageFooter from '../AuthPageFooter/AuthPageFooter';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
import LabelrInputConfirm from '@/components/ui/LabelrInputConfirm/LabelrInputConfirm';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';

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

            &-accent {
                color: ${({ theme }) => theme.colors.indigo[500]};
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

function SignupPage() {
    // state
    const email = useAppSelector(({ signupPage }) => signupPage.email);
    const password = useAppSelector(({ signupPage }) => signupPage.password);
    const passwordConfirm = useAppSelector(({ signupPage }) => signupPage.passwordConfirm);

    const [validationState, setValidationState] = useState({
        isValidEmail: false,
        isValidPassword: false,
        isValidPasswordConfirm: false,
    });

    // hook
    const dispatch = useAppDispatch();
    const router = useRouter();

    // cache
    const routePathForSignin = useMemo(() => {
        return RoutePathFactory['/signin']();
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

    const onChangePasswordConfirm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPasswordConfirm(e.currentTarget.value));
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

    const onIsValidPasswordConfirm = useCallback((isValidPasswordConfirm: boolean) => {
        setValidationState(state => ({
            ...state,
            isValidPasswordConfirm,
        }));
    }, []);

    const onClickSignup = useCallback(() => {
        // TODO: API 응답 결과 => 성공 시
        // TODO: => (임시) verifyEmail 페이지로 이동
        router.push(RoutePathFactory['/verifyEmail']());
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
            <AuthPageHeader
                message="계정이 있으세요?"
                linkText="로그인"
                linkHref={routePathForSignin}>
                회원가입
            </AuthPageHeader>

            {/* Body */}
            <div className="signup-body">
                <div className="inputWrapper">
                    <LabelrInputEmail
                        value={email}
                        onChange={onChangeEmail}
                        onIsValid={onIsValidEmail}
                        placeholder="이메일 주소를 입력해 주세요"
                        fluid
                        autofocus />

                    <LabelrInputPassword
                        value={password}
                        onChange={onChangePassword}
                        onIsValid={onIsValidPassword}
                        placeholder="비밀번호를 입력해 주세요"
                        fluid />

                    <LabelrInputConfirm
                        value={passwordConfirm}
                        targetValue={password}
                        onChange={onChangePasswordConfirm}
                        onIsValid={onIsValidPasswordConfirm}
                        invalidMessage="비밀번호가 일치하지 않습니다."
                        placeholder="비밀번호를 다시한번 입력해 주세요"
                        fluid
                        isEnableMasking />

                    <LabelrButton
                        fluid
                        isDisabled={!isValidInputValues}
                        onClick={onClickSignup}>
                        회원가입
                    </LabelrButton>
                </div>

                <div className="noticeMessage">
                    회원가입은 
                    <span className="noticeMessage-accent">
                        &nbsp;이용약관&nbsp;
                    </span> 
                    및 
                    <span className="noticeMessage-accent">
                        &nbsp;개인정보 보호정책
                    </span>
                    에 동의하시는 것으로 간주합니다.
                </div>

                <div className="questionMessage">
                    계정이 있으세요?
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForSignin}>
                        <a className="questionMessage-link">
                            로그인
                        </a>
                    </Link>
                </div>
            </div>

            {/* Footer */}
            <AuthPageFooter
                type={authPageFooterTypeMapper.SIGNUP}
                onClickGoogle={onClickGoogleSignup}
                onClickApple={onClickAppleSignup} />
        </StyledSignupPageRoot>
    );
}

export default SignupPage;
