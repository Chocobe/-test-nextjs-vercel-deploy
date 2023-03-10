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
                linkText="?????????"
                linkHref={routePathOfSignin}>
                {'???????????? ????????? ?????????!'}
            </AuthPageHeader>

            <div className="messageWrapper">
                <div className="message">
                    ?????? ????????? ??????????????????!
                </div>

                <div className="message">
                    ?????? ???????????? ????????? ????????? ?????? ????????? ????????? ?????????.
                </div>

                <div className="message">
                    ?????? ???????????? ???????????? ????????? ????????? ?????? ?????? ?????????.
                </div>

                <div className="message">
                    &nbsp;
                </div>

                <div className="message">
                    ?????? ???????????? ?????? ????????????
                    <Link
                        href={routePathOfSendVerificationEmail}
                        passHref
                        legacyBehavior>
                        <a className="linkMessage">
                            &nbsp;??????
                        </a>
                    </Link>
                    ??? ???????????? ?????? ???????????? ???????????? ??? ????????? ????????? ????????? ?????????.
                </div>
            </div>

            <div className="actionWrapper">
                <LabelrButton
                    onClick={onClickSignin}
                    fluid>
                    ?????????
                </LabelrButton>
            </div>
        </StyledVerifyEmailPageRoot>
    );
}

export default VerifyEmailPage;
