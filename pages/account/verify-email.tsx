// react
import {
    ReactElement,
} from 'react';
// page
import VerifyEmailPage from '@/components/pages/accountPages/VerifyEmailPage/VerifyEmailPage';
// layouts
import AccountLayout from '@/layouts/uiLayouts/AccountLayout/AccountLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function VerifyEmail() {
    return (
        <VerifyEmailPage />
    );
}

VerifyEmail.getLayout = (page: ReactElement) => {
    return (
        <AccountLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountLayout>
    );
};

export default VerifyEmail;
