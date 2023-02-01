// types
import { 
    TUseLabelrUiAddonInvalidMessagesExecutor
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
// utils
import {
    AlphabetNumberSpecialCharactorRegExp,
} from '@/utils';

export const labelrInputPasswordValidatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
    {
        invalidMessage: '최소 하나 이상의 알파벳과 숫자, 그리고 특수문자를 포함해야 합니다.',
        validator: (password: string) => AlphabetNumberSpecialCharactorRegExp.test(password),
    },
    {
        invalidMessage: '최소 8자 이상 이어야 합니다.',
        validator: (password: string) => password?.length > 7,
    },
];
