// react
import {
    useReducer,
    PropsWithChildren,
} from 'react';
// layout
import {
    accountsLayoutReducer,
    AccountsLayoutContextDispatch,
    AccountsLayoutContextState,
} from '@/contexts/accountsLayoutContext/accountsLayoutContext';
// styled-components
import styled from 'styled-components';

const StyledAccountsLayoutRoot = styled.div`
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

function AccountsLayout(props: PropsWithChildren) {
    const [state, dispatch] = useReducer(accountsLayoutReducer, accountsLayoutReducer.initialState);

    return (
        <AccountsLayoutContextDispatch.Provider value={dispatch}>
            <AccountsLayoutContextState.Provider value={state}>
                <StyledAccountsLayoutRoot>
                    <main className="main">
                        {props.children}
                    </main>
                </StyledAccountsLayoutRoot>
            </AccountsLayoutContextState.Provider>
        </AccountsLayoutContextDispatch.Provider>
    );
}

export default AccountsLayout;
