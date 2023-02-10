// types
import {
    TUseLabelrUiAddonInvalidMessagesExecutor
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
// i18n
import {
    TTFunctionReturnType,
} from '@/i18n/i18nextTypes';

export const labelrInputConfirmValidatorExecutorsFactory = (
    invalidMessage: TTFunctionReturnType | string
): TUseLabelrUiAddonInvalidMessagesExecutor[] => [
    {
        invalidMessage: invalidMessage || '비밀번호가 일치하지 않습니다.',
        validator: (
            params: {
                inputValue: string;
                targetValue: string;
            }
        ) => {
            const {
                inputValue,
                targetValue,
            } = params;

            return inputValue === targetValue;
        },
    },
];
