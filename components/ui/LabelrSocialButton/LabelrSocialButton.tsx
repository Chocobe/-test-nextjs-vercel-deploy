// react
import {
    useMemo,
    memo,

    PropsWithChildren,
    MouseEventHandler,
} from 'react';
// nextjs
import Image from 'next/image';
// type
import {
    labelrSocialButtonTypeMapper,
    TLabelrSocialButtonType,
} from './labelrSocialButtonTypes';
import { 
    labelrButtonVariantMapper,
    labelrButtonSizeMapper,

    TLabelrButtonSize,
} from '../LabelrButton/labelrButtonTypes';
// styled-components
import styled from 'styled-components';
// UI components
import LabelrButton from '../LabelrButton/LabelrButton';
// utils
import { 
    getStaticImageFilePath,
} from '@/utils/getStaticFilePath';
// i18n
import {
    useTranslation,
} from 'react-i18next';

const StyledIconWrapper = styled.div<{
    iconSize: number;
}>`
    width: ${({ iconSize }) => `${iconSize}px`};
    height: ${({ iconSize }) => `${iconSize}px`};
`;

export type TLabelrSocialButtonProps = PropsWithChildren<{
    type: TLabelrSocialButtonType;
    size?: TLabelrButtonSize;
    isDisabled?: boolean;
    fluid?: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}>;

function LabelrSocialButton(props: TLabelrSocialButtonProps) {
    const {
        type = labelrSocialButtonTypeMapper.GOOGLE,
        size = labelrButtonSizeMapper.REGULAR,
        isDisabled,
        fluid,
        onClick,
        children,
    } = props;

    // hook
    const i18next = useTranslation();

    // cache
    const iconSize = useMemo(() => {
        switch (size) {
            case labelrButtonSizeMapper.SMALL:
                return 16;
            case labelrButtonSizeMapper.REGULAR:
            case labelrButtonSizeMapper.LARGE:
                return 18;
            case labelrButtonSizeMapper.HUGE:
                return 20;
            default:
                return 18;
        }
    }, [size]);

    const LeftAddonElement = useMemo(() => {
        return function SocialIcon() {
            switch(type) {
                case labelrSocialButtonTypeMapper.GOOGLE:
                    return (
                        <StyledIconWrapper iconSize={iconSize}>
                            <Image 
                                src={getStaticImageFilePath('social-icon-google.svg')} 
                                alt={i18next.t('LabelrSocialButton/GOOGLE_ICON_ALT')} 
                                width={iconSize} 
                                height={iconSize} />
                        </StyledIconWrapper>
                    );
                case labelrSocialButtonTypeMapper.APPLE:
                default:
                    return (
                        <StyledIconWrapper iconSize={iconSize}>
                            <Image
                                src={getStaticImageFilePath('social-icon-apple.svg')} 
                                alt={i18next.t('LabelrSocialButton/APPLE_ICON_ALT')} 
                                width={iconSize} 
                                height={iconSize} />
                        </StyledIconWrapper>
                    );
            }
        };
    }, [type, iconSize, i18next]);

    return (
        <LabelrButton
            variant={labelrButtonVariantMapper.BORDER}
            size={size}
            isDisabled={isDisabled}
            fluid={fluid}
            onClick={onClick}
            slots={{
                LeftAddonElement,
            }}>
            {children}
        </LabelrButton>
    );
}

export default memo(LabelrSocialButton);