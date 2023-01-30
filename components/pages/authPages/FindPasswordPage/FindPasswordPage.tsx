// react
import {
    useState,
    useCallback,
    ChangeEvent,
} from 'react';
// nextjs
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
} from '@/redux/slices/pageSlices/authPageSlices/findPasswordPageSlice/findPasswordPageSlice';
// styled-components
import styled from 'styled-components';
// UI components
import AuthPageHeader from '../AuthPageHeader/AuthPageHeader';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';

import {
    RoutePathFactory
} from '@/router/RoutePathFactory';

const StyledFindPasswordPageRoot = styled.div`
    //

    .messageWrapper {
        margin-top: 12px;

        color: ${({ theme }) => theme.colors.gs[700]};
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
    }

    .formWrapper {
        margin-top: 20px;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

function FindPasswordPage() {
    const [isValidEmail, setIsValidEmail] = useState(false);
    const email = useAppSelector(({ findPasswordPage }) => findPasswordPage.email);

    const dispatch = useAppDispatch();
    const router = useRouter();

    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value));
    }, [dispatch]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);
    
    const onClickSendEmail = () => {
        // TODO: API 응답 결과 => 실패 => Snackbar 보여주기
        router.push(RoutePathFactory['/resetPassword']());
    };

    return (
        <StyledFindPasswordPageRoot>
            <AuthPageHeader
                linkText="로그인"
                linkHref={RoutePathFactory['/signin']()}>
                비밀번호를 잊으셨나요?
            </AuthPageHeader>

            <div className="messageWrapper">
                <div className="message">
                    가입 시 사용하신 이메일 주소를 아래에 입력해 주세요.
                </div>
                <div className="message">
                    비밀번호를 다시 설정 하실 수 있도록 링크를 보내 드립니다.
                </div>
            </div>

            <div className="formWrapper">
                <LabelrInputEmail
                    value={email}
                    onChange={onChangeEmail}
                    onIsValid={onIsValidEmail}
                    placeholder="이메일 주소를 입력해 주세요"
                    fluid
                    autofocus />

                <LabelrButton
                    onClick={onClickSendEmail}
                    isDisabled={!isValidEmail}
                    fluid>
                    이메일 전송
                </LabelrButton>
            </div>
        </StyledFindPasswordPageRoot>
    );
}

export default FindPasswordPage;
