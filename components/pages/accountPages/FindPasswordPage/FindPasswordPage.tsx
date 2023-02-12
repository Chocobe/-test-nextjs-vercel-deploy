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
} from '@/redux/slices/pageSlices/accountPageSlices/findPasswordPageSlice/findPasswordPageSlice';
// styled-components
import styled from 'styled-components';
// UI components
import AuthPageHeader from '../AuthPageHeader/AuthPageHeader';
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
    const [isValidEmail, setIsValidEmail] = useState(false);
    const email = useAppSelector(({ findPasswordPage }) => findPasswordPage.email);

    // hooks
    const { 
        t,
    } = useTranslation();
    const {
        openLabelrSnackbar,
    } = useLabelrSnackbar();
    const dispatch = useAppDispatch();
    const router = useRouter();

    // callback
    const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setEmail(e.currentTarget.value));
    }, [dispatch]);

    const onIsValidEmail = useCallback((isValidEmail: boolean) => {
        setIsValidEmail(isValidEmail);
    }, []);

    const onClickSendEmail = () => {
        openLabelrSnackbar({
            content: t('/account/find-password/SEND_EMAIL__SNACKBAR_MESSAGE'),
        });

        // FIXME: result-verify-email 페이지로 이동 
        // => 인증 완료 callback 호출 시, reset-password 페이지로 이동
        router.push(RoutePathFactory.account['/reset-password']());
    };

    return (
        <StyledFindPasswordPageRoot>
            <AuthPageHeader
                linkText={t('/account/find-password/HEADER__LINK')}
                linkHref={RoutePathFactory.account['/signin']()}>
                {t('/account/find-password/HEADER__TITLE')}
            </AuthPageHeader>

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
