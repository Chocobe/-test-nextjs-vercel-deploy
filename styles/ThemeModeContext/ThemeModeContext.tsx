import {
    createContext,
    Dispatch,
} from 'react';
import { themeModeNameMapper, TThemeModeName } from '../uiThemeMode/themeModeNameMapper';

const NAMESPACE = 'ThemeModeProvider';

export type TThemeModeProviderState = {
    themeMode: TThemeModeName;
};

export const actionToggleThemeMode = () => ({
    type: `${NAMESPACE}/toggleThemeMode`,
}) as const;

export const actionSetThemeMode = (themeMode: TThemeModeName) => ({
    type: `${NAMESPACE}/setThemeMode`,
    payload: themeMode,
}) as const;

export const initialState: TThemeModeProviderState = {
    themeMode: themeModeNameMapper.LIGHT,
};

export const ThemeModeContextState = createContext<TThemeModeProviderState | null>(null);
export const ThemeModeContextDispatch = createContext<Dispatch<ReturnType<
    typeof actionToggleThemeMode | typeof actionSetThemeMode
>> | null>(null);

export const reducer = (
    state: TThemeModeProviderState, 
    action: ReturnType<typeof actionToggleThemeMode | typeof actionSetThemeMode>
) => {
    switch(action.type) {
        case 'ThemeModeProvider/toggleThemeMode':
            return {
                ...state,
                themeMode: state.themeMode === themeModeNameMapper.LIGHT
                    ? themeModeNameMapper.DARK
                    : themeModeNameMapper.LIGHT,
            };
        case 'ThemeModeProvider/setThemeMode':
            return {
                ...state,
                themeMode: action.payload,
            };
        default: 
            return state;
    }
};
