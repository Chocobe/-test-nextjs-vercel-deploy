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
    // 비밀번호 변경
    '/resetPassword': () => '/resetPassword',
    // 이메일 인증
    '/verifyEmail': () => '/verifyEmail',
    // 이메일 인증 전송
    '/sendVerificationEmail': () => '/sendVerificationEmail',

    /** Labelr UI Demo pages */
    '/labelrUiDemo/[demoName]': (demoName: string) => `/labelrUiDemo/${demoName}`,
} as const;