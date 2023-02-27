const accountsApiUrlFactory = (function() {
    const BASE_URL = '/accounts';

    return {
        signinUrl() {
            return `${BASE_URL}/signin/`;
        },

        signupUrl() {
            return `${BASE_URL}/signup/`;
        },

        confirmSignupUrl() {
            return `${BASE_URL}/confirm-signup/`;
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
