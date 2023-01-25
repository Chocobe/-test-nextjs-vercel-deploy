// react
import {
    useRef,
    useState,
    useMemo,
    useCallback,
    memo,
    PropsWithChildren,
    ReactNode,
    ChangeEvent,
    useEffect,
} from 'react';
// type
import {
    labelrInputElementStateMapper,
    labelrInputSizeMapper,
    labelrInputTypeMapper,
    labelrInputAutoCompleteMapper,

    TLabelrInputElementState,
    TLabelrInputType,
    TLabelrInputSize,
    TLabelrInputAutoComplete,
} from './labelrInputTypes';
import styled from 'styled-components';

const StyledLabelrInputRoot = styled.div<{
    themeMode: 'light' | 'dark';
    elementState: TLabelrInputElementState;
    isPointerEventsNone: boolean;
    fluid?: boolean;
}>`
    padding: 8px 16px;
    width: ${({ fluid }) => fluid ? '100%' : '180px'};
    display: inline-flex;
    align-items: center;

    border-radius: 4px;
    border: 1px solid ${({ theme, elementState }) => theme.uiThemeMode.input[elementState].borderColor};
    background-color: ${({ theme, elementState }) => theme.uiThemeMode.input[elementState].backgroundColor};
    transition: all 0.28s ease;

    .inputElement {
        appearance: none;
        -webkit-appearance: none;
        width: 100%;
        border: none;
        outline: none;
        flex: 1;

        color: ${({ theme, elementState }) => theme.uiThemeMode.input[elementState].color};
        font-size: 14px;
        font-weight: 400;
        line-height: 22px;

        background-color: inherit;
    }

    .leftAddonElement {
        margin-right: 8px;
        display: inline-block;
        stroke: #03a9f4;
        flex: 0;
    }
    
    .rightAddonElement {
        margin-left: 8px;
        display: inline-block;
        flex: 0;
    }

    // size: large
    ${`&.${labelrInputSizeMapper.LARGE}`} {
        padding: 12px 16px;
    }

    // size: small
    ${`&.${labelrInputSizeMapper.SMALL}`} {
        padding: 6px 12px;

        .inputElement {
            font-size: 12px;
            font-weight: 400;
            line-height: 18px;
        }
    }
`;

export type TLabelrInputProps<
    T = string | null
> = PropsWithChildren<{
    type?: TLabelrInputType;
    id?: string;
    value: T;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadonly?: boolean;
    autofocus?: boolean;
    autoComplete?: TLabelrInputAutoComplete;
    size?: TLabelrInputSize;
    fluid?: boolean;
    slots?: {
        LeftAddonElement?: ((props: TLabelrInputProps<T>) => ReactNode) | null;
        RightAddonElement?: ((props: TLabelrInputProps<T>) => ReactNode) | null;
    };
}>;

function LabelrInput<T extends string | number>(props: TLabelrInputProps<T>) {
    const {
        type = labelrInputTypeMapper.TEXT,
        id,
        value,
        onChange,
        placeholder,
        isInvalid,
        isDisabled,
        isReadonly,
        autofocus,
        autoComplete = labelrInputAutoCompleteMapper.OFF,
        size = labelrInputSizeMapper.REGULAR,
        fluid,
        slots,
        // children,
    } = props;

    // ref
    const $input = useRef<HTMLInputElement | null>(null);

    // state
    const [isInitialized, setIsInitialized] = useState(false);
    const [elementState, setElementState] = 
        useState<TLabelrInputElementState>(labelrInputElementStateMapper.NORMAL);

    // cache
    const isDisabledElementState = useMemo(() => {
        return (isDisabled || isReadonly) ?? false;
    }, [isDisabled, isReadonly]);

    // callback
    const onChangeElementState = useCallback((elementState: TLabelrInputElementState) => {
        if (isReadonly) {
            setElementState(labelrInputElementStateMapper.READONLY);
            return;
        }

        if (isDisabled) {
            setElementState(labelrInputElementStateMapper.DISABLED);
            return;
        }

        if (elementState === labelrInputElementStateMapper.FOCUS) {
            setElementState(labelrInputElementStateMapper.FOCUS);
            return;
        }

        if (elementState === labelrInputElementStateMapper.HOVER) {
            setElementState(labelrInputElementStateMapper.HOVER);
            return;
        }

        if (isInvalid) {
            setElementState(labelrInputElementStateMapper.ERROR);
            return;
        }

        setElementState(elementState);
    }, [isDisabled, isReadonly, isInvalid]);

    useEffect(() => {
        if (isReadonly) {
            setElementState(labelrInputElementStateMapper.READONLY);
            return;
        }

        if (isDisabled) {
            setElementState(labelrInputElementStateMapper.DISABLED);
            return;
        }

        setElementState(labelrInputElementStateMapper.NORMAL);

        if (isInvalid) {
            setElementState(labelrInputElementStateMapper.ERROR);
            return;
        } else {
            setElementState(labelrInputElementStateMapper.FOCUS);
        } 
    }, [isReadonly, isDisabled, isInvalid]);

    useEffect(() => {
        if (isInitialized) return;

        $input.current?.focus();
        setElementState(autofocus
            ? labelrInputElementStateMapper.FOCUS
            : labelrInputElementStateMapper.NORMAL
        );

        setIsInitialized(true);
    }, [isInitialized, autofocus]);

    return (
        <StyledLabelrInputRoot
            role="text"
            themeMode="light"
            className={size}
            elementState={elementState}
            isPointerEventsNone={isDisabledElementState}
            fluid={fluid}
            onMouseUp={() => $input.current?.focus()}
            onMouseEnter={() => { 
                if (elementState !== labelrInputElementStateMapper.FOCUS) {
                    onChangeElementState(labelrInputElementStateMapper.HOVER);
                }
            }}
            onMouseLeave={() => {
                if (elementState !== labelrInputElementStateMapper.FOCUS) {
                    onChangeElementState(labelrInputElementStateMapper.NORMAL);
                }
            }}>
            {slots?.LeftAddonElement && (
                <div className="leftAddonElement">
                    {slots.LeftAddonElement(props)}
                </div>
            )}

            <input className="inputElement" 
                ref={$input}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                disabled={isDisabledElementState}
                placeholder={placeholder} 
                autoComplete={autoComplete}
                onFocus={() => {
                    onChangeElementState(labelrInputElementStateMapper.FOCUS);
                }}
                onBlur={() => {
                    onChangeElementState(labelrInputElementStateMapper.NORMAL);
                }} />

            {slots?.RightAddonElement && (
                <div className="rightAddonElement">
                    {slots.RightAddonElement(props)}
                </div>
            )}
        </StyledLabelrInputRoot>
    );
}

export default memo(LabelrInput);