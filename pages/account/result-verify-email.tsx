// react
import {
    ReactElement,
} from 'react';
// page
import ResultVerifyEmailPage from '@/components/pages/accountPages/ResultVerifyEmailPage/ResultVerifyEmailPage';
// layouts
import AccountLayout from '@/layouts/uiLayouts/AccountLayout/AccountLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function ResultVerifyEmail() {
    return (
        <ResultVerifyEmailPage />
    );
}

ResultVerifyEmail.getLayout = (page: ReactElement) => {
    return (
        <AccountLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountLayout>
    );
};

export default ResultVerifyEmail;
