// react
import { 
    useState,
    useCallback,
    memo,
    ChangeEvent, 
} from 'react';
// type
import { 
    labelrInputTypeMapper, 
    TLabelrInputAutoComplete,
    TLabelrInputSize,
} from '../LabelrInput/labelrInputTypes';
import {
    TOnChangeForLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
// hook
import { 
    useLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/hooks/useLabelrUiAddonInvalidMessages';
// UI Components
import LabelrInput from '../LabelrInput/LabelrInput';
import LabelrUiAddonInvalidMessages from '@/components/uiAddons/LabelrAddonInvalidMessages/LabelrUiAddonInvalidMessages';

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

    // state
    const [isValid, setIsValid] = useState(true);
    const [invalidMessages, setInvalidMessages] = useState<string[]>([]);

    // hook
    const {
        checkIsValidValue,
    } = useLabelrUiAddonInvalidMessages(labelrInputEmailValidatorExecutors);

    // callback
    const onChangeInputElement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const {
            isValid,
            invalidMessages,
        } = checkIsValidValue(e.currentTarget.value);

        setIsValid(isValid);
        setInvalidMessages(invalidMessages);

        onChange(e, {
            isValid,
            invalidMessages
        });
    }, [checkIsValidValue, onChange]);

    return (
        <LabelrUiAddonInvalidMessages 
            invalidMessages={invalidMessages}
            fluid={fluid}>
            <LabelrInput
                type={labelrInputTypeMapper.EMAIL}
                id={id}
                value={value}
                onChange={onChangeInputElement}
                onBlur={onChangeInputElement}
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