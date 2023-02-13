// react
import { 
    ReactElement
} from 'react';
// layouts
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
// UI components
import {
    consoleRouteMapper,
} from '@/router/routeMappers/consoleRouteMapper';

function EwfIndex() {
    const PageComponent = consoleRouteMapper.ewf.PageComponent;

    return <PageComponent />;
}

EwfIndex.getLayout = (page: ReactElement) => {
    return (
        <ConsoleLayout>
            <AuthRouteGuard>
                {page}
            </AuthRouteGuard>
        </ConsoleLayout>
    );
};

export default EwfIndex;
