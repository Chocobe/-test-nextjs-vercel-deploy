// react
import {
    PropsWithChildren,
} from 'react';
// chakra-ui
import { 
    Tooltip, 
} from '@chakra-ui/react';
import {
    useTheme,
} from 'styled-components';
// type
import { 
    labelrPopoverPlacementMapper,
    TLabelrPopoverPlacement,
} from './labelrPopoverTypes';

export type TLabelrPopoverProps = PropsWithChildren<{
    padding?: string;
    placement?: TLabelrPopoverPlacement;
    gutter?: number;
    label: string;
    color?: string;
    fontSize?: string;
    lineHeight?: string;
    fontWeight?: number;
    backgroundColor?: string;
    borderRadius?: string;
}>;

function LabelrPopover(props: TLabelrPopoverProps) {
    // hook
    const theme = useTheme();

    const {
        padding,
        placement = labelrPopoverPlacementMapper.TOP,
        gutter = 8,
        label,
        color = theme.colors.white,
        fontSize = '16px',
        lineHeight = 'normal',
        fontWeight = 500,
        backgroundColor = theme.colors.brand[500],
        borderRadius = '4px',
        children,
    } = props;

    return (
        <Tooltip 
            padding={padding}
            placement={placement}
            gutter={gutter}
            label={label} 
            color={color}
            fontSize={fontSize}
            lineHeight={lineHeight}
            fontWeight={fontWeight}
            backgroundColor={backgroundColor}
            borderRadius={borderRadius}>
            {children}
        </Tooltip>
    );
}

export default LabelrPopover;
