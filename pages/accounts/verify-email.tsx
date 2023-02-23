// react
import {
    ReactElement,
} from 'react';
// page
import VerifyEmailPage from '@/components/pages/accountPages/VerifyEmailPage/VerifyEmailPage';
// layouts
import AccountsLayout from '@/layouts/uiLayouts/AccountsLayout/AccountsLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function VerifyEmail() {
    return (
        <VerifyEmailPage />
    );
}

VerifyEmail.getLayout = (page: ReactElement) => {
    return (
        <AccountsLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountsLayout>
    );
};

export default VerifyEmail;
