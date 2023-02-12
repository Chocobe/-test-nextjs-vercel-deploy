import root from './pathMappers/rootPathMapper';
import account from './pathMappers/accountPathMapper';

export const RoutePathFactory = {
    root,
    account,

    /** Console pages */
    console: createConsolePathMapper(),

    /** Labelr UI Demo pages */
    labelrUiDemo: createLabelrUiDemoPathMapper(),
} as const;

function createConsolePathMapper() {
    const BASE_PATH = '/console';

    return {
        // Console 메인
        '/': () => `${BASE_PATH}`,
        // EWF (elastic workflow)
        '/ewf': () => `${BASE_PATH}/ewf`,
        // AQC (addvanced quality control)
        '/aqc': () => `${BASE_PATH}/aqc`,
        // datasets
        '/datasets': () => `${BASE_PATH}/datasets`,
        // team
        '/team': () => `${BASE_PATH}/team`,
        // settings
        '/settings': () => `${BASE_PATH}/settings`,
    };
}

function createLabelrUiDemoPathMapper() {
    const BASE_PATH = '/labelr-ui-demo';

    return {
        '/[demoName]': (demoName: string) => `${BASE_PATH}/${demoName}`,
    };
}
