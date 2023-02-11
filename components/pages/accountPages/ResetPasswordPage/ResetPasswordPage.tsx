// react
import {
    useState,
    useMemo,
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
    setPassword,
    setPasswordConfirm,
} from '@/redux/slices/pageSlices/accountPageSlices/resetPasswordPageSlice/resetPasswordPageSlice';
// styled-components
import styled from 'styled-components';
// UI components
import AuthPageHeader from '../AuthPageHeader/AuthPageHeader';
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
    const password = useAppSelector(({ resetPasswordPage }) => resetPasswordPage.password);
    const passwordConfirm = useAppSelector(({ resetPasswordPage }) => resetPasswordPage.passwordConfirm);

    const [validationState, setValidationState] = useState({
        isValidPassword: false,
        isValidPasswordConfirm: false,
    });

    // cache
    const isValidInputValues = useMemo(() => {
        return Object
            .values(validationState)
            .every(isValid => isValid);
    }, [validationState]);

    // hook
    const dispatch = useAppDispatch();
    const router = useRouter();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();
    const {
        t,
    } = useTranslation();

    // callback
    const onChangePassword = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPassword(e.currentTarget.value));
    }, [dispatch]);

    const onChangePasswordConfirm = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setPasswordConfirm(e.currentTarget.value));
    }, [dispatch]);

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
            content: t('/account/reset-password/SUBMIT__SNACKBAR_MESSAGE'),
        });

        // TODO: API 응답 결과 => 성공 시
        // TODO: => Snackbar 보여주기
        // TODO: signin 페이지로 이동
        router.push(RoutePathFactory.account['/signin']());
    }, [router, openLabelrSnackbar, t]);

    return (
        <StyledResetPasswordPageRoot>
            <AuthPageHeader
                linkText={t('/account/reset-password/HEADER__LINK')}
                linkHref={RoutePathFactory.account['/signin']()}>
                {t('/account/reset-password/HEADER__TITLE')}
            </AuthPageHeader>

            <div className="message">
                {t('/account/reset-password/BODY__MESSAGE')}
            </div>

            <div className="formWrapper">
                <LabelrInputPassword
                    value={password}
                    onChange={onChangePassword}
                    onIsValid={onIsValidPassword}
                    placeholder={t('/account/reset-password/BODY__INPUT_EMAIL__PLACEHOLDER')}
                    autofocus
                    fluid />

                <LabelrInputConfirm
                    value={passwordConfirm}
                    targetValue={password}
                    onChange={onChangePasswordConfirm}
                    onIsValid={onIsValidPasswordConfirm}
                    invalidMessage={t('/account/reset-password/BODY__INPUT_CONFIRM__INVALID_MESSAGE')}
                    placeholder={t('/account/reset-password/BODY__INPUT_CONFIRM__PLACEHOLDER')}
                    isEnableMasking
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidInputValues}
                    fluid>
                    {t('/account/reset-password/BODY__SUBMIT_BUTTON')}
                </LabelrButton>
            </div>
        </StyledResetPasswordPageRoot>
    );
}

export default ResetPasswordPage;