import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import { ReactElement } from 'react';

function SettingsIndex() {
    return (
        <div>
            <h1>LaunchWorkflow - Settings Index page</h1>
            <p>SettingsPage 컴포넌트 렌더링 하기</p>
        </div>
    );
}

SettingsIndex.getLayout = (page: ReactElement) => {
    return (
        <ConsoleLayout>
            <AuthRouteGuard>
                {page}
            </AuthRouteGuard>
        </ConsoleLayout>
    );
};

export default SettingsIndex;
