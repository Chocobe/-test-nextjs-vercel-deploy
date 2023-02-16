// react
import {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useContext,
    ChangeEvent,
} from 'react';
// redux
// import {
//     useAppSelector,
//     useAppDispatch,
// } from '@/redux/hooks';
import {
    AccountsLayoutContextDispatch,
    AccountsLayoutContextState,
} from '@/layouts/uiLayouts/AccountsLayout/context/accountsLayoutContext';
import { 
    setEmailToResultVerifyEmailPage, setHasExpiredToResultVerifyEmailPage
} from '@/layouts/uiLayouts/AccountsLayout/context/reducers/resultVerifyEmailPageReducer';
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
    //
    // context
    //
    const dispatchContext = useContext(AccountsLayoutContextDispatch)!;
    const state = useContext(AccountsLayoutContextState)!;

    const email = useMemo(() => {
        return state.resultVerifyEmail.email;
    }, [state.resultVerifyEmail.email]);

    const expirationTime = useMemo(() => {
        return state.resultVerifyEmail.expirationTime;
    }, [state.resultVerifyEmail.expirationTime]);

    const hasExpired = useMemo(() => {
        return state.resultVerifyEmail.hasExpired;
    }, [state.resultVerifyEmail.hasExpired]);

    //
    // state
    //
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [timeoutId, setTimeoutId] = useState<ReturnType<typeof setTimeout> | undefined>();

    //
    // hook
    //
    const i18next = useTranslation();

    //
    // cache
    //
    const title = useMemo(() => {
        return hasExpired
            ? i18next.t('/account/result-verify-email/HEADER__TITLE__EXPIRED')
            : i18next.t('/account/result-verify-email/HEADER__TITLE__RESULT');
    }, [hasExpired, i18next]);

    //
    // callback
    //
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setEmailToResultVerifyEmailPage(e.currentTarget.value));
    }, [dispatchContext]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);

    const onClickSubmit = useCallback(() => {
        const newTimeoutId = setTimeout(() => {
            dispatchContext(setHasExpiredToResultVerifyEmailPage(true));
        }, expirationTime);

        setTimeoutId(newTimeoutId);
    }, [expirationTime, dispatchContext]);

    //
    // effect
    //
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
