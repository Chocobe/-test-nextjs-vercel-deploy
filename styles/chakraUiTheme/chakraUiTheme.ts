import {
    extendTheme,
} from '@chakra-ui/react';
import colors from '../colors';

const chakraUiTheme = extendTheme({
    colors,
    styles: {
        global: {
            '*': {
                margin: '0',
                padding: '0',
                boxSizing: 'border-box',
            },

            'body': {
                fontFamily: 'Pretendard Variable, Noto Sans KR, sans-serif',
            },

            h1: {
                fontSize: '40px',
                fontWeight: '700',
                lineHeight: '60px',
            },
            h2: {
                fontSize: '36px',
                fontWeight: '700',
                lineHeight: '54px',
            },
            h3: {
                fontSize: '32px',
                fontWeight: '700',
                lineHeight: '48px',
            },
            h4: {
                fontSize: '24px',
                fontWeight: '700',
                lineHeight: '36px',
            },
            h5: {
                fontSize: '20px',
                fontWeight: '700',
                lineHeight: '30px',
            },
            h6: {
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '24px',
            },

            a: {
                color: colors.indigo['500'],
                textDecoration: 'none',
            },

            li: {
                marginLeft: '0',
            },
        },
    },
});

export default chakraUiTheme;
