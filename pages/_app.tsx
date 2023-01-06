import type { AppProps } from 'next/app';
import Head from 'next/head';

// styled-components
import styled, {
    ThemeProvider,
} from 'styled-components';
import theme from '@/styles/theme';
import GlobalStyle from '@/styles/globalStyle';
// Redux
import { Provider } from 'react-redux';
import store from '@/redux/store';
// icon
import ReactIconsProvider from '@/libs/reactIcons/ReactIconsProvider';

const AppRoot = styled.div`
    width: 100%;
    height: 100vh;
    overflow: hidden;
`;

function App({ Component, pageProps }: AppProps) {
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
                <ThemeProvider theme={theme}>
                    <GlobalStyle />
                    <ReactIconsProvider>
                        <Component {...pageProps} />
                    </ReactIconsProvider>
                </ThemeProvider>
            </Provider>
        </AppRoot>
    );
}

export default App;