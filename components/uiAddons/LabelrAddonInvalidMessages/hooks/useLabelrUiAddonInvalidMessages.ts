// react
import {
    useState,
    useCallback,
} from 'react';

export type TUseLabelrUiAddonInvalidMessagesExecutor<T = any> = {
    validator: (value: T) => boolean;
    invalidMessage: string;
};

export const useLabelrUiAddonInvalidMessages = <T>(
    validatorExecutors: TUseLabelrUiAddonInvalidMessagesExecutor<T>[]
) => {
    const [isValid, setIsValid] = useState(true);
    const [invalidMessages, setInvalidMessages] = useState<string[]>([]);

    const checkIsValidValue = useCallback((value: T) => {
        const failedExecutors = validatorExecutors.filter(({ validator }) => {
            return !validator(value);
        });

        setIsValid(failedExecutors.length === 0);
        setInvalidMessages(failedExecutors.map(({ invalidMessage }) => invalidMessage));
    }, [validatorExecutors]);

    return {
        isValid,
        invalidMessages,
        checkIsValidValue,
    };
};
