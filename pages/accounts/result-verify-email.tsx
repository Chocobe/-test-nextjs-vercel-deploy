// react
import {
    ReactElement,
} from 'react';
// page
import ResultVerifyEmailPage from '@/components/pages/accountPages/ResultVerifyEmailPage/ResultVerifyEmailPage';
// layouts
import AccountsLayout from '@/layouts/uiLayouts/AccountsLayout/AccountsLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function ResultVerifyEmail() {
    return (
        <ResultVerifyEmailPage />
    );
}

ResultVerifyEmail.getLayout = (page: ReactElement) => {
    return (
        <AccountsLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountsLayout>
    );
};

export default ResultVerifyEmail;
