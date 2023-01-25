// react
import {
    useMemo,
    memo,
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledLabelrAddonInvalidMessagesRoot = styled.div<{
    fluid?: boolean;
}>`
    width: ${({ fluid }) => fluid ? '100%' : '180px'};
    display: inline-flex;
    flex-direction: column;

    transition: all 0.28s ease;

    .invalidMessages {
        margin-top: 4px;
        display: inline-flex;
        flex-direction: column;

        &-message {
            color: ${({ theme }) => theme.colors.red[400]};
            font-size: 10px;
            line-height: 16px;
            font-weight: 400;
        }
    }
`;

export type TLabelrAddonInvalidMessagesProps = PropsWithChildren<{
    invalidMessages: string[];
    fluid?: boolean;
}>;

function LabelrAddonInvalidMessages(props: TLabelrAddonInvalidMessagesProps) {
    const {
        invalidMessages,
        fluid,
        children,
    } = props;

    const isShowInvalidMessages = useMemo(() => {
        return invalidMessages?.length > 0;
    }, [invalidMessages]);

    return (
        <StyledLabelrAddonInvalidMessagesRoot fluid={fluid}>
            {children}

            {isShowInvalidMessages && (
                <ul className="invalidMessages">
                    {invalidMessages.map((message, index) => (
                        <li 
                            key={index}
                            className="invalidMessages-message">
                            {message}
                        </li>
                    ))}
                </ul>
            )}
        </StyledLabelrAddonInvalidMessagesRoot>
    );
}

export default memo(LabelrAddonInvalidMessages);
