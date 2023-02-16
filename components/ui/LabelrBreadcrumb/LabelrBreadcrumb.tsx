// react
import {
    useMemo,
} from 'react';
// UI component
import LabelrBreadcrumbItem, { 
    TLabelrBreadcrumbItemProps,
} from './LabelrBreadcrumbItem';
// styled-components
import styled from 'styled-components';

const StyledLabelrBreadcrumbRoot = styled.ul<{
    spacing: string;
}>`
    display: flex;
    flex-wrap: wrap;

    list-style: none;

    .itemsWrapper {
        display: flex;
        
        .separator {
            margin: 0 ${({ spacing }) => spacing};

            font-size: 10px;
            line-height: 16px;
            font-weight: 500;
        }
    }
`;

export type TLabelrBreadcrumbItems = (Omit<TLabelrBreadcrumbItemProps, 'isCurrentPage'>)[];

export type TLabelrBreadcrumbProps = {
    separator?: string;
    spacing?: string;
    items: TLabelrBreadcrumbItems;
};

function LabelrBreadcrumb(props: TLabelrBreadcrumbProps) {
    const {
        separator = '〉',
        spacing = '8px',
        items,
    } = props;

    const lastItemIndex = useMemo(() => {
        return items.length - 1;
    }, [items]);

    return (
        <StyledLabelrBreadcrumbRoot spacing={spacing}>
            {items?.map(({ href, text }, index) => (
                <li
                    key={text}
                    className="itemsWrapper">
                    <LabelrBreadcrumbItem
                        key={text}
                        href={href}
                        text={text}
                        isCurrentPage={index === lastItemIndex} />

                    {index !== lastItemIndex && (
                        <div 
                            key={`${text}-separator`}
                            className="separator">
                            {separator}
                        </div>
                    )}
                </li>
            ))}
        </StyledLabelrBreadcrumbRoot>
    );
}

export default LabelrBreadcrumb;
