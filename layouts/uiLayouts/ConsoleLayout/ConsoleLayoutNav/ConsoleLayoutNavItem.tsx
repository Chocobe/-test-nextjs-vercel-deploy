// react
import {
    useMemo,
    useCallback,
    cloneElement,
    memo,
    ReactElement,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
// styled-components
import styled, {
    useTheme,
} from 'styled-components';

const StyledConsoleLayoutNavItemRoot = styled.div<{
    isActive: boolean;
}>`
    padding: 10px;
    cursor: pointer;

    position: relative;

    &::before {
        content: '';

        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        width: 4px;
        height: 4px;
        border-radius: 50%;
        background-color: ${({ theme }) => theme.colors.brand[500]};
        opacity: ${({ isActive }) => isActive ? 1 : 0};

        transition: all 1s ease;
    }
`;

export type TConsoleLayoutNavItemProps = {
    name: string;
    path: string;
    isActive: boolean;
    children: ReactElement;
};

function ConsoleLayoutNavItem(props: TConsoleLayoutNavItemProps) {
    const {
        // name,
        path,
        isActive,
        children,
    } = props;

    const NAV_ICON_OPACITY = useMemo(() => ({
        NORMAL: 0.5,
        ACTIVE: 1,
    }) as const, []);

    // hook
    const router = useRouter();
    const theme = useTheme();

    // renderer
    const renderNavIcon = useCallback(() => {
        if (!children) {
            return null;
        }

        return cloneElement(children as ReactElement, {
            size: '20px',
            color: theme.colors.brand[500],
            opacity: isActive
                ? NAV_ICON_OPACITY.ACTIVE
                : NAV_ICON_OPACITY.NORMAL,
            style: {
                transition: 'all 1s ease',
            },
        });
    }, [
        isActive, children, 
        theme, NAV_ICON_OPACITY,
    ]);

    const onClick = useCallback(() => {
        if (!router.isReady || router.pathname === path) {
            return;
        }

        router.push(path);
    }, [path, router]);

    return (
        <StyledConsoleLayoutNavItemRoot 
            isActive={isActive}
            onClick={onClick}>
            {renderNavIcon()}
        </StyledConsoleLayoutNavItemRoot>
    );
}

export default memo(ConsoleLayoutNavItem);
