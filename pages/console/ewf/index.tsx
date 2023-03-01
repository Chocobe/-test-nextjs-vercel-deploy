// react
import { 
    ReactElement
} from 'react';
// layouts
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
// router
import {
    // consoleRouteMapper,
    RouteMapper,
} from '@/router';

function EwfIndex() {
    const PageComponent = RouteMapper.console.ewf.PageComponent;

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
