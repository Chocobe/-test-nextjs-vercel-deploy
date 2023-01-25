// react
import {
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledAuthLayoutRoot = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colorsOfDesignSystem.neutral.bs['50']};

    display: flex;
    justify-content: center;
    align-items: center;

    .main {
        padding: 80px;

        width: 100%;
        max-width: 560px;
        background-color: ${({ theme }) => theme.colorsOfDesignSystem.blackAndWhite.white};
    }
`;

function AuthLayout(props: PropsWithChildren) {
    return (
        <StyledAuthLayoutRoot>
            <main className="main">
                {props. children}
            </main>
        </StyledAuthLayoutRoot>
    );
}

export default AuthLayout;