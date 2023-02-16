// nextjs
import Link from 'next/link';
// styled-components
import styled, {
    css,
} from 'styled-components';

const StyledLabelrBreadcrumbItemRoot = styled.a<{
    isCurrentPage?: boolean;
}>`
    color: ${({ theme }) => theme.colors.gs[800]};
    font-size: 10px;
    line-height: 16px;
    font-weight: 500;

    transition: all 1s ease;

    ${({ isCurrentPage }) => isCurrentPage && css`
        color: ${({ theme }) => theme.colors.indigo[500]};
        font-weight: 600;

        pointer-events: none;

        &:hover {
            text-decoration: none;
        }
    `}

    :hover {
        text-decoration: underline;
    }
`;

export type TLabelrBreadcrumbItemProps = {
    href: string;
    text: string;
    isCurrentPage?: boolean;
};

function LabelrBreadcrumbItem(props: TLabelrBreadcrumbItemProps) {
    const {
        href,
        text,
        isCurrentPage,
    } = props;

    return (
        <Link 
            href={href}
            passHref
            legacyBehavior>
            <StyledLabelrBreadcrumbItemRoot isCurrentPage={isCurrentPage}>
                {text}
            </StyledLabelrBreadcrumbItemRoot>
        </Link>
    );
}

export default LabelrBreadcrumbItem;
