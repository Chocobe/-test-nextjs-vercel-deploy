import { ReactNode } from 'react';

export const labelrDropdownStateMapper = {
    NORMAL: 'normal',
    HOVER: 'hover',
    FOCUS: 'focus',
    ERROR: 'error',
    DISABLED: 'disabled',
    READONLY: 'readonly',
} as const;
export type TLabelrDropdownState = typeof labelrDropdownStateMapper[keyof typeof labelrDropdownStateMapper];

export const labelrDropdownSizeMapper = {
    SMALL: 'small',
    REGULAR: 'regular',
    LARGE: 'large',
    HUGE: 'huge',
} as const;
export type TLabelrDropdownSize = typeof labelrDropdownSizeMapper[keyof typeof labelrDropdownSizeMapper];

export type TLabelrDropdownItem<T> = {
    value: T;
    text: ReactNode;
};
