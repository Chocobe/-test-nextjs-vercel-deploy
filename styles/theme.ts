import { DefaultTheme } from 'styled-components';

export const colors = {
    // Primary
    sky: '#1687FF',
    softsky: '#5C91FF',
    deepblue: '#111A3F',
    blue: '#34427A',
    softblue: '#5165A7',

    // Gray Scale
    black: '#000000', // text(header)
    'gray-1c': '#1C1C1C', // text
    'gray-33': '#333333', // text(contents)
    'gray-66': '#666666', // text
    'gray-99': '#999999', // text
    'gray-df': '#DFDFDF', // bg / border / text
    'gray-ec': '#ECECEC',
    'gray-f7': '#F7F7F7', // bg
    'gray-f9': '#F9F9F9', // bg
    'gray-fa': '#FAFAFA', // bg
    white: '#FFFFFF', // bg / border / text

    // Blue
    'blue-dc': '#DCEDFF',
    'blue-ec': '#ECF3FF', // bg
    'blue-f8': '#F8FAFF', // bg

    // Blue Gray Scale
    'blue-gray-18': '#18191B', // dark theme
    'blue-gray-29': '#292B2E', // dark theme
    'blue-gray-3b': '#3B3D41', // dark theme
    'blue-gray-4d': '#4D4F54', // dark theme
    'blue-gray-8a': '#8A9BAC',
    'blue-gray-b7': '#B7C7D9',
    'blue-gray-cc': '#CCD5DF', // border
    'blue-gray-da': '#DADEE3', // bg / border
    'blue-gray-e7': '#E7EAEF',
    'blue-gray-ed': '#EDF1F4', // border
    'blue-gray-f6': '#F6F8FB',

    // Extra
    safe: '#51B700',
    yellow: '#FFAF00',
    'yellow-cd': '#FFCD00',
    danger: '#FF4F4F',

    'sky-hover': '#007CFF',
};

const theme: DefaultTheme = {
    colors,
};

export default theme;
export type ThemeColorsType = typeof colors;