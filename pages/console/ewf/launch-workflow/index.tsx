import ConsoleLayout from '@/layouts/uiLayouts/ConsoleLayout/ConsoleLayout';
import AuthRouteGuard from '@/layouts/routeGuardLayouts/AuthRouteGuard';
import { ReactElement } from 'react';

function LaunchWorkflowIndex() {
    // FIXME: consoleRouteMapper 에서 LaunchWorkflowPage 컴포넌트 각져오기
    return (
        <div>
            <h1>LaunchWorkflow Index page</h1>
            <p>LaunchWorkflowPage 컴포넌트 렌더링 하기</p>
        </div>
    );
}

LaunchWorkflowIndex.getLayout = (page: ReactElement) => {
    return (
        <ConsoleLayout>
            <AuthRouteGuard>
                {page}
            </AuthRouteGuard>
        </ConsoleLayout>
    );
};

export default LaunchWorkflowIndex;
