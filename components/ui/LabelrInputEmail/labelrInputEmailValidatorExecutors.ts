// types
import { 
    TUseLabelrUiAddonInvalidMessagesExecutor
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
// utils
import {
    EmailRegExp,
} from '@/utils';

export const labelrInputEmailValidatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor[] = [
    {
        invalidMessage: '올바르지 않은 이메일 형식입니다.',
        validator: (email: string) => EmailRegExp.test(email),
    },
];
