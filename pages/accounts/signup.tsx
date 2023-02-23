// react
import {
    ReactElement,
} from 'react';
// UI components
import AccountsLayout from '@/layouts/uiLayouts/AccountsLayout/AccountsLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';
import SignupPage from '@/components/pages/accountPages/SignupPage/SignupPage';

function Signup() {
    return (
        <SignupPage />
    );
}

Signup.getLayout = (page: ReactElement) => {
    return (
        <AccountsLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountsLayout>
    );
};

export default Signup;
