// react
import { 
    memo,
    useState,
    useCallback,
    ChangeEvent,
    useMemo, 
} from 'react';
// type
import { 
    TOnChangeForLabelrUiAddonInvalidMessages,
} from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
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
    onChange: TOnChangeForLabelrUiAddonInvalidMessages<ChangeEvent<HTMLInputElement>>,
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
        placeholder,
        isDisabled,
        isReadonly,
        autofocus,
        size,
        fluid,
    } = props; 

    // state
    const [isValid, setIsValid] = useState(true);
    const [invalidMessages, setInvalidMessages] = useState<string[]>([]);
    const [isShowText, setIsShowText] = useState(false);

    // hook
    const theme = useTheme();
    const {
        checkIsValidValue,
    } = useLabelrUiAddonInvalidMessages(labelrInputPasswordValidatorExecutors);

    // cache
    const type = useMemo(() => {
        return isShowText
            ? labelrInputTypeMapper.TEXT
            : labelrInputTypeMapper.PASSWORD;
    }, [isShowText]);

    const RightAddonElement = useMemo(() => {
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
            invalidMessages,
        });
    }, [checkIsValidValue, onChange]);

    return (
        <LabelrUiAddonInvalidMessages
            invalidMessages={invalidMessages}
            fluid={fluid}>
            <LabelrInput 
                type={type}
                id={id}
                value={value}
                onChange={onChangeInputElement}
                onBlur={onChangeInputElement}
                placeholder={placeholder}
                isInvalid={!isValid}
                isDisabled={isDisabled}
                isReadonly={isReadonly}
                autofocus={autofocus}
                autoComplete={labelrInputAutoCompleteMapper.OFF}
                size={size}
                fluid={fluid}
                slots={{
                    RightAddonElement: () => RightAddonElement,
                }} />
        </LabelrUiAddonInvalidMessages>
    );
}

export default memo(LabelrInputPassword);