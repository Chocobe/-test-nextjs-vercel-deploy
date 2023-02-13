// react
import {
    PropsWithChildren,
} from 'react';
// UI component
import ConsoleLayoutHeader from './ConsoleLayoutHeader';
import ConsoleLayoutNav from './ConsoleLayoutNav/ConsoleLayoutNav';
import ConsoleLayoutFooter from './ConsoleLayoutFooter';
// styled-components
import styled from 'styled-components';

const StyledConsoleLayoutRoot = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    .ConsoleLayout-header {
        flex: 0;
    }

    .ConsoleLayout-body {
        flex: 1;
        display: flex;

        &-navWrapper {
            flex-shrink: 0;
            background-color: ${({ theme }) => theme.colors.white};
            border-right: 1px solid ${({ theme }) => theme.colors.gs[200]};
        }

        &-contentWrapper {
            flex: 1;
            width: 100%;
            background-color: ${({ theme }) => theme.colors.gs[50]};
        }
    }

    .ConsoleLayout-footer {
        flex: 0;
    }
`;

function ConsoleLayout(props: PropsWithChildren) {
    return (
        <StyledConsoleLayoutRoot>
            {/* header */}
            <div className="ConsoleLayout-header">
                <ConsoleLayoutHeader />
            </div>

            {/* body */}
            <div className="ConsoleLayout-body">
                <div className="ConsoleLayout-body-navWrapper">
                    <ConsoleLayoutNav />
                </div>

                <div className="ConsoleLayout-body-contentWrapper">
                    {props.children}
                </div>
            </div>

            {/* footer */}
            <div className="ConsoleLayout-footer">
                <ConsoleLayoutFooter />
            </div>
        </StyledConsoleLayoutRoot>
    );
}

export default ConsoleLayout;
