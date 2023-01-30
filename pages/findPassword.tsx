// react
import {
    ReactElement,
} from 'react';
// page
import FindPasswordPage from '@/components/pages/authPages/FindPasswordPage/FindPasswordPage';
// layouts
import AuthLayout from '@/layouts/uiLayouts/AuthLayout/AuthLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function FindPassword() {
    return (
        <FindPasswordPage />
    );
}

FindPassword.getLayout = (page: ReactElement) => {
    return (
        <AuthLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AuthLayout>
    );
};

export default FindPassword;
