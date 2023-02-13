export const accountPageFooterTypeMapper = {
    SIGNIN: 'signin',
    SIGNUP: 'signup',
} as const;
export type TAccountPageFooterType = typeof accountPageFooterTypeMapper[keyof typeof accountPageFooterTypeMapper];
