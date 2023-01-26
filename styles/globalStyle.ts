import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: Pretendard Variable, Noto Sans KR, sans-serif;
    }
    
    h1 {
        font-size: 40px;
        font-weight: 700;
        line-height: 60px;
    }
    h2 {
        font-size: 36px;
        font-weight: 700;
        line-height: 54px;
    }
    h3 {
        font-size: 32px;
        font-weight: 700;
        line-height: 48px;
    }
    h4 {
        font-size: 24px;
        font-weight: 700;
        line-height: 36px;
    }
    h5 {
        font-size: 20px;
        font-weight: 700;
        line-height: 30px;
    }
    h6 {
        font-size: 16px;
        font-weight: 700;
        line-height: 24px;
    }

    a {
        color: ${({ theme }) => theme.colors.indigo['500']};
        text-decoration: none;
    }

    li {
        margin-left: 20px;
    }
`;

export default GlobalStyle;