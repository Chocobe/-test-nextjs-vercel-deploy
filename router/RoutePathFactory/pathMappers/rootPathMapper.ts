const rootPaths = (function() {
    const BASE_PATH = '/';

    return {
        '/': () => `${BASE_PATH}`,
    };
}());

export default rootPaths;
