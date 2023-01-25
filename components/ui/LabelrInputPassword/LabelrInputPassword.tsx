// react
import { 
    memo,
    useState,
    useCallback,
    ChangeEvent,
    useMemo, 
} from 'react';
// UI Components
import LabelrInput from '../LabelrInput/LabelrInput';
import LabelrUiAddonInvalidMessages from '@/components/uiAddons/LabelrAddonInvalidMessages/LabelrUiAddonInvalidMessages';
// type
import { TOnChangeForLabelrUiAddonInvalidMessages } from '@/components/uiAddons/LabelrAddonInvalidMessages/labelrUiAddonInvalidMessagesTypes';
import { 
    labelrInputTypeMapper,
    labelrInputAutoCompleteMapper,
    TLabelrInputSize,
} from '../LabelrInput/labelrInputTypes';
// icons
import { 
    FiEye,
    FiEyeOff,
} from '@icons';
// styled-components
import styled, {
    useTheme,
} from 'styled-components';

const StyledMaskingButton = styled.div`
    cursor: pointer;
`;

import { 
    useLabelrUiAddonInvalidMessages
} from '@/components/uiAddons/LabelrAddonInvalidMessages/hooks/useLabelrUiAddonInvalidMessages';
import { 
    labelrInputPasswordValidatorExecutors
} from './labelrInputPasswordValidatorExecutors';

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

    const theme = useTheme();

    const [isValid, setIsValid] = useState(true);
    const [invalidMessages, setInvalidMessages] = useState<string[]>([]);
    const [isShowText, setIsShowText] = useState(false);

    const {
        checkIsValidValue,
    } = useLabelrUiAddonInvalidMessages(labelrInputPasswordValidatorExecutors);

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

    const onChangeInputElement = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const value = e.currentTarget.value;

        const {
            isValid,
            invalidMessages,
        } = checkIsValidValue(value);

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