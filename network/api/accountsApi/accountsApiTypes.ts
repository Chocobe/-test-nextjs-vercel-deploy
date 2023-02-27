//
// signin
//
export type TSigninApiPayload = {
    email: string;
    password: string;
};
export type TSigninApiResponse = {
    accessToken: string;
    refreshToken: string;
};

//
// signup
//
export type TSignupApiPayload = {
    email: string;
    password: string;
    password2: string;
};
export type TSignupApiResponse = {
    detail: string;
};

//
// confirm-signup
//
export type TConfirmSignupPayload = {
    email: string;
    code: string;
};
export type TConfirmSignupResponse = {
    detail: string;
};

//
// reset-password
//
export type TResetPasswordApiPayload = {
    email: string;
};
export type TResetPasswordApiResponse = {
    deliveryEmail: string;
    email: string;
};

//
// confirm-reset-password
//
export type TConfirmResetPasswordApiPayload = {
    code: string;
    email: string;
    password: string;
    password2: string;
};
export type TConfirmResetPasswordApiResponse = {
    detail: string;
};
