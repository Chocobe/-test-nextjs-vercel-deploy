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
import { 
    RoutePathFactory,
} from '@/router';
// UI components
import AccountPageHeader from '../AccountPageHeader/AccountPageHeader';
import LabelrButton from '@/components/ui/LabelrButton/LabelrButton';
// styled-components
import styled from 'styled-components';
// i18n
import {
    useTranslation,
} from 'react-i18next';

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
    const pathOfSigninPage = useMemo(() => {
        return RoutePathFactory.accounts['/signin']();
    }, []);

    const pathOfRequestVerifyEmailPage = useMemo(() => {
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
    const moveToSigninPage = useCallback(() => {
        router.replace(pathOfSigninPage);
    }, [router, pathOfSigninPage]);

    return (
        <StyledVerifyEmailPageRoot>
            <AccountPageHeader
                linkText={i18next.t('/accounts/verify-email/HEADER__LINK')}
                linkHref={pathOfSigninPage}>
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
                        href={pathOfRequestVerifyEmailPage}
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
                    onClick={moveToSigninPage}
                    fluid>
                    {i18next.t('/accounts/verify-email/BODY__SIGNIN_BUTTON')}
                </LabelrButton>
            </div>
        </StyledVerifyEmailPageRoot>
    );
}

export default VerifyEmailPage;
