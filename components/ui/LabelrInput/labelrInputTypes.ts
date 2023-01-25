export const labelrInputTypeMapper = {
    TEXT: 'text',
    EMAIL: 'email',
    PASSWORD: 'password',
    // address
    // tel
    // number
} as const;
export type TLabelrInputType = typeof labelrInputTypeMapper[keyof typeof labelrInputTypeMapper];

export const labelrInputElementStateMapper = {
    NORMAL: 'normal',
    HOVER: 'hover',
    FOCUS: 'focus',
    ERROR: 'error',
    DISABLED: 'disabled',
    READONLY: 'readonly',
} as const;
export type TLabelrInputElementState = typeof labelrInputElementStateMapper[keyof typeof labelrInputElementStateMapper];

export const labelrInputSizeMapper = {
    SMALL: 'small',
    REGULAR: 'regular',
    LARGE: 'large',
} as const;
export type TLabelrInputSize = typeof labelrInputSizeMapper[keyof typeof labelrInputSizeMapper];
