import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
import { consoleRouteMapper } from '@/router/routeMappers/consoleRouteMapper';
import { ReactElement } from 'react';

function SettingsIndex() {
    const SettingsPageComponent = consoleRouteMapper.settings.PageComponent;
    return <SettingsPageComponent />;
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
