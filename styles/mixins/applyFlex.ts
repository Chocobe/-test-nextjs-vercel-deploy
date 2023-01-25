const alignItemsValueMapper = {
    NORMAL: 'normal',
    CENTER: 'center',
    FLEX_START: 'flex-start',
    FLEX_END: 'flex-end',
    STRETCH: 'stretch',
} as const;

const justifyContentValueMapper = {
    ...alignItemsValueMapper,
    SPACE_BETWEEN: 'space-between',
    SPACE_AROUND: 'space-around',
    SPACE_EVENLY: 'space-evenly',
} as const;

export type TApplyFlexParams = {
    display?: 'flex' | 'inline-flex';
    gap?: string;
    justifyContent?: typeof justifyContentValueMapper[keyof typeof justifyContentValueMapper];
    alignItems?: typeof alignItemsValueMapper[keyof typeof alignItemsValueMapper];
    flexWrap?: 'wrap' | 'nowrap';
    flexDirection?: 'row' | 'column';
};

const applyFlex = (({
    display = 'flex',
    gap = '0',
    justifyContent = 'flex-start',
    alignItems = 'stretch',
    flexWrap = 'wrap',
    flexDirection = 'row',
}: TApplyFlexParams = {}) => `
    display: ${display};
    gap: ${gap};
    justify-content: ${justifyContent};
    align-items: ${alignItems};
    flex-wrap: ${flexWrap};
    flex-direction: ${flexDirection};
`);

export default applyFlex;
export type TApplyFlex = typeof applyFlex;