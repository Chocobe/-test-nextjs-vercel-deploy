import rootPathMapper from './pathMappers/rootPathMapper';
import accountPathMapper from './pathMappers/accountPathMapper';
import consolePathMapper from './pathMappers/consolePathMapper';
import labelrUiDemoPathMapper from './pathMappers/labelrUiDemoPathMapper';

export const RoutePathFactory = {
    root: rootPathMapper,
    account: accountPathMapper,
    console: consolePathMapper,
    labelrUiDemo: labelrUiDemoPathMapper,
} as const;
