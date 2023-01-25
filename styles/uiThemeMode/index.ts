import input from './labelrInputThemeMode/labelrInputThemeMode';
import {
    themeModeNameMapper,
    TThemeModeName,
} from '@/styles/uiThemeMode/themeModeNameMapper';

const uiThemeMode = (
    themeMode: TThemeModeName = themeModeNameMapper.LIGHT
) => ({
    input: input[themeMode],
});

export default uiThemeMode;
export type TUiThemeMode = ReturnType<typeof uiThemeMode>;