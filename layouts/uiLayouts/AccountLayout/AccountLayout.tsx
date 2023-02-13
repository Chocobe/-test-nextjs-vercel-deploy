// react
import {
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledAccountLayoutRoot = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${({ theme }) => theme.colors.gs[50]};

    display: flex;
    justify-content: center;
    align-items: center;

    .main {
        padding: 80px;

        width: 100%;
        max-width: 560px;
        background-color: ${({ theme }) => theme.colors.white};
        border-radius: 8px;
    }
`;

function AccountLayout(props: PropsWithChildren) {
    return (
        <StyledAccountLayoutRoot>
            <main className="main">
                {props. children}
            </main>
        </StyledAccountLayoutRoot>
    );
}

export default AccountLayout;