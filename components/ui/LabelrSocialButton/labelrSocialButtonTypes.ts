export const labelrSocialButtonTypeMapper = {
    GOOGLE: 'google',
    APPLE: 'apple',
} as const;
export type TLabelrSocialButtonType = typeof labelrSocialButtonTypeMapper[keyof typeof labelrSocialButtonTypeMapper];
