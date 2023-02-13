// react
import {
    ReactElement,
} from 'react';
// UI components
import AccountLayout from '@/layouts/uiLayouts/AccountLayout/AccountLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';
import SignupPage from '@/components/pages/accountPages/SignupPage/SignupPage';

function Signup() {
    return (
        <SignupPage />
    );
}

Signup.getLayout = (page: ReactElement) => {
    return (
        <AccountLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountLayout>
    );
};

export default Signup;
