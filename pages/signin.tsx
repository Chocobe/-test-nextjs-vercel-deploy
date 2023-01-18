// react
import {
    ReactElement,
} from 'react';
// page
import SigninPage from '@/components/pages/SigninPage/SigninPage';
// layouts
import SomeServiceLayout from '@/layouts/uiLayouts/SomeServiceLayout/SomeServiceLayout';
import NoneAuthRouteGuard from '@/layouts/routeGuardLayouts/NoneAuthRouteGuard';

function Signin() {
    return <SigninPage />;
}

Signin.getLayout = (page: ReactElement) => {
    return (
        <SomeServiceLayout>
            <NoneAuthRouteGuard>
                {page}
            </NoneAuthRouteGuard>
        </SomeServiceLayout>
    );
};

export default Signin;