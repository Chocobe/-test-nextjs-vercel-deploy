// types
import {
    TUseLabelrUiAddonInvalidMessagesExecutor
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';

export const labelrInputConfirmValidatorExecutorsFactory = (
    invalidMessage: string
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
