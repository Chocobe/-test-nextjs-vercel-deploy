export const labelrPopoverPlacementMapper = {
    TOP: 'top',
    BOTTOM: 'bottom',
    LEFT: 'left',
    RIGHT: 'right',
} as const;
export type TLabelrPopoverPlacement = typeof labelrPopoverPlacementMapper[keyof typeof labelrPopoverPlacementMapper];
