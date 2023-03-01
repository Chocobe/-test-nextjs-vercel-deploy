// react
import {
    useContext,
    useState,
    useMemo,
    useCallback,
    useEffect,
    ChangeEvent,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import {
    RoutePathFactory,
} from '@/router';
// redux
import {
    useAppSelector,
    useAppDispatch,
} from '@/redux/hooks';
import { 
    actionReset_ResetPassword,
    actionRequested_ResetPassword, 
} from '@/redux/slices/apiSlices/accountsApiSlice/accountsApiSlice';
import { 
    AccountsLayoutContextState,
    AccountsLayoutContextDispatch,
} from '@/contexts/accountsLayoutContext/accountsLayoutContext';
import {
    reset_FindPasswordContext,
    setEmail_FindPasswordContext,
} from '@/contexts/accountsLayoutContext/reducers/findPasswordContextReducer';
import { 
    setType_RequestVerifyEmailContext,
} from '@/contexts/accountsLayoutContext/reducers/requestVerifyEmailContextReducer';
import {
    useApiResponseHandler,
} from '@/redux/hooks';
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
// type
import { 
    requestVerifyEmailType,
} from '../RequestVerifyEmailPage/requestVerifyEmailPageTypes';

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
    const dispatchContext = useContext(AccountsLayoutContextDispatch);
    const state = useContext(AccountsLayoutContextState);

    const email = useMemo(() => {
        return state.findPassword.email;
    }, [state.findPassword.email]);

    //
    // state
    //
    const [isValidEmail, setIsValidEmail] = useState(false);

    //
    // api state
    //
    const resetPasswordApiState = useAppSelector(({ accountsApi }) => {
        return accountsApi.resetPassword;
    });

    //
    // hooks
    //
    const i18next = useTranslation();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();
    const dispatch = useAppDispatch();
    const router = useRouter();

    //
    // callback
    //
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setEmail_FindPasswordContext(e.currentTarget.value));
    }, [dispatchContext]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);

    const onClickSendEmail = () => {
        dispatch(actionRequested_ResetPassword({
            email,
        }));
    };

    //
    // api handler
    //
    useApiResponseHandler({
        apiState: resetPasswordApiState,
        onSucceeded: {
            callback() {
                if (router.isReady){
                    dispatchContext(setType_RequestVerifyEmailContext(requestVerifyEmailType.RESET_PASSWORD));

                    router.replace(RoutePathFactory.accounts['/verify-email']());
                }
            },
            deps: [router],
        },
        onFailed(error) {
            openLabelrSnackbar({
                type: 'danger',
                content: error.errorData.detail,
            });
        },
    });

    //
    // effect
    //
    useEffect(function onResetSlices() {
        return () => {
            dispatchContext(reset_FindPasswordContext());
            dispatch(actionReset_ResetPassword());
        };
    }, [dispatch, dispatchContext]);

    return (
        <StyledFindPasswordPageRoot>
            <AccountPageHeader
                linkText={i18next.t('/accounts/find-password/HEADER__LINK')}
                linkHref={RoutePathFactory.accounts['/signin']()}>
                {i18next.t('/accounts/find-password/HEADER__TITLE')}
            </AccountPageHeader>

            <div className="message">
                {i18next.t('/accounts/find-password/BODY__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputEmail
                    value={email}
                    onChange={onChangeEmail}
                    onIsValid={onIsValidEmail}
                    placeholder={i18next.t('/accounts/find-password/BODY__INPUT_EMAIL__PLACEHOLDER')}
                    fluid
                    autofocus />

                <LabelrButton
                    onClick={onClickSendEmail}
                    isDisabled={!isValidEmail}
                    fluid>
                    {i18next.t('/accounts/find-password/BODY__SEND_BUTTON')}
                </LabelrButton>
            </div>
        </StyledFindPasswordPageRoot>
    );
}

export default FindPasswordPage;
