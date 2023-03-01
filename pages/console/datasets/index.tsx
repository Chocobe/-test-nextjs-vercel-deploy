// react
import { 
    ReactElement
} from 'react';
// layouts
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
// router
import { 
    RouteMapper,
} from '@/router';

function DatasetsIndex() {
    const DatasetsPageComponent = RouteMapper.console.datasets.PageComponent;
    return <DatasetsPageComponent />;
}

DatasetsIndex.getLayout = (page: ReactElement) => {
    return (
        <ConsoleLayout>
            <AuthRouteGuard>
                {page}
            </AuthRouteGuard>
        </ConsoleLayout>
    );
};

export default DatasetsIndex;
