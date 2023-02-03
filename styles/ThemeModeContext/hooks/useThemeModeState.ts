import {
    useContext,
} from 'react';
import {
    ThemeModeContextState,
} from '../ThemeModeContext';

const useThemeModeState = () => {
    return useContext(ThemeModeContextState)!;
};

export default useThemeModeState;