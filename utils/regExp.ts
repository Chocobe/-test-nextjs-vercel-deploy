export const EmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const AlphabetNumberSpecialCharactorRegExp = (() => {
    const SPECIAL_CHARACTER = '`~!@#$%^&*()_+\\-=\\[\\]{};\':"\\\\|,.<>\\/?';
    return new RegExp(`^[A-Z0-9${SPECIAL_CHARACTER}]*$`);
})();

export const UrlRegExp = /(http|https):\/\/.*/;