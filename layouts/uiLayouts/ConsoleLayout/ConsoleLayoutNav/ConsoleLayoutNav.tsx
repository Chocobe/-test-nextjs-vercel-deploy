// react
import {
    useMemo,
    memo,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
// styled
import styled from 'styled-components';
import { 
    consoleRouteMapper,
} from '@/router/routeMappers/consoleRouteMapper';
// UI component
import ConsoleLayoutNavItem from './ConsoleLayoutNavItem';

const StyledConsoleLayoutNavRoot = styled.nav`
    //

    .consoleLayoutNavList {
        //

        &-item {
            padding: 8px;
        }
    }
`;

function ConsoleLayoutNav() {
    // hooks
    const router = useRouter();

    // cache
    const currentPathName = useMemo(() => {
        return router.pathname;
    }, [router]);

    const navItems = useMemo(() => {
        return Object
            .values(consoleRouteMapper)
            .map(({ name, path, NavIconComponent }) => {
                return { name, path, NavIconComponent };
            });
    }, []);

    return (
        <StyledConsoleLayoutNavRoot>
            <ul className="consoleLayoutNavList">
                {navItems.map(({ name, path, NavIconComponent }) => (
                    <li 
                        key={name}
                        className="consoleLayoutNavList-item">
                        <ConsoleLayoutNavItem
                            name={name}
                            path={path}
                            isActive={currentPathName === path}>
                            <NavIconComponent />
                        </ConsoleLayoutNavItem>
                    </li>
                ))}
            </ul>
        </StyledConsoleLayoutNavRoot>
    );
}

export default memo(ConsoleLayoutNav);
