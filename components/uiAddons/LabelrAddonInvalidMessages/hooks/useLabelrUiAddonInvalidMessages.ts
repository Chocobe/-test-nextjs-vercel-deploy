// react
import {
    useCallback,
} from 'react';
// type
import { TUseLabelrUiAddonInvalidMessagesExecutor } from '../labelrUiAddonInvalidMessagesTypes';

export const useLabelrUiAddonInvalidMessages = <T = any>(
    validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor<T>[]
) => {
    const checkIsValidValue = useCallback((value: T) => {
        const failedExecutors = validatorExecutors.filter(({ validator }) => {
            return !validator(value);
        });

        return {
            isValid: failedExecutors.length === 0,
            invalidMessages: failedExecutors.map(({ invalidMessage }) => invalidMessage),
        };
    }, [validatorExecutors]);

    return {
        checkIsValidValue,
    };
};
