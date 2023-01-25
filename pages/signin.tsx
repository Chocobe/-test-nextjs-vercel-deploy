// react
import {
    ReactElement,
} from 'react';
// page
import SigninPage from '@/components/pages/authPages/SigninPage/SigninPage';
// layouts
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';
import AuthLayout from '@/layouts/uiLayouts/AuthLayout/AuthLayout';

function Signin() {
    return <SigninPage />;
}

Signin.getLayout = (page: ReactElement) => {
    return (
        <AuthLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AuthLayout>
    );
};

export default Signin;