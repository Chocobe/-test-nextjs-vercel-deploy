// react
import Link from 'next/link';
// styled-components
import styled from 'styled-components';
// ui components
import AuthPageHeader from '../AuthPageHeader';

const StyledSigninPageRoot = styled.div`
    //
`;

function SigninPage() {
    return (
        <StyledSigninPageRoot>
            {/* AuthPageHeader */}
            <AuthPageHeader 
                prefixMessageForLink='아직 계정이 없으세요?'
                linkMessage='회원가입'
                title="로그인" />

            <div>
                input element: <input />
            </div>
            {/* AuthPageBody */}
            {/* AuthPageFooter */}

            <Link href="/labelrUiDemo">
                to Demo Page
            </Link>
        </StyledSigninPageRoot>
    );
}

export default SigninPage;