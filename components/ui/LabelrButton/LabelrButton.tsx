// react
import {
    useState,
    useEffect,
    memo,
    PropsWithChildren,
    MouseEventHandler,
    ReactNode,
    useCallback,
} from 'react';
// styled-components
import styled, {
    css,
} from 'styled-components';
// types
import { 
    labelrButtonElementStateMapper,
    labelrButtonVariantMapper,
    labelrButtonSizeMapper,

    TLabelrButtonVariant,
    TLabelrButtonElementState,
    TLabelrButtonSize,
} from './labelrButtonTypes';

const StyledLabelrButtonRoot = styled.button<{
    variant: TLabelrButtonVariant;
    elementState: TLabelrButtonElementState;
    fluid?: boolean;
}>`
    ${({ theme, variant, elementState, fluid }) => {
        const {
            color,
            backgroundColor,
            border,
        } = theme.uiThemeMode.button[variant][elementState];

        return css`
            padding: 8px 15px;
            width: ${fluid ? '100%' : 'fit-content'};

            display: inline-flex;
            justify-content: center;
            align-items: center;
            gap: 8px;

            background-color: ${backgroundColor};
            border-radius: 4px;
            border: ${border};
            transition: all 0.28s ease;

            cursor: ${elementState === labelrButtonElementStateMapper.DISABLED ? 'default' : 'pointer'};
            pointer-events: ${elementState === labelrButtonElementStateMapper.DISABLED ? 'none' : 'auto'};

            .buttonElement {
                color: ${color};
                font-size: 14px;
                font-weight: 500;
                line-height: 22px;
                text-align: center;

                user-select: none;
                transition: all 0.28s ease;
            }

            .leftAddonElement,
            .rightAddonElement {
                flex: 0;
            }

            // size: small
            ${`&.${labelrButtonSizeMapper.SMALL}`} {
                padding: 6px 11px;
                gap: 4px;

                .buttonElement {
                    font-size: 12px;
                    line-height: 18px;
                }
            }

            // size: large
            ${`&.${labelrButtonSizeMapper.LARGE}`} {
                padding: 12px 15px;
                gap: 8px;

                .buttonElement {
                    font-size: 14px;
                    line-height: 22px;
                }
            }
            
            // size: huge
            ${`&.${labelrButtonSizeMapper.HUGE}`} {
                padding: 15px 19px;
                gap: 8px;

                .buttonElement {
                    font-size: 16px;
                    line-height: 24px;
                }
            }
        `;
    }}
`;

export type TLabelrButtonProps = PropsWithChildren<{
    variant?: TLabelrButtonVariant;
    size?: TLabelrButtonSize;
    isDisabled?: boolean;
    fluid?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    slots?: {
        LeftAddonElement: ((props: TLabelrButtonProps) => ReactNode) | null;
        RightAddonElement: ((props: TLabelrButtonProps) => ReactNode) | null;
    };
}>;

function LabelrButton(props: TLabelrButtonProps) {
    const {
        variant = labelrButtonVariantMapper.BRAND,
        size = labelrButtonSizeMapper.REGULAR,
        isDisabled,
        fluid,
        onClick,
        slots,
        children,
    } = props;

    // state
    const [elementState, setElementState] = 
        useState<TLabelrButtonElementState>(labelrButtonElementStateMapper.NORMAL);

    // callback
    const onClickButton = useCallback<MouseEventHandler<HTMLButtonElement>>(e => {
        if (elementState === labelrButtonElementStateMapper.DISABLED) {
            return;
        }

        onClick(e);
    }, [elementState, onClick]);
    
    const onMouseEvent = useCallback((nextElementState: TLabelrButtonElementState) => {
        if (elementState === labelrButtonElementStateMapper.DISABLED) {
            return;
        }

        setElementState(nextElementState);
    }, [elementState]);

    // effect
    useEffect(() => {
        setElementState(isDisabled
            ? labelrButtonElementStateMapper.DISABLED
            : labelrButtonElementStateMapper.NORMAL
        );
    }, [isDisabled]);
    
    return (
        <StyledLabelrButtonRoot 
            role="button"
            className={size}
            elementState={elementState}
            variant={variant}
            fluid={fluid}
            onClick={onClickButton}
            onMouseEnter={() => onMouseEvent(labelrButtonElementStateMapper.HOVER)}
            onMouseLeave={() => onMouseEvent(labelrButtonElementStateMapper.NORMAL)}
            onMouseDown={() => onMouseEvent(labelrButtonElementStateMapper.ACTIVE)}
            onMouseUp={() => onMouseEvent(labelrButtonElementStateMapper.HOVER)}>
            {slots?.LeftAddonElement && (
                <div className="leftAddonElement">
                    {slots.LeftAddonElement(props)}
                </div>
            )}

            <div className="buttonElement">
                {children}
            </div>

            {slots?.RightAddonElement && (
                <div className="rightAddonElement">
                    {slots.RightAddonElement(props)}
                </div>
            )}
        </StyledLabelrButtonRoot>
    );
}

export default memo(LabelrButton);
