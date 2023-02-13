// react
import {
    ReactElement,
} from 'react';
// layouts
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';

import { 
    consoleRouteMapper,
} from '@/router/routeMappers/consoleRouteMapper';

function AqcIndex() {
    const AqcPageComponent = consoleRouteMapper.aqc.PageComponent;
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
