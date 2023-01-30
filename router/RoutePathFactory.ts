export const RoutePathFactory = {
    '/console': () => '/console',
    '/home': () => '/home',

    /** Auth pages */
    // 로그인
    '/signin': () => '/signin',
    // 회원가입
    '/signup': () => '/signup',
    // 비밀번호 찾기
    '/findPassword': () => '/findPassword',

    /** Labelr UI Demo pages */
    '/labelrUiDemo/[demoName]': (demoName: string) => `/labelrUiDemo/${demoName}`,
} as const;