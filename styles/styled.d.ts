import 'styled-components';
import { TThemeColors } from './colors';
import { TThemeColorsOfDesignSystem } from './colorsOfDesignSystem';
import { TUiThemeMode } from './uiThemeMode';
import { TThemeMixins } from './mixins';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: TThemeColors;
        colorsOfDesignSystem: TThemeColorsOfDesignSystem;
        uiThemeMode: TUiThemeMode;
        mixins: TThemeMixins;
    }
}