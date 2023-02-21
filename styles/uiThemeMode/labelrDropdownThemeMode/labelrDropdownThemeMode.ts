import colors from '@/styles/colors';
import { 
    labelrDropdownStateMapper,
} from '@/components/ui/LabelrDropdown/labelrDropdownTypes';
import { 
    themeModeNameMapper,
} from '../themeModeNameMapper';

const light = {
    [labelrDropdownStateMapper.NORMAL]: {
        color: colors.black,
        placeholderColor: colors.gs[500],
        backgroundColor: colors.white,
        borderColor: colors.gs[300],
        iconColor: colors.black,
        iconBackgroundColor: colors.white,
        itemHoverBackgroundColor: colors.bs[100],
        currentValueItemBackgroundColor: colors.bs[50],
    },
    [labelrDropdownStateMapper.HOVER]: {
        color: colors.black,
        placeholderColor: colors.gs[500],
        backgroundColor: colors.white,
        borderColor: colors.brand[400],
        iconColor: colors.black,
        iconBackgroundColor: colors.white,
    },
    [labelrDropdownStateMapper.FOCUS]: {
        color: colors.black,
        placeholderColor: colors.gs[500],
        backgroundColor: colors.white,
        borderColor: colors.brand[400],
        iconColor: colors.black,
        iconBackgroundColor: colors.white,
    },
    [labelrDropdownStateMapper.ERROR]: {
        color: colors.black,
        placeholderColor: colors.gs[500],
        backgroundColor: colors.white,
        borderColor: colors.red[400],
        iconColor: colors.black,
        iconBackgroundColor: colors.white,
    },
    [labelrDropdownStateMapper.DISABLED]: {
        color: colors.gs[500],
        placeholderColor: colors.gs[500],
        backgroundColor: colors.gs[50],
        borderColor: colors.gs[300],
        iconColor: colors.gs[500],
        iconBackgroundColor: colors.gs[50],
    },
    [labelrDropdownStateMapper.READONLY]: {
        color: colors.black,
        placeholderColor: colors.gs[500],
        backgroundColor: colors.white,
        borderColor: colors.gs[300],
        iconColor: colors.black,
        iconBackgroundColor: colors.bs[50],
    },
} as const;

const dark = {
    [labelrDropdownStateMapper.NORMAL]: {
        color: colors.white,
        placeholderColor: colors.gs[600],
        backgroundColor: colors.black,
        borderColor: colors.gs[700],
        iconColor: colors.white,
        iconBackgroundColor: colors.black,
        itemHoverBackgroundColor: colors.bs[700],
        currentValueItemBackgroundColor: colors.bs[800],
    },
    [labelrDropdownStateMapper.HOVER]: {
        color: colors.white,
        placeholderColor: colors.gs[600],
        backgroundColor: colors.black,
        borderColor: colors.brand[400],
        iconColor: colors.white,
        iconBackgroundColor: colors.black,
    },
    [labelrDropdownStateMapper.FOCUS]: {
        color: colors.white,
        placeholderColor: colors.gs[600],
        backgroundColor: colors.black,
        borderColor: colors.brand[400],
        iconColor: colors.white,
        iconBackgroundColor: colors.black,
    },
    [labelrDropdownStateMapper.ERROR]: {
        color: colors.white,
        placeholderColor: colors.gs[600],
        backgroundColor: colors.black,
        borderColor: colors.red[400],
        iconColor: colors.white,
        iconBackgroundColor: colors.black,
    },
    [labelrDropdownStateMapper.DISABLED]: {
        color: colors.gs[600],
        placeholderColor: colors.gs[600],
        backgroundColor: colors.gs[900],
        borderColor: colors.gs[700],
        iconColor: colors.gs[600],
        iconBackgroundColor: colors.gs[900],
    },
    [labelrDropdownStateMapper.READONLY]: {
        color: colors.white,
        placeholderColor: colors.gs[600],
        backgroundColor: colors.black,
        borderColor: colors.gs[700],
        iconColor: colors.white,
        iconBackgroundColor: colors.bs[800],
    },
} as const;

const labelrDropdownThemeMode = {
    [themeModeNameMapper.LIGHT]: light,
    [themeModeNameMapper.DARK]: dark,
} as const;

export default labelrDropdownThemeMode;
export type TLabelrDropdownThemeMode = typeof labelrDropdownThemeMode;
