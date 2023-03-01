import {
    consoleRouteMapper,
} from './routeMappers/consoleRouteMapper';
import {
    labelrUiDemoRouteMapper,
} from './routeMappers/labelrUiDemoRouteMapper';

export const RouteMapper = {
    console: consoleRouteMapper,
    ['labelr-ui-demo']: labelrUiDemoRouteMapper,
} as const;

export type TRouteMapperKey = keyof typeof RouteMapper;
