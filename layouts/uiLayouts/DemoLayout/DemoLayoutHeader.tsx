// react
import { 
    useMemo,
    useState,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
import Link from 'next/link';
// i18n
import { useTranslation } from 'react-i18next';
// styled-components
import styled from 'styled-components';
import useThemeModeState from '@/styles/ThemeModeContext/hooks/useThemeModeState';
import useToggleThemeMode from '@/styles/ThemeModeContext/hooks/useToggleThemeMode';
// type
import {
    labelrUiDemoRouteMapper,
    TLabelrUiDemoRouteMapperKey,
} from '@/router/labelrUiDemoRouteMapper';

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

    const themeModeState = useThemeModeState();
    const {
        toggleThemeMode,
    } = useToggleThemeMode();

    const isLightTheme = useMemo(() => {
        return themeModeState.themeMode === 'dark';
    }, [themeModeState]);

    const themeModeName = useMemo(() => {
        return themeModeState.themeMode;
    }, [themeModeState]);

    // FIXME: i18n 삭제 후, 지우기
    const i18next = useTranslation();
    const onChangeLanguage = (lang: string) => {
        i18next.i18n.changeLanguage(lang);
    };

    return (
        <StyledDemoLayoutHeader>
            <h1 className="title">
                {title} ({i18next.t('HELLO')})
            </h1>

            <select 
                value={i18next.i18n.language}
                onChange={e => onChangeLanguage(e.currentTarget.value)}>
                <option value="ko">Korean</option>
                <option value="en">English</option>
            </select>

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