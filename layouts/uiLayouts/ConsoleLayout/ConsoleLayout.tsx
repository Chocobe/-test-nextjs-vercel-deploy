// react
import {
    PropsWithChildren,
} from 'react';
// UI component
import ConsoleLayoutHeader from './ConsoleLayoutHeader';
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

    background-color: rgba(180, 200, 90, 0.5);

    .ConsoleLayout-header {
        flex: 0;
    }

    .ConsoleLayout-body {
        flex: 1;
        display: flex;

        &-navWrapper {
            flex-shrink: 0;
            background-color: #d199e2;
        }

        &-contentWrapper {
            flex: 1;
            width: 100%;
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
                <nav className="ConsoleLayout-body-navWrapper">
                    <div>NavItem 1</div>
                    <div>NavItem 2</div>
                    <div>NavItem 3</div>
                    <div>NavItem 4</div>
                    <div>NavItem 5</div>
                </nav>

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
