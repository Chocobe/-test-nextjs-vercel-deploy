import rootPathMapper from './pathMappers/rootPathMapper';
import accountsPathMapper from './pathMappers/accountsPathMapper';
import consolePathMapper from './pathMappers/consolePathMapper';
import labelrUiDemoPathMapper from './pathMappers/labelrUiDemoPathMapper';

export const RoutePathFactory = {
    root: rootPathMapper,
    accounts: accountsPathMapper,
    console: consolePathMapper,
    ['labelr-ui-demo']: labelrUiDemoPathMapper,
} as const;
