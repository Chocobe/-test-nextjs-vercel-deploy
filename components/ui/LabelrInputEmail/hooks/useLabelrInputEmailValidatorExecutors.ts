// react
import {
    useMemo,
} from 'react';
// types
import { 
    TUseLabelrUiAddonInvalidMessagesExecutor
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
// utils
import {
    EmailRegExp,
} from '@/utils';
// i18n
import { 
    TFunction,
} from 'i18next';

export const useLabelrInputEmailValidatorExecutors = (
    t: TFunction
) => {
    const labelrInputEmailValidatorExecutors = useMemo<TUseLabelrUiAddonInvalidMessagesExecutor[]>(() => [
        {
            invalidMessage: t('UseLabelrInputEmailValidatorExecutors/INVALID_MESSAGE__EMAIL_FORM'),
            validator(email: string) {
                return EmailRegExp.test(email);
            },
        },
    ], [t]);

    return {
        labelrInputEmailValidatorExecutors,
    };
};
