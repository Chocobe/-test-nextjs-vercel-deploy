// react
import { 
    ReactElement, 
} from 'react';
// router
import { 
    RouteMapper,
} from '@/router';
// layout
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';

function SettingsIndex() {
    const SettingsPageComponent = RouteMapper.console.settings.PageComponent;
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
