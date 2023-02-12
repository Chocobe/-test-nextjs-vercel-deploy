// react
import { 
    ReactNode
} from 'react';

export const labelrSnackbarTypeMapper = {
    SKY: 'sky',
    SAFE: 'safe',
    DANGER: 'danger',
} as const;
export type TUseLabelrSnackbarType = typeof labelrSnackbarTypeMapper[keyof typeof labelrSnackbarTypeMapper];

export const labelrSnackbarPositionMapper = {
    TOP: 'top',
    BOTTOM: 'bottom',
} as const;
export type TUseLabelrSnackbarPosition = typeof labelrSnackbarPositionMapper[keyof typeof labelrSnackbarPositionMapper];

export type TUseLabelrSnackbarOptions = {
    type?: TUseLabelrSnackbarType
    position?: TUseLabelrSnackbarPosition;
    content?: ReactNode;
    duration?: number;
};

export type TRenderLabelrSnackbarParams = {
    type: TUseLabelrSnackbarType;
    content: ReactNode;
    duration?: number;
    close: () => void;
};
