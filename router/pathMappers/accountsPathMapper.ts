const accountsPathMapper = (function() {
    const BASE_PATH = '/accounts';

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
        // 이메일 인증 재요청
        '/request-verify-email': () => `${BASE_PATH}/request-verify-email`,
    };
}());

export default accountsPathMapper;
