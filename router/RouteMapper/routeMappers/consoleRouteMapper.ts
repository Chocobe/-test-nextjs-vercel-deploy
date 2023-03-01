// EWF pages
import EwfPage from '@/components/pages/consolePages/EwfPages/EwfPage';
import LaunchWorkflowPage from '@/components/pages/consolePages/EwfPages/LaunchWorkflowPage/LaunchWorkflowPage';
// AQC pages
import AqcPage from '@/components/pages/consolePages/AqcPages/AqcPage';
// Datasets pages
import DatasetsPage from '@/components/pages/consolePages/DatasetsPages/DatasetsPage';
// Team pages
import TeamPage from '@/components/pages/consolePages/TeamPages/TeamPage';
// Settings pages
import SettingsPage from '@/components/pages/consolePages/SettingsPages/SettingsPage';

// icons
import { 
    FiLayers,
    FiMonitor,
    FiDatabase,
    FiUsers,
    FiSettings,
} from '@icons';
// router
import { 
    RoutePathFactory,
} from '../../RoutePathFactory/RoutePathFactory';

export const consoleRouteMapper = {
    ewf: {
        name: 'EWF',
        path: RoutePathFactory.console['/ewf'](),
        PageComponent: EwfPage,
        NavIconComponent: FiLayers,
        childrenMapper: {
            'launch-workflow': {
                name: 'Launch Workflow',
                path: RoutePathFactory.console['/ewf/launch-workflow'](),
                PageComponent: LaunchWorkflowPage,
            },
        },
    },
    aqc: {
        name: 'AQC',
        path: RoutePathFactory.console['/aqc'](),
        PageComponent: AqcPage,
        NavIconComponent: FiMonitor,
        childrenMapper: {
            //
        },
    },
    datasets: {
        name: 'Datasets',
        path: RoutePathFactory.console['/datasets'](),
        PageComponent: DatasetsPage,
        NavIconComponent: FiDatabase,
        childrenMapper: {
            //
        },
    },
    team: {
        name: 'Team',
        path: RoutePathFactory.console['/team'](),
        PageComponent: TeamPage,
        NavIconComponent: FiUsers,
        childrenMapper: {
            //
        },
    },
    settings: {
        name: 'Settings',
        path: RoutePathFactory.console['/settings'](),
        PageComponent: SettingsPage,
        NavIconComponent: FiSettings,
        childrenMapper: {
            //
        },
    },
} as const;

export type TConsoleRouteMapperKey = keyof typeof consoleRouteMapper;
