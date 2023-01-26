export const RoutePathFactory = {
    '/console': () => '/console',
    '/home': () => '/home',

    /** Auth pages */
    // 로그인 페이지
    '/signin': () => '/signin',
    // 비밀번호 찾기 페이지
    '/findPassword': () => '/findPassword',

    /** Labelr UI Demo pages */
    '/labelrUiDemo/[demoName]': (demoName: string) => `/labelrUiDemo/${demoName}`,
} as const;