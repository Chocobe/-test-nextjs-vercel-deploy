// react
import {
    useState,
    useMemo,
    useCallback,
    useContext,
    ChangeEvent,
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
    setPasswordToResetPasswordPage,
    setPasswordConfirmToResetPasswordPage,
} from '@/contexts/accountsLayoutContext/reducers/resetPasswordPageReducer';
// styled-components
import styled from 'styled-components';
// UI components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import LabelrInputPassword from '@/components/ui/LabelrInputPassword/LabelrInputPassword';
import LabelrInputConfirm from '@/components/ui/LabelrInputConfirm/LabelrInputConfirm';
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

const StyledResetPasswordPageRoot = styled.div`
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

function ResetPasswordPage() {
    //
    // context
    //
    const dispatchContext = useContext(AccountsLayoutContextDispatch)!;
    const state = useContext(AccountsLayoutContextState)!;

    const password = useMemo(() => {
        return state.resetPassword.password;
    }, [state.resetPassword.password]);

    const passwordConfirm = useMemo(() => {
        return state.resetPassword.passwordConfirm;
    }, [state.resetPassword.passwordConfirm]);

    //
    // state
    //
    const [validationState, setValidationState] = useState({
        isValidPassword: false,
        isValidPasswordConfirm: false,
    });

    //
    // cache
    //
    const isValidInputValues = useMemo(() => {
        return Object
            .values(validationState)
            .every(isValid => isValid);
    }, [validationState]);

    //
    // hook
    //
    const router = useRouter();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();
    const {
        t,
    } = useTranslation();

    //
    // callback
    //
    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setPasswordToResetPasswordPage(e.currentTarget.value));
    }, [dispatchContext]);

    const onChangePasswordConfirm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatchContext(setPasswordConfirmToResetPasswordPage(e.currentTarget.value));
    }, [dispatchContext]);

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

    const onClickSubmit = useCallback(() => {
        openLabelrSnackbar({
            content: t('/accounts/reset-password/SUBMIT__SNACKBAR_MESSAGE'),
        });

        // TODO: API 응답 결과 => 성공 시
        // TODO: => Snackbar 보여주기
        // TODO: signin 페이지로 이동
        router.push(RoutePathFactory.accounts['/signin']());
    }, [router, openLabelrSnackbar, t]);

    return (
        <StyledResetPasswordPageRoot>
            <AccountPageHeader
                linkText={t('/accounts/reset-password/HEADER__LINK')}
                linkHref={RoutePathFactory.accounts['/signin']()}>
                {t('/accounts/reset-password/HEADER__TITLE')}
            </AccountPageHeader>

            <div className="message">
                {t('/accounts/reset-password/BODY__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputPassword
                    value={password}
                    onChange={onChangePassword}
                    onIsValid={onIsValidPassword}
                    placeholder={t('/accounts/reset-password/BODY__INPUT_EMAIL__PLACEHOLDER')}
                    autofocus
                    fluid />

                <LabelrInputConfirm
                    value={passwordConfirm}
                    targetValue={password}
                    onChange={onChangePasswordConfirm}
                    onIsValid={onIsValidPasswordConfirm}
                    invalidMessage={t('/accounts/reset-password/BODY__INPUT_CONFIRM__INVALID_MESSAGE')}
                    placeholder={t('/accounts/reset-password/BODY__INPUT_CONFIRM__PLACEHOLDER')}
                    isEnableMasking
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidInputValues}
                    fluid>
                    {t('/accounts/reset-password/BODY__SUBMIT_BUTTON')}
                </LabelrButton>
            </div>
        </StyledResetPasswordPageRoot>
    );
}

export default ResetPasswordPage;
