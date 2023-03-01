// react
import {
    ReactElement,
} from 'react';
// layouts
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
// router
import { 
    RouteMapper,
} from '@/router';

function AqcIndex() {
    const AqcPageComponent = RouteMapper.console.aqc.PageComponent;
    return <AqcPageComponent />;
}

AqcIndex.getLayout = (page: ReactElement) => {
    return (
        <ConsoleLayout>
            <AuthRouteGuard>
                {page}
            </AuthRouteGuard>
        </ConsoleLayout>
    );
};

export default AqcIndex;
