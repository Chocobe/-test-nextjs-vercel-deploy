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
// styled-components
import styled from 'styled-components';
// type
import { 
    labelrSocialButtonTypeMapper 
} from '@/components/ui/LabelrSocialButton/labelrSocialButtonTypes';
// UI components
import LabelrSocialButton from '@/components/ui/LabelrSocialButton/LabelrSocialButton';

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

    // cache
    const postfixButtonName = useMemo(() => {
        switch(type) {
            case authPageFooterTypeMapper.SIGNIN:
                return '로그인';
            case authPageFooterTypeMapper.SIGNUP:
            default:
                return '회원가입';
        }
    }, [type]);

    return (
        <StyledAuthPageFooterRoot>
            <LabelrSocialButton
                fluid
                onClick={onClickGoogle}
                type={labelrSocialButtonTypeMapper.GOOGLE}>
                구글 계정으로 {postfixButtonName}
            </LabelrSocialButton>

            <LabelrSocialButton
                fluid
                onClick={onClickApple}
                type={labelrSocialButtonTypeMapper.APPLE}>
                애플 계정으로 {postfixButtonName}
            </LabelrSocialButton>
        </StyledAuthPageFooterRoot>
    );
}

export default memo(AuthPageFooter);
