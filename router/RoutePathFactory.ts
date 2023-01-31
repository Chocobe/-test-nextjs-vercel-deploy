export const RoutePathFactory = {
    /** Root pages */
    root: createRootPathMapper(),

    /** Account pages */
    account: createAccountPathMapper(),

    /** Console pages */
    console: createConsolePathMapper(),

    /** Labelr UI Demo pages */
    labelrUiDemo: createLabelrUiDemoPathMapper(),
} as const;

function createRootPathMapper() {
    return {
        '/': () => '/',
    };
}

function createAccountPathMapper() {
    const BASE_PATH = '/account';

    return {
        // 로그인
        '/signin': () => `${BASE_PATH}/signin`,
        // 회원가입
        '/signup': () => `${BASE_PATH}/signup`,
        // 비밀번호 찾기
        '/find-password': () => `${BASE_PATH}/find-password`,
        // 비밀번호 변경
        '/reset-password': () => `${BASE_PATH}/reset-password`,
        // 이메일 인증
        '/verify-email': () => `${BASE_PATH}/verify-email`,
        // 이메일 인증 결과
        '/result-verify-email': () => `${BASE_PATH}/result-verify-email`,
    };
}

function createConsolePathMapper() {
    const BASE_PATH = '/console';

    return {
        // Console 메인
        '/': () => `${BASE_PATH}`,
    };
}

function createLabelrUiDemoPathMapper() {
    const BASE_PATH = '/labelr-ui-demo';

    return {
        '/[demoName]': (demoName: string) => `${BASE_PATH}/${demoName}`,
    };
}
