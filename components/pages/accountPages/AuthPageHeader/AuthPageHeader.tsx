// react
import {
    useMemo,
    PropsWithChildren,
} from 'react';
// nextjs
import Link from 'next/link';
import Image from 'next/image';
// styled-components
import styled from 'styled-components';
// utils
import {
    getStaticImageFilePath,
} from '@/utils';

const StyledAuthPageHeaderRoot = styled.header`
    .linkWrapper {
        text-align: right;
        font-size: 12px;
        line-height: 18px;

        display: flex;
        justify-content: flex-end;
        align-items: flex-start;
        gap: 4px;

        .linkText {
            font-weight: 500;
        }
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
        white-space: pre-line;
    }
`;

export type TAuthPageHeaderProps = PropsWithChildren<{
    message?: string;
    linkText?: string;
    linkHref?: string;
}>;

function AuthPageHeader(props: TAuthPageHeaderProps) {
    const {
        message,
        linkText,
        linkHref = '#',
        children,
    } = props;

    const hasLinkMessage = useMemo(() => {
        return message || linkText;
    }, [message, linkText]);

    return (
        <StyledAuthPageHeaderRoot>
            {hasLinkMessage && (
                <div className="linkWrapper">
                    <div>
                        {message}
                    </div>
                    <Link href={linkHref} passHref legacyBehavior>
                        <a className="linkText">
                            {linkText}
                        </a>
                    </Link>
                </div>
            )}

            <figure className="logoWrapper">
                <Image 
                    src={getStaticImageFilePath('logo.png')} 
                    alt="로고" 
                    width={48}
                    height={48} />
            </figure>

            <h1 className="title">
                {children}
            </h1>
        </StyledAuthPageHeaderRoot>
    );
}

export default AuthPageHeader;