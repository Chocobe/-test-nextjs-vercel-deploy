// react
import {
    useMemo,
} from 'react';
// nextjs
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
// utils
import {
    getStaticImageFilePath,
} from '@/utils/getStaticFilePath';

const StyledAuthPageHeaderRoot = styled.header`
    .linkWrapper {
        text-align: right;
        font-size: 12px;
        line-height: 18px;

        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 4px;
    }

    .logoWrapper {
        margin-top: 20px;
        
        .logoImg {
            //
        }
    }

    .title {
        margin-top: 20px;
        font-size: 32px;
        line-height: 48px;
    }
`;

export type TAuthPageHeaderProps = {
    prefixMessageForLink?: string;
    linkMessage?: string;
    linkHref?: string;
    title: string;
};

function AuthPageHeader(props: TAuthPageHeaderProps) {
    const {
        prefixMessageForLink,
        linkMessage,
        linkHref = '#',
        title,
    } = props;

    const hasLinkMessage = useMemo(() => {
        return prefixMessageForLink || linkMessage;
    }, [prefixMessageForLink, linkMessage]);

    return (
        <StyledAuthPageHeaderRoot>
            {hasLinkMessage && (
                <div className="linkWrapper">
                    <div>
                        {prefixMessageForLink}
                    </div>
                    <Link href={linkHref} passHref legacyBehavior>
                        <a>
                            {linkMessage}
                        </a>
                    </Link>
                </div>
            )}

            <figure className="logoWrapper">
                <img 
                    src={getStaticImageFilePath('logo.png')} 
                    alt="로고" 
                    width="48px"
                    height="48px" />
            </figure>

            <h1 className="title">
                {title}
            </h1>
        </StyledAuthPageHeaderRoot>
    );
}

export default AuthPageHeader;