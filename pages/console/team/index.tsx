// react
import { 
    ReactElement,
} from 'react';
// layout
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
// router
import { 
    RouteMapper,
} from '@/router';

function TeamIndex() {
    const TeamPageComponent = RouteMapper.console.team.PageComponent;
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
