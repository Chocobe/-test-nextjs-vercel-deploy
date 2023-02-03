import input from './labelrInputThemeMode/labelrInputThemeMode';
import button from './labelrButtonThemeMode/labelrButtonThemeMode';
import {
    themeModeNameMapper,
    TThemeModeName,
} from '@/styles/uiThemeMode/themeModeNameMapper';

const uiThemeMode = (
    themeMode: TThemeModeName = themeModeNameMapper.LIGHT
) => ({
    input: input[themeMode],
    button: button[themeMode],
});

export default uiThemeMode;
export type TUiThemeMode = ReturnType<typeof uiThemeMode>;