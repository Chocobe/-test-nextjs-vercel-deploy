// react
import {
    ReactElement,
} from 'react';
// page
import FindPasswordPage from '@/components/pages/accountPages/FindPasswordPage/FindPasswordPage';
// layouts
import AccountsLayout from '@/layouts/uiLayouts/AccountsLayout/AccountsLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function FindPassword() {
    return (
        <FindPasswordPage />
    );
}

FindPassword.getLayout = (page: ReactElement) => {
    return (
        <AccountsLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountsLayout>
    );
};

export default FindPassword;
