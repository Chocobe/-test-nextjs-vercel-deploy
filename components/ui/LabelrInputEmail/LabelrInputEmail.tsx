// react
import { 
    useState,
    useMemo,
    useCallback,
    useEffect,
    memo,
    ChangeEvent, 
} from 'react';
// type
import { 
    labelrInputTypeMapper, 
    TLabelrInputAutoComplete,
    TLabelrInputSize,
} from '../LabelrInput/labelrInputTypes';
// hook
import {
    useLabelrInputEmailValidatorExecutors,
} from './hooks/useLabelrInputEmailValidatorExecutors';
import { 
    useLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/hooks/useLabelrUiAddonInvalidMessages';
// UI Components
import LabelrInput from '../LabelrInput/LabelrInput';
import LabelrUiAddonInvalidMessages from '@/components/uiAddons/LabelrAddonInvalidMessages/LabelrUiAddonInvalidMessages';
// i18next
import {
    TTFunctionReturnType,
} from '@/i18n/i18nextTypes';
import {
    useTranslation,
} from 'react-i18next';


export type TLabelrInputEmailProps = {
    id?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onIsValid?: (isValid: boolean, invalidMessages: string[]) => void;
    placeholder?: TTFunctionReturnType | string;
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
        onIsValid,
        placeholder,
        isDisabled,
        isReadonly,
        autofocus,
        autoComplete,
        size,
        fluid,
    } = props;

    // state
    const [hasFirstBlurOrInput, setHasFirstBlurOrInput] = useState(false);
    const [resultOfValidators, setResultOfValidators] = useState<{
        isValid: boolean;
        invalidMessages: string[];
    }>({
        isValid: false,
        invalidMessages: [],
    });

    // hooks
    const { t } = useTranslation();
    const {
        labelrInputEmailValidatorExecutors
    } = useLabelrInputEmailValidatorExecutors(t);
    const {
        checkIsValidValue,
    } = useLabelrUiAddonInvalidMessages(labelrInputEmailValidatorExecutors);

    // cache
    const isInvalid = useMemo(() => {
        return hasFirstBlurOrInput && !resultOfValidators.isValid;
    }, [hasFirstBlurOrInput, resultOfValidators.isValid]);

    const invalidMessages = useMemo(() => {
        return hasFirstBlurOrInput
            ? resultOfValidators.invalidMessages
            : [];
    }, [hasFirstBlurOrInput, resultOfValidators.invalidMessages]);

    // method
    const checkIsValidEmail = useCallback(() => {
        const {
            isValid,
            invalidMessages,
        } = checkIsValidValue(value);

        setResultOfValidators({
            isValid,
            invalidMessages,
        });

        onIsValid?.(isValid, invalidMessages);
    }, [value, checkIsValidValue, onIsValid]);

    // callback
    const onChangeInputElement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setHasFirstBlurOrInput(true);
        onChange(e);
    }, [onChange]);

    const onBlurInputElement = useCallback(() => {
        setHasFirstBlurOrInput(true);
        checkIsValidEmail();
    }, [checkIsValidEmail]);

    // effect
    useEffect(() => {
        checkIsValidEmail();
    }, [checkIsValidEmail]);

    return (
        <LabelrUiAddonInvalidMessages 
            invalidMessages={invalidMessages}
            fluid={fluid}>
            <LabelrInput
                type={labelrInputTypeMapper.EMAIL}
                id={id}
                value={value}
                onChange={onChangeInputElement}
                onBlur={onBlurInputElement}
                placeholder={placeholder as string}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                autofocus={autofocus}
                autoComplete={autoComplete}
                size={size} 
                fluid={fluid} />
        </LabelrUiAddonInvalidMessages>
    );
}

export default memo(LabelrInputEmail);