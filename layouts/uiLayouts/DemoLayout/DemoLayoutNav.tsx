// nextjs
import Link from 'next/link';
import { useRouter } from 'next/router';
// styled-components
import styled from 'styled-components';
import classNames from 'classnames';

import {
    labelrUiDemoRouteMapper,
} from '@/router/labelrUiDemoRouteMapper';
import { RoutePathFactory } from '@/router/RoutePathFactory';

const StyledDemoLayoutNavRoot = styled.nav`
    padding: 12px;
    width: 100%;
    height: 100%;
    
    display: flex;
    flex-direction: column;

    box-shadow: -3px 0 9px ${({ theme }) => theme.colors.gs[900]};

    .menuItem {
        padding: 8px 4px;
        color: ${({ theme }) => theme.colors.gs[500]};
        font-weight: 700;
        transition: all 0.28s ease;

        &.active {
            color: ${({ theme }) => theme.colors.white};
            background-color: ${({ theme }) => theme.colors.green[700]};
        }
    }
`;

function DemoLayoutNav() {
    const router = useRouter();
    const demoName = router.query.demoName as string;
    const currentPath = RoutePathFactory['/labelrUiDemo/[demoName]'](demoName);

    return (
        <StyledDemoLayoutNavRoot>
            {Object.entries(labelrUiDemoRouteMapper).map(([key, routeData]) => {
                const {
                    title,
                    path,
                } = routeData;
                
                return (
                    <Link 
                        key={key}
                        href={path}
                        passHref
                        legacyBehavior>
                        <a className={classNames(
                            'menuItem',
                            { 'active': path === currentPath}
                        )}>
                            {title}
                        </a>
                    </Link>
                );
            })}
        </StyledDemoLayoutNavRoot>
    );
}

export default DemoLayoutNav;