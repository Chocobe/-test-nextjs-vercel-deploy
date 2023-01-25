// react
import {
    memo,
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledLabelrAddonInvalidMessagesRoot = styled.div`
    .invalidMessages {
        display: inline-block;

        &-message {
            display: inline-block;
        }
    }
`;

export type TLabelrAddonInvalidMessagesProps = PropsWithChildren<{
    invalidMessages: string[];
}>;

function LabelrAddonInvalidMessages(props: TLabelrAddonInvalidMessagesProps) {
    const {
        invalidMessages,
        children,
    } = props;

    return (
        <StyledLabelrAddonInvalidMessagesRoot>
            {children}

            <ul className="invalidMessages">
                {invalidMessages.map((message, index) => (
                    <li 
                        key={index}
                        className="invalidMessages-message">
                        {message}
                    </li>
                ))}
            </ul>
        </StyledLabelrAddonInvalidMessagesRoot>
    );
}

export default memo(LabelrAddonInvalidMessages);
