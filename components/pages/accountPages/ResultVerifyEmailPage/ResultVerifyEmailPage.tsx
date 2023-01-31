// react
import {
    useState,
    useMemo,
    useCallback,
    useEffect,
    ChangeEvent,
} from 'react';
// redux
import {
    useAppSelector,
    useAppDispatch,
} from '@/redux/hooks';
import {
    setEmail,
    setHasExpired,
} from '@/redux/slices/pageSlices/accountPageSlices/resultVerifyEmailPageSlice/resultVerifyEmailPageSlice';
// styled-components
import styled from 'styled-components';
// UI components
import AuthPageHeader from '../AuthPageHeader/AuthPageHeader';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';

import {
    RoutePathFactory
} from '@/router/RoutePathFactory';

const StyledResultVerifyEmailPageRoot = styled.div`
    //

    .messageWrapper {
        margin-top: 12px;

        .message {
            color: ${({ theme }) => theme.colors.gs[700]};
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
        }
    }

    .formWrapper {
        margin-top: 20px;

        display: flex;
        flex-direction: column;
        gap: 8px;
    }
`;

function ResultVerifyEmailPage() {
    // state
    const email = useAppSelector(({ resultVerifyEmailPage }) => resultVerifyEmailPage.email);
    const hasExpired = useAppSelector(({ resultVerifyEmailPage }) => resultVerifyEmailPage.hasExpired);
    const expirationTime = useAppSelector(({ resultVerifyEmailPage }) => resultVerifyEmailPage.expirationTime);

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | undefined>();

    // hook
    const dispatch = useAppDispatch();

    // cache
    const title = useMemo(() => {
        return hasExpired
            ? '인증 메일이 만료되었어요!\n다시 시도해 주세요.'
            : '이메일 인증';
    }, [hasExpired]);

    // callback
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value));
    }, [dispatch]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);

    const onClickSubmit = useCallback(() => {
        const newTimeoutId = setTimeout(() => {
            dispatch(setHasExpired(true));
        }, expirationTime);

        setTimeoutId(newTimeoutId);
    }, [expirationTime, dispatch]);

    // effect
    useEffect(() => {
        return () => {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
        };
    }, [timeoutId]);

    return (
        <StyledResultVerifyEmailPageRoot>
            <AuthPageHeader
                linkText="로그인"
                linkHref={RoutePathFactory.account['/signin']()}>
                {title}
            </AuthPageHeader>

            <div className="messageWrapper">
                <div className="message">
                    가입 시 또는 로그인 시 사용되는 이메일 주소를 입력해 주세요.
                </div>

                <div className="message">
                    이메일 확인을 위한 인증메일을 보내드려요.
                </div>
            </div>

            <div className="formWrapper">
                <LabelrInputEmail
                    value={email}
                    onChange={onChangeEmail}
                    onIsValid={onIsValidEmail}
                    autofocus
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidEmail}
                    fluid>
                    확인
                </LabelrButton>
            </div>
        </StyledResultVerifyEmailPageRoot>
    );
}

export default ResultVerifyEmailPage;
