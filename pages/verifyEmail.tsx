// react
import {
    ReactElement,
} from 'react';
// page
import VerifyEmailPage from '@/components/pages/authPages/VerifyEmailPage/VerifyEmailPage';
// layouts
import AuthLayout from '@/layouts/uiLayouts/AuthLayout/AuthLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function VerifyEmail() {
    return (
        <VerifyEmailPage />
    );
}

VerifyEmail.getLayout = (page: ReactElement) => {
    return (
        <AuthLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AuthLayout>
    );
};

export default VerifyEmail;
