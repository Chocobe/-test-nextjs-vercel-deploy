// react
import {
    useMemo,
    memo,
} from 'react';
// type
import {
    authPageFooterTypeMapper,
    TAuthPageFooterType,
} from './authPageFooterTypes';
// styled-components
import styled from 'styled-components';
// type
import { 
    labelrSocialButtonTypeMapper 
} from '@/components/ui/LabelrSocialButton/labelrSocialButtonTypes';
// UI components
import LabelrSocialButton from '@/components/ui/LabelrSocialButton/LabelrSocialButton';
// i18n
import {
    useTranslation,
} from 'react-i18next';

const StyledAuthPageFooterRoot = styled.footer`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export type TAuthPageFooterProps = {
    type: TAuthPageFooterType;
    onClickGoogle: () => void;
    onClickApple: () => void;
};

function AuthPageFooter(props: TAuthPageFooterProps) {
    const {
        type,
        onClickGoogle,
        onClickApple,
    } = props;

    // hooks
    const i18next = useTranslation();

    // cache
    const postfixButtonName = useMemo(() => {
        switch(type) {
            case authPageFooterTypeMapper.SIGNIN:
                return i18next.t('AuthPageFooter/POSTFIX_BUTTON_NAME__SIGNIN');
            case authPageFooterTypeMapper.SIGNUP:
            default:
                return i18next.t('AuthPageFooter/POSTFIX_BUTTON_NAME__SIGNUP');
        }
    }, [type, i18next]);

    return (
        <StyledAuthPageFooterRoot>
            <LabelrSocialButton
                fluid
                onClick={onClickGoogle}
                type={labelrSocialButtonTypeMapper.GOOGLE}>
                {i18next.t('AuthPageFooter/GOOGLE_BUTTON_NAME')} {postfixButtonName}
            </LabelrSocialButton>

            <LabelrSocialButton
                fluid
                onClick={onClickApple}
                type={labelrSocialButtonTypeMapper.APPLE}>
                {i18next.t('AuthPageFooter/APPLE_BUTTON_NAME')} {postfixButtonName}
            </LabelrSocialButton>
        </StyledAuthPageFooterRoot>
    );
}

export default memo(AuthPageFooter);
