import { DefaultTheme } from 'styled-components';
import colors from './colors';
import colorsOfDesignSystem from './colorsOfDesignSystem';
import mixins from './mixins';
import uiThemeMode from './uiThemeMode/index';
import { TThemeModeName } from './uiThemeMode/themeModeNameMapper';

export const getGlobalTheme = (themeMode: TThemeModeName): DefaultTheme => ({
    colors,
    colorsOfDesignSystem,
    mixins,
    uiThemeMode: uiThemeMode(themeMode),
});