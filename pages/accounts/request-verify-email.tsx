// react
import {
    ReactElement,
} from 'react';
// page
import RequestVerifyEmailPage from '@/components/pages/accountPages/RequestVerifyEmailPage/RequestVerifyEmailPage';
// layouts
import AccountsLayout from '@/layouts/uiLayouts/AccountsLayout/AccountsLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function RequestVerifyEmail() {
    return (
        <RequestVerifyEmailPage />
    );
}

RequestVerifyEmail.getLayout = (page: ReactElement) => {
    return (
        <AccountsLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountsLayout>
    );
};

export default RequestVerifyEmail;
