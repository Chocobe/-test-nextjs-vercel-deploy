// react
import {
    PropsWithChildren,
} from 'react';
// styled
import styled from 'styled-components';
// UI components
import DemoLayoutHeader from './DemoLayoutHeader';
import DemoLayoutNav from './DemoLayoutNav';
// import { TDemoSectionMapperKey } from '@/components/pages/demoPages/_demoSectionMapper';

const StyledDemoLayoutRoot = styled.div`
    width: 100%;
    height: 100vh;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    
    .demoMain {
        width: 100%;
        height: 100%;
        display: flex;
        overflow-y: auto;

        &-nav {
            flex-shrink: 0;
        }

        &-page {
            width: 100%;
            flex: 1;
        }
    }
`;

function DemoLayout(props: PropsWithChildren) {
    const { children } = props;

    return (
        <StyledDemoLayoutRoot>
            <DemoLayoutHeader />

            <main className="demoMain">
                <nav className="demoMain-nav">
                    <DemoLayoutNav />
                </nav>

                <div className="demoMain-page">
                    {children}
                </div>
            </main>
        </StyledDemoLayoutRoot>
    );
}

export default DemoLayout;