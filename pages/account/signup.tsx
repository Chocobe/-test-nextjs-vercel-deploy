// react
import {
    ReactElement,
} from 'react';
// UI components
import AuthLayout from '@/layouts/uiLayouts/AuthLayout/AuthLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';
import SignupPage from '@/components/pages/accountPages/SignupPage/SignupPage';

function Signup() {
    return (
        <SignupPage />
    );
}

Signup.getLayout = (page: ReactElement) => {
    return (
        <AuthLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AuthLayout>
    );
};

export default Signup;
