import {
    useContext,
} from 'react';
import {
    ThemeModeContextDispatch,
} from '../ThemeModeContext';

const useThemeModeDispatch = () => {
    return useContext(ThemeModeContextDispatch)!;
};

export default useThemeModeDispatch;