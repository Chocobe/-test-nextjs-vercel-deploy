import {
    useContext,
    useCallback,
    useEffect,
} from 'react';
import {
    ThemeModeContextState,
    ThemeModeContextDispatch,
} from '../ThemeModeContext';
import { 
    actionToggleThemeMode,
} from '../ThemeModeContext';
import {
    useColorMode,
} from '@chakra-ui/react';

const useToggleThemeMode = () => {
    const themeModeState = useContext(ThemeModeContextState)!;
    const themeDispatch = useContext(ThemeModeContextDispatch)!;
    const chakraColorModeObj = useColorMode();

    const toggleThemeMode = useCallback(() => {
        themeDispatch(actionToggleThemeMode());
    }, [themeDispatch]);

    useEffect(() => {
        chakraColorModeObj.setColorMode(themeModeState.themeMode);
    }, [chakraColorModeObj, themeModeState]);

    return {
        toggleThemeMode,
    };
};

export default useToggleThemeMode;
