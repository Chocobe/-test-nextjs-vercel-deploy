import colors from '../../colors';
import {
    labelrButtonVariantMapper,
    labelrButtonElementStateMapper,
} from '@/components/ui/LabelrButton/labelrButtonTypes';
import {
    themeModeNameMapper,
} from '../themeModeNameMapper';

const light = {
    // variant: Brand
    [labelrButtonVariantMapper.BRAND]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[500],
            border: `1px solid ${colors.brand[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[400],
            border: `1px solid ${colors.brand[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[400],
            border: `1px solid ${colors.brand[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[500],
            border: `1px solid ${colors.brand[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.brand[300],
            iconColor: colors.brand[300],
            backgroundColor: colors.brand[50],
            border: `1px solid ${colors.brand[50]}`,
        },
    },

    // variant: Blue
    [labelrButtonVariantMapper.BLUE]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[500],
            border: `1px solid ${colors.blue[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[400],
            border: `1px solid ${colors.blue[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[400],
            border: `1px solid ${colors.blue[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[500],
            border: `1px solid ${colors.blue[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[50],
            border: `1px solid ${colors.blue[50]}`,
        },
    },

    // variant: Indigo
    [labelrButtonVariantMapper.INDIGO]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[500],
            border: `1px solid ${colors.indigo[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[400],
            border: `1px solid ${colors.indigo[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[400],
            border: `1px solid ${colors.indigo[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[500],
            border: `1px solid ${colors.indigo[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.indigo[300],
            iconColor: colors.indigo[300],
            backgroundColor: colors.indigo[50],
            border: `1px solid ${colors.indigo[50]}`,
        },
    },

    // variant: Border
    [labelrButtonVariantMapper.BORDER]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.white,
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.white,
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.gs[500],
            iconColor: colors.gs[500],
            backgroundColor: colors.gs[200],
            border: `1px solid ${colors.gs[300]}`,
        },
    },

    // variant: Border Non
    [labelrButtonVariantMapper.BORDER_NON]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.white,
            border: `1px solid ${colors.white}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.bs[50]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.bs[50]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[200],
            border: `1px solid ${colors.bs[200]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.gs[500],
            iconColor: colors.gs[500],
            backgroundColor: colors.gs[200],
            border: `1px solid ${colors.gs[200]}`,
        },
    },

    // variant: Red
    [labelrButtonVariantMapper.RED]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.red[300],
            iconColor: colors.red[300],
            backgroundColor: colors.red[50],
            border: `1px solid ${colors.red[50]}`,
        },
    },

    // variant: Error
    [labelrButtonVariantMapper.ERROR]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.red[300],
            iconColor: colors.red[300],
            backgroundColor: colors.red[50],
            border: `1px solid ${colors.red[50]}`,
        },
    },

    // variant: Ghost
    [labelrButtonVariantMapper.GHOST]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.bs[900],
            border: `2px solid ${colors.white}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: '#ffffff7f',
            iconColor: '#ffffff7f',
            backgroundColor: colors.bs[900],
            border: `2px solid #ffffff7f`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: '#ffffff7f',
            iconColor: '#ffffff7f',
            backgroundColor: colors.bs[900],
            border: `2px solid #ffffff7f`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.bs[900],
            border: `2px solid ${colors.white}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.gs[500],
            iconColor: colors.gs[500],
            backgroundColor: colors.bs[900],
            border: `2px solid ${colors.gs[500]}`,
        },
    },
};

const dark = {
    // variant: Brand
    [labelrButtonVariantMapper.BRAND]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[500],
            border: `1px solid ${colors.brand[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[400],
            border: `1px solid ${colors.brand[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[400],
            border: `1px solid ${colors.brand[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.brand[500],
            border: `1px solid ${colors.brand[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.brand[300],
            iconColor: colors.brand[300],
            backgroundColor: colors.brand[50],
            border: `1px solid ${colors.brand[50]}`,
        },
    },

    // variant: Blue
    [labelrButtonVariantMapper.BLUE]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[500],
            border: `1px solid ${colors.blue[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[400],
            border: `1px solid ${colors.blue[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[400],
            border: `1px solid ${colors.blue[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[500],
            border: `1px solid ${colors.blue[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.blue[50],
            border: `1px solid ${colors.blue[50]}`,
        },
    },

    // variant: Indigo
    [labelrButtonVariantMapper.INDIGO]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[500],
            border: `1px solid ${colors.indigo[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[400],
            border: `1px solid ${colors.indigo[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[400],
            border: `1px solid ${colors.indigo[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.indigo[500],
            border: `1px solid ${colors.indigo[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.indigo[300],
            iconColor: colors.indigo[300],
            backgroundColor: colors.indigo[50],
            border: `1px solid ${colors.indigo[50]}`,
        },
    },

    // variant: Border
    [labelrButtonVariantMapper.BORDER]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.white,
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.white,
            border: `1px solid ${colors.gs[300]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.gs[500],
            iconColor: colors.gs[500],
            backgroundColor: colors.gs[200],
            border: `1px solid ${colors.gs[300]}`,
        },
    },

    // variant: Border Non
    [labelrButtonVariantMapper.BORDER_NON]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.white,
            border: `1px solid ${colors.white}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.bs[50]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[100],
            border: `1px solid ${colors.bs[50]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.black,
            iconColor: colors.black,
            backgroundColor: colors.bs[200],
            border: `1px solid ${colors.bs[200]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.gs[500],
            iconColor: colors.gs[500],
            backgroundColor: colors.gs[200],
            border: `1px solid ${colors.gs[200]}`,
        },
    },

    // variant: Red
    [labelrButtonVariantMapper.RED]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.red[300],
            iconColor: colors.red[300],
            backgroundColor: colors.red[50],
            border: `1px solid ${colors.red[50]}`,
        },
    },

    // variant: Error
    [labelrButtonVariantMapper.ERROR]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[400],
            border: `1px solid ${colors.red[400]}`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.red[500],
            border: `1px solid ${colors.red[500]}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.red[300],
            iconColor: colors.red[300],
            backgroundColor: colors.red[50],
            border: `1px solid ${colors.red[50]}`,
        },
    },

    // variant: Ghost
    [labelrButtonVariantMapper.GHOST]: {
        [labelrButtonElementStateMapper.NORMAL]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.bs[900],
            border: `2px solid ${colors.white}`,
        },
        [labelrButtonElementStateMapper.HOVER]: {
            color: '#ffffff7f',
            iconColor: '#ffffff7f',
            backgroundColor: colors.bs[900],
            border: `2px solid #ffffff7f`,
        },
        [labelrButtonElementStateMapper.FOCUS]: {
            color: '#ffffff7f',
            iconColor: '#ffffff7f',
            backgroundColor: colors.bs[900],
            border: `2px solid #ffffff7f`,
        },
        [labelrButtonElementStateMapper.ACTIVE]: {
            color: colors.white,
            iconColor: colors.white,
            backgroundColor: colors.bs[900],
            border: `2px solid ${colors.white}`,
        },
        [labelrButtonElementStateMapper.DISABLED]: {
            color: colors.gs[500],
            iconColor: colors.gs[500],
            backgroundColor: colors.bs[900],
            border: `2px solid ${colors.gs[500]}`,
        },
    },
};

const labelrButtonThemeMode = {
    [themeModeNameMapper.LIGHT]: light,
    [themeModeNameMapper.DARK]: dark,
} as const;

export default labelrButtonThemeMode;
export type TLabelrButtonThemeMode = typeof labelrButtonThemeMode;
