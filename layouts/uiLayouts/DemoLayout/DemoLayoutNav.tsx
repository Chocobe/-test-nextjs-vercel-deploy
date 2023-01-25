import Link from 'next/link';
// import { 
//     demoSectionMapper,
//     TDemoSectionMapperKey,
// } from '@/components/pages/demoPages/_demoSectionMapper';
import {
    labelrUiDemoRouteMapper,
    TLabelrUiDemoRouteMapperKey,
} from '@/router/labelrUiDemoRouteMapper';
import styled from 'styled-components';

const StyledDemoLayoutNavRoot = styled.nav`
    //

    .menuItem {
        //
    }
`;

function DemoLayoutNav() {
    return (
        <StyledDemoLayoutNavRoot>
            {Object.entries(labelrUiDemoRouteMapper).map(([key, routeData]) => {
                const {
                    title,
                    path,
                } = routeData;
                
                return (
                    <Link key={key} href={path}>
                        {title}
                    </Link>
                );
            })}
        </StyledDemoLayoutNavRoot>
    );
}

export default DemoLayoutNav;