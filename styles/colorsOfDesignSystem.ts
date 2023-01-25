import colors from './colors';

const colorsOfDesignSystem = {
    primary: {
        brand: colors.brand,
    },
    secondary: {
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.purple,
    },
    safe: {
        green: colors.green,
    },
    success: {
        green: colors.green,
    },
    danger: {
        red: colors.red,
    },
    error: {
        red: colors.red,
    },
    gray: {
        gs: colors.gs,
    },
    neutral: {
        bs: colors.bs,
    },
    blackAndWhite: {
        black: colors.black,
        white: colors.white,
    },
};

export default colorsOfDesignSystem;
export type TThemeColorsOfDesignSystem = typeof colorsOfDesignSystem;