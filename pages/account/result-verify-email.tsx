// react
import {
    ReactElement,
} from 'react';
// page
import ResultVerifyEmailPage from '@/components/pages/accountPages/ResultVerifyEmailPage/ResultVerifyEmailPage';
// layouts
import AuthLayout from '@/layouts/uiLayouts/AuthLayout/AuthLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function ResultVerifyEmail() {
    return (
        <ResultVerifyEmailPage />
    );
}

ResultVerifyEmail.getLayout = (page: ReactElement) => {
    return (
        <AuthLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AuthLayout>
    );
};

export default ResultVerifyEmail;
