export const authPageFooterTypeMapper = {
    SIGNIN: 'signin',
    SIGNUP: 'signup',
} as const;
export type TAuthPageFooterType = typeof authPageFooterTypeMapper[keyof typeof authPageFooterTypeMapper];
