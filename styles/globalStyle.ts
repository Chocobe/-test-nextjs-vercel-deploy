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

    a {
        color: ${({ theme }) => theme.colors.sky};
    }

    li {
        margin-left: 20px;
    }
`;

export default GlobalStyle;