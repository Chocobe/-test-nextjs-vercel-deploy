import 'styled-components';
import { 
    TThemeColorsType,
    TThemeColorsOfDesignSystem,
    TThemeMode,
    TThemeMixins,
} from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: TThemeColorsType;
        colorsOfDesignSystem: TThemeColorsOfDesignSystem;
        themeMode: TThemeMode;
        mixins: TThemeMixins;
    }
}