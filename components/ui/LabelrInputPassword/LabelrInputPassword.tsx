// react
import { 
    memo,
    useState,
    useCallback,
    ChangeEvent,
    useMemo,
    useEffect, 
} from 'react';
// type
import { 
    labelrInputTypeMapper,
    labelrInputAutoCompleteMapper,
    TLabelrInputSize,
} from '../LabelrInput/labelrInputTypes';
// styled-components
import styled, {
    useTheme,
} from 'styled-components';
// hook
import { 
    useLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/hooks/useLabelrUiAddonInvalidMessages';
// UI Components
import LabelrInput from '../LabelrInput/LabelrInput';
import LabelrUiAddonInvalidMessages from '@/components/uiAddons/LabelrAddonInvalidMessages/LabelrUiAddonInvalidMessages';
// icons
import { 
    FiEye,
    FiEyeOff,
} from '@icons';

import { 
    labelrInputPasswordValidatorExecutors,
} from './labelrInputPasswordValidatorExecutors';

const StyledMaskingButton = styled.div`
    cursor: pointer;
`;

export type TLabelrInputPasswordProps = {
    id?: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onIsValid?: (isValid: boolean, invalidMessages: string[]) => void;
    placeholder?: string;
    isDisabled?: boolean;
    isReadonly?: boolean;
    autofocus?: boolean;
    size?: TLabelrInputSize;
    fluid?: boolean;
};

function LabelrInputPassword(props: TLabelrInputPasswordProps) {
    const {
        id,
        value,
        onChange,
        onIsValid,
        placeholder,
        isDisabled,
        isReadonly,
        autofocus,
        size,
        fluid,
    } = props; 

    // state
    const [hasFirstBlurOrInput, setHasFirstBlurOrInput] = useState(false);
    const [isShowText, setIsShowText] = useState(false);
    const [resultOfValidators, setResultOfValidators] = useState<{
        isValid: boolean;
        invalidMessages: string[];
    }>({
        isValid: false,
        invalidMessages: [],
    });

    // hook
    const theme = useTheme();
    const {
        checkIsValidValue,
    } = useLabelrUiAddonInvalidMessages<string>(labelrInputPasswordValidatorExecutors);

    // cache
    const isInvalid = useMemo(() => {
        return hasFirstBlurOrInput && !resultOfValidators.isValid;
    }, [hasFirstBlurOrInput, resultOfValidators.isValid]);

    const invalidMessages = useMemo(() => {
        return hasFirstBlurOrInput
            ? resultOfValidators.invalidMessages
            : [];
    }, [hasFirstBlurOrInput, resultOfValidators.invalidMessages]);

    const type = useMemo(() => {
        return isShowText
            ? labelrInputTypeMapper.TEXT
            : labelrInputTypeMapper.PASSWORD;
    }, [isShowText]);

    // method
    const checkIsValidPassword = useCallback(() => {
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
        checkIsValidPassword();
    }, [checkIsValidPassword]);

    // renderer
    const RightAddonElement = useCallback(() => {
        const IconElement = isShowText
            ? <FiEye stroke={theme.uiThemeMode.input.normal.iconColor} />
            : <FiEyeOff stroke={theme.uiThemeMode.input.normal.iconColor} />;

        return (
            <StyledMaskingButton role="button" onClick={() => {
                setIsShowText(isShowText => !isShowText);
            }}>
                {IconElement}
            </StyledMaskingButton>
        );
    }, [isShowText, theme]);

    // effect
    useEffect(() => {
        checkIsValidPassword();
    }, [checkIsValidPassword]);

    return (
        <LabelrUiAddonInvalidMessages
            invalidMessages={invalidMessages}
            fluid={fluid}>
            <LabelrInput 
                type={type}
                id={id}
                value={value}
                onChange={onChangeInputElement}
                onBlur={onBlurInputElement}
                placeholder={placeholder}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                autofocus={autofocus}
                autoComplete={labelrInputAutoCompleteMapper.OFF}
                size={size}
                fluid={fluid}
                slots={{
                    RightAddonElement,
                }} />
        </LabelrUiAddonInvalidMessages>
    );
}

export default memo(LabelrInputPassword);