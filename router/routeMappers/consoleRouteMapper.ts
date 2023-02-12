import EwfPage from '@/components/pages/consolePages/EwfPages/EwfPage';

import { RoutePathFactory } from '../RoutePathFactory';

export const consoleRouteMapper = {
    ewf: {
        name: 'EWF',
        path: RoutePathFactory.console['/ewf'](),
        PageComponent: EwfPage,
    },
} as const;

export type TConsoleRouteMapperKey = keyof typeof consoleRouteMapper;
