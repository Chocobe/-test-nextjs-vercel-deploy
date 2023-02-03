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
    width: fit-content;
    height: 100%;
    
    display: flex;
    flex-direction: column;

    border-right: 1px solid ${({ theme }) => theme.colors.brand[800]};

    .menuItem {
        padding: 8px 16px;
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
    const currentPath = RoutePathFactory.labelrUiDemo['/[demoName]'](demoName);

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