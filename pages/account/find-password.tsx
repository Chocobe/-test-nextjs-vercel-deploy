// react
import {
    ReactElement,
} from 'react';
// page
import FindPasswordPage from '@/components/pages/accountPages/FindPasswordPage/FindPasswordPage';
// layouts
import AccountLayout from '@/layouts/uiLayouts/AccountLayout/AccountLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function FindPassword() {
    return (
        <FindPasswordPage />
    );
}

FindPassword.getLayout = (page: ReactElement) => {
    return (
        <AccountLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </AccountLayout>
    );
};

export default FindPassword;
