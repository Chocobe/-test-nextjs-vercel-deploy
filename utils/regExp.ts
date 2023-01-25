export const EmailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const AlphabetNumberSpecialCharactorRegExp = (() => {
    const SPECIAL_CHARACTERS = `\`~!@#$%^&*()_+\\-=\\[\\]{};':"\\\\|,.<>\\/?`;
    return new RegExp(`^(?=.*[A-Za-z])(?=.*\\d)(?=.*[${SPECIAL_CHARACTERS}])[A-Za-z\\d${SPECIAL_CHARACTERS}]*`);
})();

export const UrlRegExp = /(http|https):\/\/.*/;