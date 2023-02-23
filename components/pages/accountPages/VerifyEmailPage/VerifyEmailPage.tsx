// react
import {
    useMemo,
    useCallback,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import Link from 'next/link';
// UI components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
// styled-components
import styled from 'styled-components';
// i18n
import {
    useTranslation,
} from 'react-i18next';

import { 
    RoutePathFactory
} from '@/router/RoutePathFactory';

const StyledVerifyEmailPageRoot = styled.div`
    //

    .messageWrapper {
        margin-top: 12px;

        .message {
            color: ${({ theme }) => theme.colors.gs[700]};
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
            white-space: pre-line;

            .linkMessage {
                font-weight: 700;
            }
        }
    }

    .actionWrapper {
        margin-top: 20px;
    }
`;

function VerifyEmailPage() {
    //
    // cache
    //
    const routePathOfSignin = useMemo(() => {
        return RoutePathFactory.accounts['/signin']();
    }, []);

    const routePathOfSendVerificationEmail = useMemo(() => {
        return RoutePathFactory.accounts['/request-verify-email']();
    }, []);

    //
    // hook
    //
    const router = useRouter();
    const i18next = useTranslation();

    //
    // callback
    //
    const onClickSignin = useCallback(() => {
        router.push(routePathOfSignin);
    }, [router, routePathOfSignin]);

    return (
        <StyledVerifyEmailPageRoot>
            <AccountPageHeader
                linkText={i18next.t('/accounts/verify-email/HEADER__LINK')}
                linkHref={routePathOfSignin}>
                {i18next.t('/accounts/verify-email/HEADER__TITLE')}
            </AccountPageHeader>

            <div className="messageWrapper">
                <div className="message">
                    {i18next.t('/accounts/verify-email/BODY__NOTICE_MESSAGE')}
                </div>

                <br />

                <div className="message">
                    {i18next.t('/accounts/verify-email/BODY__HELP_MESSAGE__PREFIX')}
                    <Link
                        href={routePathOfSendVerificationEmail}
                        passHref
                        legacyBehavior>
                        <a className="linkMessage">
                            &nbsp;{i18next.t('/accounts/verify-email/BODY__HELP_MESSAGE__LINK')}
                        </a>
                    </Link>
                    {i18next.t('/accounts/verify-email/BODY__HELP_MESSAGE__POSTFIX')}
                </div>
            </div>

            <div className="actionWrapper">
                <LabelrButton
                    onClick={onClickSignin}
                    fluid>
                    {i18next.t('/accounts/verify-email/BODY__SIGNIN_BUTTON')}
                </LabelrButton>
            </div>
        </StyledVerifyEmailPageRoot>
    );
}

export default VerifyEmailPage;
