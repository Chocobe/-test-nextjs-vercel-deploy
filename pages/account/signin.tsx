// react
import {
    ReactElement,
} from 'react';
// page
import SigninPage from '@/components/pages/accountPages/SigninPage/SigninPage';
// layouts
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';
import AccountLayout from '@/layouts/uiLayouts/AccountLayout/AccountLayout';

function Signin() {
    return <SigninPage />;
}

Signin.getLayout = (page: ReactElement) => {
    return (
        <AccountLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountLayout>
    );
};

export default Signin;