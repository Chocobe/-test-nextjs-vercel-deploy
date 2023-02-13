import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
import { consoleRouteMapper } from '@/router/routeMappers/consoleRouteMapper';
import { ReactElement } from 'react';

function TeamIndex() {
    const TeamPageComponent = consoleRouteMapper.team.PageComponent;
    return <TeamPageComponent />;
}

TeamIndex.getLayout = (page: ReactElement) => {
    return (
        <ConsoleLayout>
            <AuthRouteGuard>
                {page}
            </AuthRouteGuard>
        </ConsoleLayout>
    );
};

export default TeamIndex;
