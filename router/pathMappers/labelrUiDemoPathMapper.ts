const labelrUiDemoPathMapper = (function() {
    const BASE_PATH = '/labelr-ui-demo';

    return {
        '/[demoName]': (demoName: string) => `${BASE_PATH}/${demoName}`,
    };
}());

export default labelrUiDemoPathMapper;
