// react
import { 
    useEffect,
    useState,
    useMemo,
    useCallback,
    useRef,
} from 'react';
// styled-components
import styled, {
    css,
} from 'styled-components';
// chakra-ui
import {
    useDisclosure,
} from '@chakra-ui/react';
// icons
import {
    FiChevronUp,
} from '@icons';
// type
import { 
    labelrDropdownStateMapper,
    labelrDropdownSizeMapper,
    
    TLabelrDropdownItem,
    TLabelrDropdownState,
    TLabelrDropdownSize,
} from './labelrDropdownTypes';
import classNames from 'classnames';

const StyledLabelrDropdownRoot = styled.div<{
    isOpen: boolean;
    isDisabled?: boolean;
    fluid?: boolean;
    elementState: TLabelrDropdownState;
    ellipsisLine?: number;
}>`
    ${({ theme, elementState, fluid, isOpen, ellipsisLine }) => {
        const {
            color,
            placeholderColor,
            borderColor,
            backgroundColor,
            iconColor,
            iconBackgroundColor,
        } = theme.uiThemeMode.dropdown[elementState];

        const fontStyleMixin = css`
            color: ${color};
            font-size: 14px;
            line-height: 22px;
            font-weight: 400;
        `;

        return css`
            position: relative;

            display: inline-block;

            width: ${fluid ? '100%' : 'min(200px, 100%)'};
            background-color: ${backgroundColor};
            
            transition: all 0.28s ease;
            
            .valueWrapper {
                display: flex;
                
                border: 1px solid ${borderColor};
                border-radius: 4px;
                transition: all 0.28s ease;

                &-value{
                    margin: 9px 8px 9px 16px;
                    width: 100%;

                    transition: all 0.28s ease;

                    ${fontStyleMixin};

                    ${ellipsisLine ? css`
                        overflow: hidden;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp: ${ellipsisLine};
                    ` : ``}

                    &.isBlankValue {
                        color: ${placeholderColor};
                    }
                }

                &-iconWrapper {
                    width: 30px;
                    flex-shrink: 0;

                    display: flex;
                    justify-content: center;
                    align-items: center;

                    color: ${iconColor};
                    background-color: ${iconBackgroundColor};

                    border-top-right-radius: 4px;
                    border-bottom-right-radius: 4px;

                    transition: all 0.28s ease;

                    &-icon {
                        transform: scaleY(${isOpen ? 1 : -1});
                        transition: all 0.75s ease;
                    }
                }
            }

            .optionsWrapper {
                padding: 4px 0;
                width: 100%;
                height: 0;
                display: ${isOpen ? 'block' : 'none'};
                overflow: auto;

                position: absolute;
                top: 100%;
                left: 0;

                background-color: inherit;
                border: 1px solid ${theme.uiThemeMode.dropdown.normal.borderColor};
                border-radius: 4px;
                box-shadow: 0px 8px 8px rgba(0, 0, 0, 0.04);
                z-index: 1;

                transition: all 0.1s ease;

                &-item {
                    &.defaultStyle {
                        padding: 8px 16px;

                        ${fontStyleMixin}
                    }

                    &.isCurrentValue {
                        background-color: ${theme.uiThemeMode.dropdown.normal.currentValueItemBackgroundColor};
                    }

                    &:hover {
                        background-color: ${theme.uiThemeMode.dropdown.normal.itemHoverBackgroundColor};

                        transition: all 0.28s ease;
                        cursor: pointer;
                    }
                }
            }

            /* size: small */
            ${`&.${labelrDropdownSizeMapper.SMALL}`} {
                .valueWrapper {
                    &-value {
                        margin: 7px 8px 7px 12px;

                        font-size: 12px;
                        line-height: 18px;
                        font-weight: 400;
                    }

                    &-iconWrapper {
                        width: 22px;
                    }
                }

                .optionsWrapper {
                    &-item.defaultStyle {
                        font-size: 12px;
                        line-height: 18px;
                        font-weight: 400;
                    }
                }
            }

            /* size: large */
            ${`&.${labelrDropdownSizeMapper.LARGE}`} {
                .valueWrapper {
                    &-value {
                        margin: 13px 8px 13px 16px;
                    }

                    &-iconWrapper {
                        width: 30px;
                    }
                }
            }

            /* size: huge */
            ${`&.${labelrDropdownSizeMapper.HUGE}`} {
                .valueWrapper {
                    //

                    &-value {
                        margin: 20px;
                    }

                    &-iconWrapper {
                        width: 34px;
                    }
                }
            }
        `;
    }}
`;

export type TLabelrDropdownProps<T = any> = {
    value?: T;
    onChange: (value: T) => void;
    placeholder?: string;
    items: TLabelrDropdownItem<T>[];
    size?: TLabelrDropdownSize;
    isReadonly?: boolean;
    isDisabled?: boolean;
    isInvalid?: boolean;
    fluid?: boolean;
    ellipsisLine?: number;
};

function LabelrDropdown<T = any>(props: TLabelrDropdownProps<T>) {
    const {
        value,
        onChange,
        placeholder = '값을 선택해 주세요.',
        items,
        size = labelrDropdownSizeMapper.REGULAR,
        isReadonly,
        isDisabled,
        isInvalid,
        fluid,
        ellipsisLine,
    } = props;

    //
    // ref
    //
    const optionsWrapperRef = useRef<HTMLDivElement | null>(null);

    //
    // state
    //
    const [elementState, setElementState] = 
        useState<TLabelrDropdownState>(labelrDropdownStateMapper.NORMAL);

    //
    // hook
    //
    const {
        isOpen,
        onOpen,
        onClose,
    } = useDisclosure();

    //
    // cache
    //
    const valueItem = useMemo(() => {
        return items.find(item => item.value === value);
    }, [value, items]);

    const internalText = useMemo(() => {
        return valueItem?.text || placeholder;
    }, [valueItem, placeholder]);

    const isDisabledDropdown = useMemo(() => {
        return isReadonly || isDisabled;
    }, [isReadonly, isDisabled]);

    //
    // callback
    //
    const onChangeElementState = useCallback((elementState: TLabelrDropdownState) => {
        if (isReadonly) {
            setElementState(labelrDropdownStateMapper.READONLY);
            return;
        }

        if (isDisabled) {
            setElementState(labelrDropdownStateMapper.DISABLED);
            return;
        }

        switch(elementState) {
            case labelrDropdownStateMapper.FOCUS:
            case labelrDropdownStateMapper.HOVER:
                setElementState(elementState);
                return;
        }

        if (isInvalid) {
            setElementState(labelrDropdownStateMapper.ERROR);
        } else {
            setElementState(elementState);
        }
    }, [isReadonly, isDisabled, isInvalid]);

    const onClickDropdown = useCallback(() => {
        if (isDisabledDropdown) {
            return;
        }

        onOpen();
        onChangeElementState(labelrDropdownStateMapper.FOCUS);
    }, [isDisabledDropdown, onOpen, onChangeElementState]);

    const onCloseDropdown = useCallback(() => {
        onClose();
        onChangeElementState(labelrDropdownStateMapper.NORMAL);
    }, [onClose, onChangeElementState]);

    //
    // method
    //
    const renderText = useCallback((item: TLabelrDropdownItem<T>) => {
        const {
            value: itemValue,
            text,
        } = item;

        return (
            <div className={classNames([
                'optionsWrapper-item',
                { defaultStyle: typeof text === 'string' },
                { isCurrentValue: itemValue === value },
            ])}>
                {text}
            </div>
        );
    }, [value]);

    //
    // effect
    //
    useEffect(() => {
        if (isReadonly) {
            setElementState(labelrDropdownStateMapper.READONLY);
            return;
        }

        if (isDisabled) {
            setElementState(labelrDropdownStateMapper.DISABLED);
            return;
        }

        if (isInvalid) {
            setElementState(labelrDropdownStateMapper.ERROR);
            return;
        } else {
            setElementState(labelrDropdownStateMapper.NORMAL);
        }
    }, [isReadonly, isDisabled, isInvalid]);

    useEffect(() => {
        const optionsWrapper = optionsWrapperRef.current;

        if (!optionsWrapper) {
            return;
        }

        if (isOpen){
            optionsWrapper.style.height = 'auto';
            optionsWrapper.style.top = '100%';
            optionsWrapper.style.bottom = 'auto';
            optionsWrapper.style.opacity = '0';

            setTimeout(() => {
                const windowHeight = window.innerHeight;
                const maxHeight = windowHeight / 3;

                const { height, top } = optionsWrapper.getBoundingClientRect();
                const dropdownHeight = Math.min(height, maxHeight);

                const overflowHeight = (dropdownHeight + top) - windowHeight;

                if (overflowHeight > 0) {
                    optionsWrapper.style.top = 'auto';
                    optionsWrapper.style.bottom = '0';
                }

                optionsWrapper.style.height = `min(${height}px, ${maxHeight}px)`;
                optionsWrapper.style.opacity = '1';
            });
        } else {
            optionsWrapper.style.height = '0';
        }
    }, [isOpen]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => {
                window.addEventListener('click', onCloseDropdown);
            });
        }

        return () => {
            if (isOpen) {
                window.removeEventListener('click', onCloseDropdown);
            }
        };
    }, [isOpen, onCloseDropdown]);

    return (
        <StyledLabelrDropdownRoot 
            className={size}
            role="select"
            isOpen={isOpen}
            isDisabled={isDisabledDropdown}
            fluid={fluid}
            elementState={elementState}
            ellipsisLine={ellipsisLine}
            onClick={onClickDropdown}
            onMouseEnter={() => {
                if (elementState !== labelrDropdownStateMapper.FOCUS) {
                    onChangeElementState(labelrDropdownStateMapper.HOVER);
                }
            }}
            onMouseLeave={() => {
                if (elementState !== labelrDropdownStateMapper.FOCUS) {
                    onChangeElementState(labelrDropdownStateMapper.NORMAL);
                }
            }}>
            <div className="valueWrapper">
                <div className={classNames([
                    'valueWrapper-value',
                    { isBlankValue: !value }
                ])}>
                    {internalText}
                </div>

                <div className="valueWrapper-iconWrapper">
                    <FiChevronUp
                        className="valueWrapper-iconWrapper-icon"
                        size="12px"
                        strokeWidth="4px" />
                </div>
            </div>

            <div className="optionsWrapper" ref={optionsWrapperRef}>
                {items.map(({ value, text }) => (
                    <div 
                        role="option"
                        aria-selected="true"
                        key={value as string}
                        onClick={() => onChange(value)}>
                        {renderText({ value, text })}
                    </div>
                ))}
            </div>
        </StyledLabelrDropdownRoot>
    );
}

export default LabelrDropdown;
