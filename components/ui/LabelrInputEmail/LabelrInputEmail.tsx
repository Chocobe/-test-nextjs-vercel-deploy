// react
import { 
    memo,
    useCallback,
    ChangeEvent, 
} from 'react';
// UI Components
import LabelrInput from '../LabelrInput/LabelrInput';
import LabelrUiAddonInvalidMessages from '@/components/uiAddons/LabelrAddonInvalidMessages/LabelrUiAddonInvalidMessages';
import { 
    useLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/hooks/useLabelrUiAddonInvalidMessages';
// type
import { 
    labelrInputTypeMapper, 
    TLabelrInputAutoComplete,
    TLabelrInputSize,
} from '../LabelrInput/labelrInputTypes';
import {
    TOnChangeForLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';

import { 
    labelrInputEmailValidatorExecutors,
} from './labelrInputEmailValidatorExecutors';

export type TLabelrInputEmailProps = {
    id?: string;
    value: string;
    onChange: TOnChangeForLabelrUiAddonInvalidMessages<ChangeEvent<HTMLInputElement>>,
    placeholder?: string;
    isDisabled?: boolean;
    isReadonly?: boolean;
    autofocus?: boolean;
    autoComplete?: TLabelrInputAutoComplete;
    size?: TLabelrInputSize;
    fluid?: boolean;
};

function LabelrInputEmail(props: TLabelrInputEmailProps) {
    const {
        id,
        value,
        onChange,
        placeholder,
        isDisabled,
        isReadonly,
        autofocus,
        autoComplete,
        size,
        fluid,
    } = props;

    const {
        isValid,
        invalidMessages,
        checkIsValidValue,
    } = useLabelrUiAddonInvalidMessages(labelrInputEmailValidatorExecutors);

    const onChangeInputElement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;
        
        checkIsValidValue(value);
        onChange(e, {
            isValid,
            invalidMessages
        });
    }, [checkIsValidValue, invalidMessages, isValid, onChange]);

    return (
        <LabelrUiAddonInvalidMessages 
            invalidMessages={invalidMessages}
            fluid={fluid}>
            <LabelrInput
                type={labelrInputTypeMapper.EMAIL}
                id={id}
                value={value}
                onChange={onChangeInputElement}
                placeholder={placeholder}
                isInvalid={!isValid}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                autofocus={autofocus}
                autoComplete={autoComplete}
                size={size} 
                fluid={fluid}/>
        </LabelrUiAddonInvalidMessages>
    );
}

export default memo(LabelrInputEmail);