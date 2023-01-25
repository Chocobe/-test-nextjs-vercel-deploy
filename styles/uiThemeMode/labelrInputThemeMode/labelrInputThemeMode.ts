import colors from '../../colors';
// import labelrInputElementState from './labelrInputElementState';
import {
    labelrInputElementStateMapper,
} from '@/components/ui/LabelrInput/labelrInputTypes';
// import themeModeNameMapper from '../themeModeNameMapper';
import {
    themeModeNameMapper,
} from '@/styles/uiThemeMode/themeModeNameMapper';

const light = {
    [labelrInputElementStateMapper.NORMAL]: {
        color: colors.black,
        placholderColor: colors.gs['50'],
        backgroundColor: colors.white,
        borderColor: colors.gs['300'],
        iconColor: colors.black,
    },
    [labelrInputElementStateMapper.HOVER]: {
        color: colors.black,
        placholderColor: colors.gs['50'],
        backgroundColor: colors.white,
        borderColor: colors.blue['500'],
        iconColor: colors.black,
    },
    [labelrInputElementStateMapper.FOCUS]: {
        color: colors.black,
        placholderColor: colors.gs['50'],
        backgroundColor: colors.white,
        borderColor: colors.blue['500'],
        iconColor: colors.black,
    },
    [labelrInputElementStateMapper.ERROR]: {
        color: colors.black,
        placholderColor: colors.gs['50'],
        backgroundColor: colors.white,
        borderColor: colors.red['500'],
        iconColor: colors.black,
    },
    [labelrInputElementStateMapper.DISABLED]: {
        color: colors.gs['500'],
        placholderColor: colors.gs['500'],
        backgroundColor: colors.gs['200'],
        borderColor: colors.gs['300'],
        iconColor: colors.gs['600'],
    },
    [labelrInputElementStateMapper.READONLY]: {
        color: colors.black,
        placholderColor: colors.gs['50'],
        backgroundColor: colors.white,
        borderColor: colors.gs['300'],
        iconColor: colors.black,
    },
};

const dark = {
    [labelrInputElementStateMapper.NORMAL]: {
        color: colors.white,
        placholderColor: colors.gs['600'],
        backgroundColor: colors.black,
        borderColor: colors.gs['700'],
        iconColor: colors.white,
    },
    [labelrInputElementStateMapper.HOVER]: {
        color: colors.white,
        placholderColor: colors.gs['600'],
        backgroundColor: colors.black,
        borderColor: colors.blue['500'],
        iconColor: colors.white,
    },
    [labelrInputElementStateMapper.FOCUS]: {
        color: colors.white,
        placholderColor: colors.gs['600'],
        backgroundColor: colors.black,
        borderColor: colors.blue['500'],
        iconColor: colors.white,
    },
    [labelrInputElementStateMapper.ERROR]: {
        color: colors.white,
        placholderColor: colors.gs['600'],
        backgroundColor: colors.black,
        borderColor: colors.red['500'],
        iconColor: colors.white,
    },
    [labelrInputElementStateMapper.DISABLED]: {
        color: colors.gs['600'],
        placholderColor: colors.gs['600'],
        backgroundColor: colors.gs['900'],
        borderColor: colors.gs['700'],
        iconColor: colors.gs['600'],
    },
    [labelrInputElementStateMapper.READONLY]: {
        color: colors.white,
        placholderColor: colors.gs['600'],
        backgroundColor: colors.black,
        borderColor: colors.gs['700'],
        iconColor: colors.white,
    },
};

const labelrInputThemeMode = {
    [themeModeNameMapper.LIGHT]: light,
    [themeModeNameMapper.DARK]: dark,
} as const;

export default labelrInputThemeMode;
export type TLabelrInputThemeMode = typeof labelrInputThemeMode;