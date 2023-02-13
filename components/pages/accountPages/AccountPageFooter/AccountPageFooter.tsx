// react
import {
    useMemo,
    memo,
} from 'react';
// type
import {
    accountPageFooterTypeMapper,
    TAccountPageFooterType,
} from './accountPageFooterTypes';
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

const StyledAccountPageFooterRoot = styled.footer`
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 8px;
`;

export type TAccountPageFooterProps = {
    type: TAccountPageFooterType;
    onClickGoogle: () => void;
    onClickApple: () => void;
};

function AccountPageFooter(props: TAccountPageFooterProps) {
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
            case accountPageFooterTypeMapper.SIGNIN:
                return i18next.t('AccountPageFooter/POSTFIX_BUTTON_NAME__SIGNIN');
            case accountPageFooterTypeMapper.SIGNUP:
            default:
                return i18next.t('AccountPageFooter/POSTFIX_BUTTON_NAME__SIGNUP');
        }
    }, [type, i18next]);

    return (
        <StyledAccountPageFooterRoot>
            <LabelrSocialButton
                fluid
                onClick={onClickGoogle}
                type={labelrSocialButtonTypeMapper.GOOGLE}>
                {i18next.t('AccountPageFooter/GOOGLE_BUTTON_NAME')} {postfixButtonName}
            </LabelrSocialButton>

            <LabelrSocialButton
                fluid
                onClick={onClickApple}
                type={labelrSocialButtonTypeMapper.APPLE}>
                {i18next.t('AccountPageFooter/APPLE_BUTTON_NAME')} {postfixButtonName}
            </LabelrSocialButton>
        </StyledAccountPageFooterRoot>
    );
}

export default memo(AccountPageFooter);
