const accountsApiUrlFactory = (function() {
    // FIXME: Staging 서버 배포 후, 주석 해제
    // const BASE_URL = '/accounts';

    // FIXME: Staging 서버 배포 후, 삭제
    const BASE_URL = '';

    return {
        signinUrl() {
            // FIXME: Staging 서버 배포 후, 주석 해제
            // return `${BASE_URL}/signin/`;

            // FIXME: Staging 서버 배포 후, 삭제
            return `${BASE_URL}/posts/`;
        },

        signupUrl() {
            return `${BASE_URL}/signup/`;
        },

        resetPasswordUrl() {
            return `${BASE_URL}/reset-password/`;
        },

        confirmResetPasswordUrl() {
            return `${BASE_URL}/confirm-reset-password/`;
        },
    };
}());

export default accountsApiUrlFactory;
