// react
import {
    PropsWithChildren,
} from 'react';
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

    .ConsoleLayout {
        &-header {
            flex: 0;
        }
        
        &-body {
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

        &-footer {
            flex: 0;
        }
    }
`;

function ConsoleLayout(props: PropsWithChildren) {
    return (
        <StyledConsoleLayoutRoot>
            {/* header */}
            <div className="ConsoleLayout-header">
                <div style={{ padding: '20px', backgroundColor: '#2785cd' }}>
                    Console Header
                </div>
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
                <div style={{ padding: '20px', backgroundColor: '#006400' }}>
                    Console Footer
                </div>
            </div>
        </StyledConsoleLayoutRoot>
    );
}

export default ConsoleLayout;
