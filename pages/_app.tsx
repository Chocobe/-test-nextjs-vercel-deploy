// nextjs
import Head from 'next/head';
import { 
    NextComponentType, 
    NextPageContext
} from 'next';
import { 
    useRouter,
    NextRouter,
} from 'next/router';
// react
import {
    useReducer,
    ReactElement,
} from 'react';
// styled-components
import styled, {
    ThemeProvider,
} from 'styled-components';
import {
    getGlobalTheme,
} from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyle';
import { 
    initialState, 
    reducer,
    ThemeModeContextDispatch,
    ThemeModeContextState
} from '@/styles/ThemeModeContext/ThemeModeContext';
// chakra-ui
import {
    ChakraProvider,
} from '@chakra-ui/react';
import chakraUiTheme from '@/styles/chakraUiTheme/chakraUiTheme';
// Redux
import { Provider } from 'react-redux';
import store from '@/redux/store';
// icon
import ReactIconsProvider from '@/libs/reactIcons/ReactIconsProvider';
// i18n
import '@/i18n';

export type TPageComponent = NextComponentType<NextPageContext, any, any> & {
    getLayout?: (page: ReactElement) => ReactElement;
};

export type TAppPropsWithLayout<T = any> = {
    Component: TPageComponent;
    pageProps: T;
};

const AppRoot = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

function App({ Component, pageProps }: TAppPropsWithLayout) {
    const router = useRouter();
    
    const getLayout: (
        page: ReactElement,
        router: NextRouter,
    ) => ReactElement = Component.getLayout ?? ((page: ReactElement) => page);

    const [themeModeState, dispatchThemeMode] = useReducer(reducer, initialState);

    return (
        <AppRoot>
            <Head>
                <meta 
                    name="viewport" 
                    content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0" />
                <meta 
                    name="description" 
                    content="AI에게 우리의 언어를 알려주고 용돈도 벌어보세요!" />
            </Head>

            <Provider store={store}>
                <ThemeProvider theme={getGlobalTheme(themeModeState.themeMode)}>
                    <GlobalStyle />
                    <ReactIconsProvider>
                        <ThemeModeContextDispatch.Provider value={dispatchThemeMode}>
                            <ThemeModeContextState.Provider value={themeModeState}>
                                <ChakraProvider theme={chakraUiTheme}>
                                    {getLayout(<Component {...pageProps} />, router)}
                                </ChakraProvider>
                            </ThemeModeContextState.Provider>
                        </ThemeModeContextDispatch.Provider>
                    </ReactIconsProvider>
                </ThemeProvider>
            </Provider>
        </AppRoot>
    );
}

export default App;