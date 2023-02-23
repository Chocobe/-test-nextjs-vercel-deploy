// react
import {
    useState,
    useMemo,
    useCallback,
    // useEffect,
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
} from '@/contexts/accountsLayoutContext/accountsLayoutContext';
import { 
    setEmailToRequestVerifyEmailPage, 
    // FIXME: 지우기
    // setHasExpiredToResultVerifyEmailPage,
} from '@/contexts/accountsLayoutContext/reducers/requestVerifyEmailPageReducer';
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

const StyledRequestVerifyEmailPageRoot = styled.div`
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

function RequestVerifyEmailPage() {
    //
    // context
    //
    const dispatchContext = useContext(AccountsLayoutContextDispatch)!;
    const state = useContext(AccountsLayoutContextState)!;

    const email = useMemo(() => {
        return state.requestVerifyEmail.email;
    }, [state.requestVerifyEmail.email]);

    //
    // state
    //
    const [isValidEmail, setIsValidEmail] = useState(false);

    //
    // hook
    //
    const i18next = useTranslation();

    //
    // cache
    //
    const title = useMemo(() => {
        return i18next.t('/account/request-verify-email/HEADER__TITLE__RESULT');

        // return hasExpired
        //     ? i18next.t('/account/request-verify-email/HEADER__TITLE__EXPIRED')
        //     : i18next.t('/account/request-verify-email/HEADER__TITLE__RESULT');
    // }, [hasExpired, i18next]);
    }, [i18next]);

    //
    // callback
    //
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setEmailToRequestVerifyEmailPage(e.currentTarget.value));
    }, [dispatchContext]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);

    const onClickSubmit = useCallback(() => {
        console.log('인증 메일 재전송 API 요청');
    }, []);

    return (
        <StyledRequestVerifyEmailPageRoot>
            <AccountPageHeader
                linkText={i18next.t('/account/request-verify-email/HEADER__LINK')}
                linkHref={RoutePathFactory.accounts['/signin']()}>
                {title}
            </AccountPageHeader>

            <div className="message">
                {i18next.t('/account/request-verify-email/HEADER__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputEmail
                    value={email}
                    onChange={onChangeEmail}
                    onIsValid={onIsValidEmail}
                    placeholder={i18next.t('/account/request-verify-email/HEADER__INPUT_EMAIL__PLACEHOLDER')}
                    autofocus
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidEmail}
                    fluid>
                    {i18next.t('/account/request-verify-email/BODY__BUTTON_OK')}
                </LabelrButton>
            </div>
        </StyledRequestVerifyEmailPageRoot>
    );
}

export default RequestVerifyEmailPage;
