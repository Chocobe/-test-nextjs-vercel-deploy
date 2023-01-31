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
    RoutePathFactory
} from '@/router/RoutePathFactory';

const StyledResetPasswordPageRoot = styled.div`
    //

    .messageWrapper {
        margin-top: 12px;

        color: ${({ theme }) => theme.colors.gs[700]};
        font-size: 14px;
        line-height: 22px;
        font-weight: 400;
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
        // TODO: API 응답 결과 => 성공 시
        // TODO: => Snackbar 보여주기
        // TODO: signin 페이지로 이동
        router.push(RoutePathFactory.account['/signin']());
    }, [router]);

    return (
        <StyledResetPasswordPageRoot>
            <AuthPageHeader
                linkText="로그인"
                linkHref={RoutePathFactory.account['/signin']()}>
                비밀번호 재설정
            </AuthPageHeader>

            <div className="messageWrapper">
                <div className="messagse">
                    새로운 비밀번호를 설정합니다.
                </div>
                <div className="message">
                    아래 입력칸에 새 비밀번호를 입력해 주시고 확인해 주세요.
                </div>
            </div>

            <div className="formWrapper">
                <LabelrInputPassword
                    value={password}
                    onChange={onChangePassword}
                    onIsValid={onIsValidPassword}
                    placeholder="새 비밀번호를 입력해 주세요"
                    autofocus
                    fluid />

                <LabelrInputConfirm
                    value={passwordConfirm}
                    targetValue={password}
                    onChange={onChangePasswordConfirm}
                    onIsValid={onIsValidPasswordConfirm}
                    invalidMessage="비밀번호가 일치하지 않습니다."
                    placeholder="새 비밀번호를 다시 한번 입력해 주세요"
                    isEnableMasking
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidInputValues}
                    fluid>
                    저장
                </LabelrButton>
            </div>
        </StyledResetPasswordPageRoot>
    );
}

export default ResetPasswordPage;