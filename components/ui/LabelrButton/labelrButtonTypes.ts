export const labelrButtonElementStateMapper = {
    NORMAL: 'normal',
    HOVER: 'hover',
    FOCUS: 'focus',
    ACTIVE: 'active',
    DISABLED: 'disabled',
} as const;
export type TLabelrButtonElementState = typeof labelrButtonElementStateMapper[keyof typeof labelrButtonElementStateMapper];

export const labelrButtonVariantMapper = {
    BRAND: 'brand',
    BLUE: 'blue',
    INDIGO: 'indigo',
    BORDER: 'border',
    BORDER_NON: 'borderNon',
    RED: 'red',
    ERROR: 'error',
    GHOST: 'ghost',
} as const;
export type TLabelrButtonVariant = typeof labelrButtonVariantMapper[keyof typeof labelrButtonVariantMapper];

export const labelrButtonSizeMapper = {
    SMALL: 'small',
    REGULAR: 'regular',
    LARGE: 'large',
    HUGE: 'huge',
} as const;
export type TLabelrButtonSize = typeof labelrButtonSizeMapper[keyof typeof labelrButtonSizeMapper];
