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
// UI components
import LabelrButton from '../LabelrButton/LabelrButton';
// utils
import { 
    getStaticImageFilePath,
} from '@/utils/getStaticFilePath';

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
        return function Hello() {
            switch(type) {
                case labelrSocialButtonTypeMapper.GOOGLE:
                    return <Image 
                        src={getStaticImageFilePath('social-icon-google.svg')} 
                        alt="Google 로그인" 
                        width={iconSize} 
                        height={iconSize} />;
                case labelrSocialButtonTypeMapper.APPLE:
                default:
                    return <Image
                        src={getStaticImageFilePath('social-icon-apple.svg')} 
                        alt="Google 로그인" 
                        width={iconSize} 
                        height={iconSize} />;
            }
        };
    }, [type, iconSize]);

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