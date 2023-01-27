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
} from '@/redux/slices/pageSlices/authPageSlices/signinPageSlice/signinPageSlice';
// types
import {
    TOnChangeForLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
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

// type alias
type TOnChange = TOnChangeForLabelrUiAddonInvalidMessages<ChangeEvent<HTMLInputElement>>;

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

        .noticeMessage {
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
                //
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

    const dispatch = useAppDispatch();

    // cache
    const routePathForFindPassword = useMemo(() => {
        return RoutePathFactory['/findPassword']();
    }, []);

    const routePathForSignup = useMemo(() => {
        return RoutePathFactory['/signup']();
    }, []);

    const isValidInputValues = useMemo(() => {
        return Object
            .values(validationState)
            .every(isValid => isValid);
    }, [validationState]);

    // callback
    const onChangeEmail = useCallback<TOnChange>((e, { isValid }) => {
        dispatch(setEmail(e.currentTarget.value));
        setValidationState(state => ({
            ...state,
            isValidEmail: isValid,
        }));
    }, [dispatch]);

    const onChangePassword = useCallback<TOnChange>((e, { isValid }) => {
        dispatch(setPassword(e.currentTarget.value));
        setValidationState(state => ({
            ...state,
            isValidPassword: isValid,
        }));
    }, [dispatch]);

    const onClickSignin = useCallback(() => {
        console.log('로그인 버튼 클릭');
    }, []);

    const onClickGoogleSignin = useCallback(() => {
        console.log('Google Social 로그인 버튼 클릭');
    }, []);

    const onClickAppleSignin = useCallback(() => {
        console.log('Apple Social 로그인 버튼 클릭');
    }, []);

    return (
        <StyledSigninPageRoot>
            {/* Header */}
            <AuthPageHeader 
                message='아직 계정이 없으세요?'
                linkText='회원가입'
                linkHref={routePathForSignup}>
                로그인
            </AuthPageHeader>

            {/* Body */}
            <div className="signin-body">
                <div className="inputWrapper">
                    <LabelrInputEmail
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="이메일 주소를 입력해 주세요"
                        autofocus
                        fluid />
                    <LabelrInputPassword
                        value={password}
                        onChange={onChangePassword}
                        placeholder="비밀번호를 입력해 주세요"
                        fluid />
                </div>

                <div className="linkWrapper">
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForFindPassword}>
                        <a className="linkWrapper-link">
                            비밀번호를 잊으셨나요?
                        </a>
                    </Link>
                </div>

                <LabelrButton
                    fluid
                    isDisabled={!isValidInputValues}
                    onClick={onClickSignin} >
                    로그인
                </LabelrButton>

                <div className="noticeMessage">
                    아직 계정이 없으세요?
                    <Link
                        passHref
                        legacyBehavior
                        href={routePathForSignup}>
                        <a className="noticeMessage-link">
                            회원가입
                        </a>
                    </Link>
                </div>
            </div>

            {/* AuthPageFooter */}
            <AuthPageFooter 
                type={authPageFooterTypeMapper.SIGNIN}
                onClickGoogle={onClickGoogleSignin}
                onClickApple={onClickAppleSignin} />
        </StyledSigninPageRoot>
    );
}

export default SigninPage;