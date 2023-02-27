// react
import {
    useState,
    useMemo,
    useCallback,
    useEffect,
    useContext,
    ChangeEvent,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
// context
import {
    AccountsLayoutContextDispatch,
    AccountsLayoutContextState,
} from '@/contexts/accountsLayoutContext/accountsLayoutContext';
import { 
    setEmailToRequestVerifyEmailContext,
    resetRequestVerifyEmailContext,
} from '@/contexts/accountsLayoutContext/reducers/requestVerifyEmailPageReducer';
// type
import { 
    requestVerifyEmailTypeMapper,
} from './requestVerifyEmailPageTypes';
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
import { useLabelrSnackbar } from '@/components/ui/LabelrSnackbar/hooks/useLabelrSnackbar';
// import useAppSelector from '@/redux/hooks/useAppSelector';
import useAppDispatch from '@/redux/hooks/useAppDispatch';

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

    const requestVerifyEmailType = useMemo(() => {
        return state.requestVerifyEmail.type!;
    }, [state]);

    const hasExpired = useMemo(() => {
        return state.requestVerifyEmail.hasExpired;
    }, [state]);

    //
    // api state
    //
    // const resetPasswordApiState = useAppSelector(({ accountsApi }) => {
    //     return accountsApi.resetPassword;
    // });

    // const resetPasswordApiData = useMemo(() => {
    //     return resetPasswordApiState.data;
    // }, [resetPasswordApiState]);

    // const resetPasswordApiError = useMemo(() => {
    //     return resetPasswordApiState.error;
    // }, [resetPasswordApiState]);

    //
    // state
    //
    const [isValidEmail, setIsValidEmail] = useState(false);

    //
    // hook
    //
    const dispatch = useAppDispatch();
    const i18next = useTranslation();
    const router = useRouter();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();

    //
    // cache
    //
    const title = useMemo(() => {
        return hasExpired
            ? i18next.t('/accounts/request-verify-email/HEADER__TITLE__EXPIRED')
            : i18next.t('/accounts/request-verify-email/HEADER__TITLE__RESULT');
    }, [hasExpired, i18next]);

    //
    // callback
    //
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setEmailToRequestVerifyEmailContext(e.currentTarget.value));
    }, [dispatchContext]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);

    const onClickSubmit = useCallback(() => {
        console.log('인증 메일 재전송 API 요청 - Signup 에 대한 메일 재전송 API 없음');
        const typeInfo = requestVerifyEmailTypeMapper[requestVerifyEmailType];

        // FIXME: Signup 에 대한 인증 메일 재전송 API 추가 시, 분기문 삭제하기
        if (!typeInfo?.action) {
            openLabelrSnackbar({
                content: 'Signup 에 대한 인증 메일 재전송 API 미구현 상태'
            });

            router.replace(RoutePathFactory.accounts['/signin']());
            return;
        }

        dispatch(typeInfo.action({} as any));
    }, [
        requestVerifyEmailType, router, 
        openLabelrSnackbar, dispatch, 
    ]);

    //
    // effect
    //
    useEffect(function checkInvalidAccess() {
        if (router.isReady && !requestVerifyEmailType) {
            router.replace(RoutePathFactory.accounts['/signin']());
        }
    }, [router, requestVerifyEmailType]);

    useEffect(function resetSlices() {
        return () => {
            dispatchContext(resetRequestVerifyEmailContext());
        };
    }, [dispatchContext]);

    if (!requestVerifyEmailType) {
        return null;
    }

    return (
        <StyledRequestVerifyEmailPageRoot>
            <AccountPageHeader
                linkText={i18next.t('/accounts/request-verify-email/HEADER__LINK')}
                linkHref={RoutePathFactory.accounts['/signin']()}>
                {title}
            </AccountPageHeader>

            <div className="message">
                {i18next.t('/accounts/request-verify-email/HEADER__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputEmail
                    value={email}
                    onChange={onChangeEmail}
                    onIsValid={onIsValidEmail}
                    placeholder={i18next.t('/accounts/request-verify-email/HEADER__INPUT_EMAIL__PLACEHOLDER')}
                    autofocus
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidEmail}
                    fluid>
                    {i18next.t('/accounts/request-verify-email/BODY__BUTTON_OK')}
                </LabelrButton>
            </div>
        </StyledRequestVerifyEmailPageRoot>
    );
}

export default RequestVerifyEmailPage;
