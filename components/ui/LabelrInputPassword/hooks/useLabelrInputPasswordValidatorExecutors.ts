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
    AlphabetNumberSpecialCharactorRegExp,
} from '@/utils';
import { TFunction } from 'i18next';

export const useLabelrInputPasswordValidatorExecutors = (
    t: TFunction
) => {
    const labelrInputPasswordValidatorExecutors = useMemo<TUseLabelrUiAddonInvalidMessagesExecutor[]>(() => [
        {
            invalidMessage: t('UseLabelrInputPasswordValidatorExecutors/INVALID_MESSAGE__PASSWORD_FORM'),
            validator(password: string) {
                return AlphabetNumberSpecialCharactorRegExp.test(password);
            },
        },
        {
            invalidMessage: t('UseLabelrInputPasswordValidatorExecutors/INVALID_MESSAGE__LENGTH'),
            validator(password: string) {
                return password?.length > 7;
            },
        },
    ], [t]);

    return {
        labelrInputPasswordValidatorExecutors,
    };
};
