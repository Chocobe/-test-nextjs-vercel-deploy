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
    TLabelrInputSize,
    TLabelrInputType,
} from '../LabelrInput/labelrInputTypes';
// hook
import {
    useLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/hooks/useLabelrUiAddonInvalidMessages';
// styled-components
import styled, {
    useTheme,
} from 'styled-components';
// UI components
import LabelrUiAddonInvalidMessages from '@/components/uiAddons/LabelrAddonInvalidMessages/LabelrUiAddonInvalidMessages';
import LabelrInput from '../LabelrInput/LabelrInput';
// icons
import {
    FiEye,
    FiEyeOff,
} from '@icons';

import {
    labelrInputConfirmValidatorExecutorsFactory,
} from './labelrInputConfirmValidatorExecutorsFactory';

const StyledMaskingButton = styled.div`
    cursor: pointer;
`;

export type TLabelrInputConfirmProps = {
    type?: TLabelrInputType,
    id?: string;
    value: string;
    targetValue: string;
    invalidMessage: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onIsValid?: (isValid: boolean, invalidMessages: string[]) => void;
    placeholder?: string;
    isDisabled?: boolean;
    isReadonly?: boolean;
    isEnableMasking?: boolean;
    autofocus?: boolean;
    size?: TLabelrInputSize;
    fluid?: boolean;
};

function LabelrInputConfirm(props: TLabelrInputConfirmProps) {
    const {
        type,
        id,
        value,
        targetValue,
        invalidMessage,
        onChange,
        onIsValid,
        placeholder,
        isDisabled,
        isReadonly,
        isEnableMasking,
        autofocus,
        size,
        fluid,
    } = props;

    const theme = useTheme();

    // state
    const [hasFirstBlurOrInput, setHasFirstBlurOrInput] = useState(false);
    const [resultOfValidators, setResultOfValidators] = useState<{
        isValid: boolean;
        invalidMessages: string[];
    }>({
        isValid: false,
        invalidMessages: [],
    });
    const [isShowText, setIsShowText] = useState(false);

    // cache
    const validatorExecutors = useMemo(() => {
        return labelrInputConfirmValidatorExecutorsFactory(invalidMessage);
    }, [invalidMessage]);

    const isInvalid = useMemo(() => {
        return hasFirstBlurOrInput && !resultOfValidators.isValid;
    }, [hasFirstBlurOrInput, resultOfValidators.isValid]);

    const invalidMessages = useMemo(() => {
        return hasFirstBlurOrInput
            ? resultOfValidators.invalidMessages
            : [];
    }, [hasFirstBlurOrInput, resultOfValidators.invalidMessages]);

    const typeOfInputElement = useMemo(() => {
        return isShowText
            ? type
            : labelrInputTypeMapper.PASSWORD;
    }, [type, isShowText]);

    // hook
    const {
        checkIsValidValue,
    } = useLabelrUiAddonInvalidMessages<{
        inputValue: string;
        targetValue: string;
    }>(validatorExecutors);

    // method
    const checkIsValidConfirmValue = useCallback(() => {
        const {
            isValid,
            invalidMessages,
        } = checkIsValidValue({
            inputValue: value,
            targetValue,
        });

        setResultOfValidators({
            isValid,
            invalidMessages,
        });

        onIsValid?.(isValid, invalidMessages);
    }, [value, targetValue, checkIsValidValue, onIsValid]);

    // callback
    const onChangeInputElement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        setHasFirstBlurOrInput(true);
        onChange(e);
    }, [onChange]);

    const onBlurInputElement = useCallback(() => {
        setHasFirstBlurOrInput(true);
        checkIsValidConfirmValue();
    }, [checkIsValidConfirmValue]);

    // renderer
    const RightAddonElement = useCallback(() => {
        if (!isEnableMasking) {
            return null;
        }

        const iconElement = isShowText
            ? <FiEye stroke={theme.uiThemeMode.input.normal.iconColor} />
            : <FiEyeOff stroke={theme.uiThemeMode.input.normal.iconColor} />;

        return (
            <StyledMaskingButton role="button" onClick={() => {
                setIsShowText(isShowText => !isShowText);
            }}>
                {iconElement}
            </StyledMaskingButton>
        );
    }, [isEnableMasking, isShowText, theme]);

    // effects
    useEffect(() => {
        checkIsValidConfirmValue();
    }, [checkIsValidConfirmValue]);

    useEffect(() => {
        setIsShowText(!isEnableMasking);
    }, [isEnableMasking]);

    return (
        <LabelrUiAddonInvalidMessages
            invalidMessages={invalidMessages}
            fluid={fluid}>
            <LabelrInput 
                type={typeOfInputElement}
                id={id}
                value={value}
                onChange={onChangeInputElement}
                onBlur={onBlurInputElement}
                placeholder={placeholder}
                isInvalid={isInvalid}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                autofocus={autofocus}
                size={size}
                fluid={fluid}
                slots={{
                    RightAddonElement,
                }} />
        </LabelrUiAddonInvalidMessages>
    );
}

export default memo(LabelrInputConfirm);
