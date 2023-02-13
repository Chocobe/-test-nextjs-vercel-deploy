// pages
import EwfPage from '@/components/pages/consolePages/EwfPages/EwfPage';
import AqcPage from '@/components/pages/consolePages/AqcPages/AqcPage';
import DatasetsPage from '@/components/pages/consolePages/DatasetsPages/DatasetsPage';
import TeamPage from '@/components/pages/consolePages/TeamPages/TeamPage';
import SettingsPage from '@/components/pages/consolePages/SettingsPages/SettingsPage';
// icons
import { 
    FiLayers,
    FiMonitor,
    FiDatabase,
    FiUsers,
    FiSettings,
} from '@icons';

import { RoutePathFactory } from '../RoutePathFactory';

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
