import { DefaultTheme } from 'styled-components';

const colors = {
    brand: {
        '800': '#003366',
        '700': '#004D99',
        '500': '#0080FF',
        '400': '#3399FF',
        '300': '#66B3FF',
        '50': '#CCE6FF',
    },
    blue: {
        '800': '#052461',
        '700': '#083691',
        '500': '#0D59F2',
        '400': '#3D7AF5',
        '300': '#6E9CF7',
        '50': '#CFDEFC',
    },
    indigo: {
        '800': '#0F1B57',
        '700': '#172982',
        '500': '#2644D9',
        '400': '#5269E0',
        '300': '#7D8FE8',
        '50': '#D4DAF7',
    },
    purple: {
        '800': '#1B0F57',
        '700': '#291782',
        '500': '#4426D9',
        '400': '#6952E0',
        '300': '#8F7DE8',
        '50': '#DAD4F7',
    },
    green: {
        '800': '#2A4D19',
        '700': '#407326',
        '600': '#559933',
        '500': '#6ABF40',
        '400': '#88CC66',
        '300': '#A6D98C',
    },
    red: {
        '800': '#610514',
        '700': '#91081F',
        '600': '#C20A29',
        '500': '#F20D33',
        '400': '#F53D5C',
        '300': '#F76E85',
    },
    gs: {
        '900': '#212121',
        '800': '#333333',
        '700': '#424242',
        '600': '#666666',
        '500': '#9E9E9E',
        '400': '#BDBDBD',
        '300': '#E0E0E0',
        '200': '#EEEEEE',
        '100': '#F5F5F5',
        '50': '#FAFAFA',
    },
    bs: {
        '900': '#17191C',
        '800': '#2B303B',
        '700': '#414958',
        '600': '#667799',
        '500': '#7A8FB8',
        '400': '#B3C4E5',
        '300': '#D4E0F7',
        '200': '#E5ECFA',
        '100': '#EEF2FC',
        '50': '#F6F9FD',
    },
    black: '#000000',
    white: '#FFFFFF',
};

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

const themeMode = {
    light: colorsOfDesignSystem,
    dark: colorsOfDesignSystem,
};

const alignItemsValues = [
    'normal',
    'center',
    'flex-start',
    'flex-end',
    'stretch',
] as const;
const justifyContentValues = [
    ...alignItemsValues,
    'space-between',
    'space-around',
    'space-evenly',
] as const;
type TApplyFlexProps = {
    display?: 'flex' | 'inline-flex';
    gap?: string;
    justifyContent?: typeof justifyContentValues[keyof typeof justifyContentValues];
    alignItems?: typeof alignItemsValues[keyof typeof alignItemsValues];
    flexWrap?: 'wrap' | 'nowrap';
    flexDirection?: 'row' | 'column';
};

const mixins = {
    applyFlex: (({
        display = 'flex',
        gap = '0',
        justifyContent = 'flex-start',
        alignItems = 'stretch',
        flexWrap = 'wrap',
        flexDirection = 'row',
    }: TApplyFlexProps = {}) => `
        display: ${display};
        gap: ${gap};
        justify-content: ${justifyContent};
        align-items: ${alignItems};
        flex-wrap: ${flexWrap};
        flex-direction: ${flexDirection};
    `),
};
const theme: DefaultTheme = {
    colors,
    colorsOfDesignSystem,
    themeMode,
    mixins,
};

export default theme;
export type TThemeColorsType = typeof colors;
export type TThemeColorsOfDesignSystem = typeof colorsOfDesignSystem;
export type TThemeMode = typeof themeMode;
export type TThemeMixins = typeof mixins;