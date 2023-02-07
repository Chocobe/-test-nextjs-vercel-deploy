import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import koTranslation from './locales/ko/translation.json';
import enTranslation from './locales/en/translation.json';

const resources = {
    ko: { translation: koTranslation },
    en: { translation: enTranslation },
};

const DEFAULT_LANGUAGE = 'ko';
const browserLanguage = globalThis.navigator?.language.split('-')[0] ?? DEFAULT_LANGUAGE;

i18n
    .use(initReactI18next)
    .init({
        resources,
        lng: browserLanguage,
        fallbackLng: DEFAULT_LANGUAGE,
        debug: false,
        defaultNS: 'translation',
        ns: 'translation',
        keySeparator: false,
        interpolation: {
            escapeValue: false,
            alwaysFormat: true,
            format(value, format, lng) {
                if (format === 'uppercase') {
                    return value.toUpperCase();
                }

                if (typeof value === 'number') {
                    return value.toLocaleString(lng);
                }

                return value;
            },
        },
    });

export default i18n;

// i18next를 파라미터로 넘길 때 사용할 인터페이스 타입
export interface I18Next {
    t: (str: string, option?: object) => string;
}

// scanner를 사용하기 위한 dummy function
export const i18nextScanKey = (key: string): string => key;
