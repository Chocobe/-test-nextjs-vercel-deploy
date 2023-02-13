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
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
// i18n
import {
    useTranslation,
} from 'react-i18next';

import {
    RoutePathFactory
} from '@/router/RoutePathFactory';

const StyledResultVerifyEmailPageRoot = styled.div`
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

function ResultVerifyEmailPage() {
    // state
    const email = useAppSelector(({ resultVerifyEmailPage }) => resultVerifyEmailPage.email);
    const hasExpired = useAppSelector(({ resultVerifyEmailPage }) => resultVerifyEmailPage.hasExpired);
    const expirationTime = useAppSelector(({ resultVerifyEmailPage }) => resultVerifyEmailPage.expirationTime);

    const [isValidEmail, setIsValidEmail] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | undefined>();

    // hook
    const dispatch = useAppDispatch();
    const i18next = useTranslation();

    // cache
    const title = useMemo(() => {
        return hasExpired
            ? i18next.t('/account/result-verify-email/HEADER__TITLE__EXPIRED')
            : i18next.t('/account/result-verify-email/HEADER__TITLE__RESULT');
    }, [hasExpired, i18next]);

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
            <AccountPageHeader
                linkText={i18next.t('/account/result-verify-email/HEADER__LINK')}
                linkHref={RoutePathFactory.account['/signin']()}>
                {title}
            </AccountPageHeader>

            <div className="message">
                {i18next.t('/account/result-verify-email/HEADER__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputEmail
                    value={email}
                    onChange={onChangeEmail}
                    onIsValid={onIsValidEmail}
                    placeholder={i18next.t('/account/result-verify-email/HEADER__INPUT_EMAIL__PLACEHOLDER')}
                    autofocus
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidEmail}
                    fluid>
                    {i18next.t('/account/result-verify-email/BODY__BUTTON_OK')}
                </LabelrButton>
            </div>
        </StyledResultVerifyEmailPageRoot>
    );
}

export default ResultVerifyEmailPage;
