import 'styled-components';
import { ThemeColorsType } from './theme';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: ThemeColorsType;
    }
}