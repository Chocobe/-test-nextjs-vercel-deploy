// nextjs
import {
    useRouter,
} from 'next/router';
// styled-components
// import { demoSectionMapper, TDemoSectionMapperKey } from '@/components/pages/demoPages/_demoSectionMapper';
import {
    labelrUiDemoRouteMapper,
    TLabelrUiDemoRouteMapperKey,
} from '@/router/labelrUiDemoRouteMapper';
import styled from 'styled-components';
import useThemeModeState from '@/styles/ThemeModeContext/hooks/useThemeModeState';
import useThemeModeDispatch from '@/styles/ThemeModeContext/hooks/useThemeModeDispatch';
import { useCallback, useMemo } from 'react';
import { actionToggleThemeMode } from '@/styles/ThemeModeContext/ThemeModeContext';
import Link from 'next/link';

const StyledDemoLayoutHeader = styled.div`
    padding: 40px 20px;
    background-color: ${({ theme }) => theme.colorsOfDesignSystem.neutral.bs['50']};

    display: flex;
    flex-direction: column;
    gap: 8px;

    .title {
        //
    }

    .themeModeController {
        display: flex;
        align-items: center;
        gap: 8px;

        cursor: pointer;

        &-checkbox {
            cursor: inherit;
        }
        
        &-label {
            user-select: none;
            cursor: inherit;
        }
    }
`;

function DemoLayoutHeader() {
    const router = useRouter();
    const demoName = router.query.demoName as TLabelrUiDemoRouteMapperKey;
    const title = labelrUiDemoRouteMapper[demoName]?.title;

    const themeMode = useThemeModeState();
    const dispatchThemeMode = useThemeModeDispatch();

    const isLightTheme = useMemo(() => {
        return themeMode.themeMode === 'dark';
    }, [themeMode]);

    const themeModeName = useMemo(() => {
        return themeMode.themeMode;
    }, [themeMode]);

    const toggleThemeMode = useCallback(() => {
        dispatchThemeMode(actionToggleThemeMode());
    }, [dispatchThemeMode]);

    return (
        <StyledDemoLayoutHeader>
            <h1 className="title">
                {title}
            </h1>

            <div className="themeModeController">
                <input
                    id="themeModeControllerSwitch"
                    className="themeModeController-checkbox"
                    type="checkbox"
                    checked={isLightTheme}
                    onChange={toggleThemeMode} />

                <label
                    htmlFor="themeModeControllerSwitch"
                    className="themeModeController-label">
                    Theme ({themeModeName})
                </label>
            </div>

            <div>
                <Link href="/">메인 페이지로 이동</Link>
            </div>
        </StyledDemoLayoutHeader>
    );
}

export default DemoLayoutHeader;