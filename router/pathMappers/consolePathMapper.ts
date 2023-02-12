const consolePathMapper = (function() {
    const BASE_PATH = '/console';

    return {
        '/': () => `${BASE_PATH}`,

        // ewf
        '/ewf': () => `${BASE_PATH}/ewf`,
        '/ewf/launch-workflow': () => `${BASE_PATH}/ewf/launch-workflow`,
        '/ewf/launch-workflow/settings': () => `${BASE_PATH}/ewf/launch-workflow/settings`,

        // aqc (Advanced Quality Control)
        '/aqc': () => `${BASE_PATH}/aqc`,

        // datasets
        '/datasets': () => `${BASE_PATH}/datasets`,

        // team
        '/team': () => `${BASE_PATH}/team`,

        // settings
        '/settings': () => `${BASE_PATH}/settings`,
    };
}());

export default consolePathMapper;
