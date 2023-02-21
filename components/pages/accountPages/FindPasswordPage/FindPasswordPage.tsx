// react
import {
    useState,
    useCallback,
    useContext,
    ChangeEvent,
    useMemo,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
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
    setEmailToFindPasswordPage,
} from '@/contexts/accountsLayoutContext/reducers/findPasswordPageReducer';
// styled-components
import styled from 'styled-components';
// UI components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import LabelrInputEmail from '@/components/ui/LabelrInputEmail/LabelrInputEmail';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
import { 
    useLabelrSnackbar,
} from '@/components/ui/LabelrSnackbar/hooks/useLabelrSnackbar';
// i18n
import {
    useTranslation,
} from 'react-i18next';

import {
    RoutePathFactory
} from '@/router/RoutePathFactory';

const StyledFindPasswordPageRoot = styled.div`
    //

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

function FindPasswordPage() {
    //
    // context
    //
    // const email = useAppSelector(({ findPasswordPage }) => findPasswordPage.email);
    const dispatchContext = useContext(AccountsLayoutContextDispatch)!;
    const state = useContext(AccountsLayoutContextState)!;

    const email = useMemo(() => {
        return state.findPassword.email || '';
    }, [state.findPassword.email]);

    const [isValidEmail, setIsValidEmail] = useState(false);

    //
    // hooks
    //
    const { 
        t,
    } = useTranslation();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();
    const router = useRouter();

    //
    // callback
    //
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setEmailToFindPasswordPage(e.currentTarget.value));
    }, [dispatchContext]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);

    const onClickSendEmail = () => {
        openLabelrSnackbar({
            content: t('/account/find-password/SEND_EMAIL__SNACKBAR_MESSAGE'),
        });

        // FIXME: result-verify-email 페이지로 이동 
        // => 인증 완료 callback 호출 시, reset-password 페이지로 이동
        router.push(RoutePathFactory.accounts['/reset-password']());
    };

    return (
        <StyledFindPasswordPageRoot>
            <AccountPageHeader
                linkText={t('/account/find-password/HEADER__LINK')}
                linkHref={RoutePathFactory.accounts['/signin']()}>
                {t('/account/find-password/HEADER__TITLE')}
            </AccountPageHeader>

            <div className="message">
                {t('/account/find-password/BODY__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputEmail
                    value={email}
                    onChange={onChangeEmail}
                    onIsValid={onIsValidEmail}
                    placeholder={t('/account/find-password/BODY__INPUT_EMAIL__PLACEHOLDER')}
                    fluid
                    autofocus />

                <LabelrButton
                    onClick={onClickSendEmail}
                    isDisabled={!isValidEmail}
                    fluid>
                    {t('/account/find-password/BODY__SEND_BUTTON')}
                </LabelrButton>
            </div>
        </StyledFindPasswordPageRoot>
    );
}

export default FindPasswordPage;
