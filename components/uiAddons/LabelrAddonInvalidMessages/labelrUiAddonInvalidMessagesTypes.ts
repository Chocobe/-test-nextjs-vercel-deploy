import { ChangeEvent } from 'react';

export type TUseLabelrUiAddonInvalidMessagesExecutor<T = any> = {
    validator: (value: T) => boolean;
    invalidMessage: string;
};

export type TOnChangeForLabelrUiAddonInvalidMessages<T = ChangeEvent> = {
    (event: T, resultOfValidators: {
        isValid: boolean;
        invalidMessages: string[];
    }): void
};