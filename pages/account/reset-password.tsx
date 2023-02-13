// react
import {
    ReactElement,
} from 'react';
// page
import ResetPasswordPage from '@/components/pages/accountPages/ResetPasswordPage/ResetPasswordPage';
// layouts
import AccountLayout from '@/layouts/uiLayouts/AccountLayout/AccountLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';


function ResetPassword() {
    // TODO: API Slice 에서 Email 인증 결과가 있는지 검사 하기
    // TODO: => 없으면, Signin 페이지로 이동하기

    return (
        <ResetPasswordPage />
    );
}

ResetPassword.getLayout = (page: ReactElement) => {
    return (
        <AccountLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountLayout>
    );
};

export default ResetPassword;
