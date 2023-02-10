// react
import {
    useMemo,
    useCallback,
    useEffect,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import Link from 'next/link';
// redux
import {
    useAppSelector,
    useAppDispatch,
} from '@/redux/hooks';
import {
    setHasExpired,
} from '@/redux/slices/pageSlices/accountPageSlices/resultVerifyEmailPageSlice/resultVerifyEmailPageSlice';
// UI components
import AuthPageHeader from '../AuthPageHeader/AuthPageHeader';
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
    // state
    const expirationTime = useAppSelector(({ resultVerifyEmailPage }) => resultVerifyEmailPage.expirationTime);

    // cache
    const routePathOfSignin = useMemo(() => {
        return RoutePathFactory.account['/signin']();
    }, []);

    const routePathOfSendVerificationEmail = useMemo(() => {
        return RoutePathFactory.account['/result-verify-email']();
    }, []);

    // hook
    const dispatch = useAppDispatch();
    const router = useRouter();
    const i18next = useTranslation();

    // callback
    const onClickSignin = useCallback(() => {
        router.push(routePathOfSignin);
    }, [router, routePathOfSignin]);

    // effect
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setHasExpired(true));
            router.replace(RoutePathFactory.account['/result-verify-email']());
        }, expirationTime);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [dispatch, , expirationTime, router]);

    return (
        <StyledVerifyEmailPageRoot>
            <AuthPageHeader
                linkText={i18next.t('/account/verify-email/HEADER__LINK')}
                linkHref={routePathOfSignin}>
                {i18next.t('/account/verify-email/HEADER__TITLE')}
            </AuthPageHeader>

            <div className="messageWrapper">
                <div 
                    className="message"
                    dangerouslySetInnerHTML={{ __html: i18next.t('/account/verify-email/BODY__VERIFY_MESSAGE')}} />

                <div className="message">
                    {i18next.t('/account/verify-email/BODY__HELP_MESSAGE__PREFIX')}
                    <Link
                        href={routePathOfSendVerificationEmail}
                        passHref
                        legacyBehavior>
                        <a className="linkMessage">
                            &nbsp;{i18next.t('/account/verify-email/BODY__HELP_MESSAGE__LINK')}
                        </a>
                    </Link>
                    {i18next.t('/account/verify-email/BODY__HELP_MESSAGE__POSTFIX')}
                </div>
            </div>

            <div className="actionWrapper">
                <LabelrButton
                    onClick={onClickSignin}
                    fluid>
                    {i18next.t('/account/verify-email/BODY__SIGNIN_BUTTON')}
                </LabelrButton>
            </div>
        </StyledVerifyEmailPageRoot>
    );
}

export default VerifyEmailPage;
