// react
import {
    useReducer,
    useCallback,
    useEffect,
    ReactElement,
} from 'react';
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
import { 
    RoutePathFactory,
} from '@/router';
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
import { 
    actionReset_Signin, 
    actionSucceeded_Signin,
} from '@/redux/slices/apiSlices/accountsApiSlice/accountsApiSlice';
// axios
import { 
    setupAxiosInstance,
} from '@/network/RestClient';
// icon
import ReactIconsProvider from '@/libs/reactIcons/ReactIconsProvider';
// i18n
import '@/i18n';
import LabelrLanguageDropdown from '@/components/ui/LabelrLanguageDropdown/LabelrLanguageDropdown';
// google oauth
import {
    GoogleOAuthProvider,
} from '@react-oauth/google';
// localStorage
import { 
    getAuthTokensFromLocalStorage, 
    setAuthTokensToLocalStorage,
} from '@/network/localStorageApi/localStorageApi';

export type TPageComponent = NextComponentType<NextPageContext, any, any> & {
    getLayout?: (page: ReactElement) => ReactElement;
};

export type TAppPropsWithLayout<T = any> = {
    Component: TPageComponent;
    pageProps: T;
};

const StyledAppRoot = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

// FIXME: i18n 테스트 후 삭제하기
const StyledLanguageDropdownWrapper = styled.div`
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);

    display: flex;
    align-items: center;
    gap: 4px;
`;

function App({ Component, pageProps }: TAppPropsWithLayout) {
    const router = useRouter();

    const getLayout: (
        page: ReactElement,
        router: NextRouter,
    ) => ReactElement = Component.getLayout ?? ((page: ReactElement) => page);

    const [themeModeState, dispatchThemeMode] = useReducer(reducer, initialState);

    //
    // callback
    //
    // FIXME: 테스트 후, 삭제하기
    const signout = useCallback(() => {
        store.dispatch(actionReset_Signin());
        setAuthTokensToLocalStorage();
        router.replace(RoutePathFactory.accounts['/signin']());
    }, [router]);

    //
    // effect
    //
    useEffect(function initNetwork() {
        setupAxiosInstance(store);

        const tokenData = getAuthTokensFromLocalStorage();
        const {
            accessToken,
            refreshToken,
        } = tokenData;

        if (accessToken && refreshToken) {
            store.dispatch(actionSucceeded_Signin(tokenData));
        }
    }, []);

    return (
        <StyledAppRoot>
            <Head>
                <meta 
                    name="viewport" 
                    content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0" />
                <meta 
                    name="description" 
                    content="더 빠른 개발, 더 빠른 출시, 더 빠른 혁신. Advanced AIOps, 레이블러" />

                <title>레이블러 콘솔</title>
            </Head>

            <Provider store={store}>
                <ThemeProvider theme={getGlobalTheme(themeModeState.themeMode)}>
                    <GlobalStyle />
                    <ReactIconsProvider>
                        <ThemeModeContextDispatch.Provider value={dispatchThemeMode}>
                            <ThemeModeContextState.Provider value={themeModeState}>
                                <ChakraProvider theme={chakraUiTheme}>
                                    {/* FIXME: i18n 테스트 후 삭제하기} */}
                                    <StyledLanguageDropdownWrapper>
                                        <LabelrLanguageDropdown />
                                        <button onClick={signout}>
                                            로그아웃
                                        </button>
                                    </StyledLanguageDropdownWrapper>

                                    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}>
                                        {getLayout(<Component {...pageProps} />, router)}
                                    </GoogleOAuthProvider>
                                </ChakraProvider>
                            </ThemeModeContextState.Provider>
                        </ThemeModeContextDispatch.Provider>
                    </ReactIconsProvider>
                </ThemeProvider>
            </Provider>
        </StyledAppRoot>
    );
}

export default App;
