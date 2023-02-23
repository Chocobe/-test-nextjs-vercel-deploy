// react
import {
    ReactElement,
} from 'react';
// page
import SigninPage from '@/components/pages/accountPages/SigninPage/SigninPage';
// layouts
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';
import AccountsLayout from '@/layouts/uiLayouts/AccountsLayout/AccountsLayout';

function Signin() {
    return <SigninPage />;
}

Signin.getLayout = (page: ReactElement) => {
    return (
        <AccountsLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountsLayout>
    );
};

export default Signin;