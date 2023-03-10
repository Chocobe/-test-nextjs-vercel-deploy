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
        // TODO: API ?????? ?????? => ?????? ???
        // TODO: => Snackbar ????????????
        // TODO: signin ???????????? ??????
        router.push(RoutePathFactory.account['/signin']());
    }, [router]);

    return (
        <StyledResetPasswordPageRoot>
            <AuthPageHeader
                linkText="?????????"
                linkHref={RoutePathFactory.account['/signin']()}>
                {'???????????? ?????????'}
            </AuthPageHeader>

            <div className="messageWrapper">
                <div className="messagse">
                    ????????? ??????????????? ???????????????.
                </div>
                <div className="message">
                    ?????? ???????????? ??? ??????????????? ????????? ????????? ????????? ?????????.
                </div>
            </div>

            <div className="formWrapper">
                <LabelrInputPassword
                    value={password}
                    onChange={onChangePassword}
                    onIsValid={onIsValidPassword}
                    placeholder="??? ??????????????? ????????? ?????????"
                    autofocus
                    fluid />

                <LabelrInputConfirm
                    value={passwordConfirm}
                    targetValue={password}
                    onChange={onChangePasswordConfirm}
                    onIsValid={onIsValidPasswordConfirm}
                    invalidMessage="??????????????? ???????????? ????????????."
                    placeholder="??? ??????????????? ?????? ?????? ????????? ?????????"
                    isEnableMasking
                    fluid />

                <LabelrButton
                    onClick={onClickSubmit}
                    isDisabled={!isValidInputValues}
                    fluid>
                    ??????
                </LabelrButton>
            </div>
        </StyledResetPasswordPageRoot>
    );
}

export default ResetPasswordPage;