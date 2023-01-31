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
                linkText="로그인"
                linkHref={routePathOfSignin}>
                {'이메일을 확인해 주세요!'}
            </AuthPageHeader>

            <div className="messageWrapper">
                <div className="message">
                    인증 메일을 보내드렸어요!
                </div>

                <div className="message">
                    메일 수신함을 확인해 주시고 인증 버튼을 클릭해 주세요.
                </div>

                <div className="message">
                    스팸 이메일로 분류되는 경우도 있으니 확인 부탁 드려요.
                </div>

                <div className="message">
                    &nbsp;
                </div>

                <div className="message">
                    만일 이메일이 오지 않았다면
                    <Link
                        href={routePathOfSendVerificationEmail}
                        passHref
                        legacyBehavior>
                        <a className="linkMessage">
                            &nbsp;여기
                        </a>
                    </Link>
                    를 클릭하여 다시 이메일을 입력하신 뒤 보내기 버튼을 클릭해 주세요.
                </div>
            </div>

            <div className="actionWrapper">
                <LabelrButton
                    onClick={onClickSignin}
                    fluid>
                    로그인
                </LabelrButton>
            </div>
        </StyledVerifyEmailPageRoot>
    );
}

export default VerifyEmailPage;
