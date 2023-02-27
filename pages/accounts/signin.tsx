// react
import {
    ReactElement,
} from 'react';
// page
import SigninPage from '@/components/pages/accountPages/SigninPage/SigninPage';
// layouts
import AccountsLayout from '@/layouts/uiLayouts/AccountsLayout/AccountsLayout';

function Signin() {
    return <SigninPage />;
}

Signin.getLayout = (page: ReactElement) => {
    return (
        <AccountsLayout>
            {page}
        </AccountsLayout>
    );
};

export default Signin;
