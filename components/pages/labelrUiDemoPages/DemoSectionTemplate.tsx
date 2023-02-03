// react
import {
    memo,
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';
import useThemeModeState from '@/styles/ThemeModeContext/hooks/useThemeModeState';
// types
import { 
    themeModeNameMapper, 
    TThemeModeName
} from '@/styles/uiThemeMode/themeModeNameMapper';

const StyledDemoSectionTemplateRoot = styled.div<{
    themeMode: TThemeModeName;
}>`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr minmax(200px, max-content);
    overflow: hidden;

    .demoComponentWrapper {
        padding: 20px;
        overflow: auto;
        background-color: ${({ themeMode }) => themeMode === themeModeNameMapper.LIGHT ? '#fff' : '#000'};
        transition: all 0.28s ease;
    }

    .propsWrapper {
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        overflow: auto;

        &-prop {
            display: flex;
            align-items: center;
            gap: 8px;
        }
    }
`;

export type TDemoSectionPropItem = {
    name: string;
    inputElement: JSX.Element;
};

export type TDemoSectionTemplateProps = PropsWithChildren<{
    propItems: TDemoSectionPropItem[];
}>;

function DemoSectionTemplate(props: TDemoSectionTemplateProps) {
    const {
        propItems,
        children,
    } = props;

    const { themeMode } = useThemeModeState();
    
    return (
        <StyledDemoSectionTemplateRoot
            themeMode={themeMode}>
            <div className="demoComponentWrapper">
                {children}
            </div>

            <div className="propsWrapper">
                {propItems.map(({ name, inputElement }) => (
                    <div
                        key={name}
                        className="propsWrapper-prop">
                        <label htmlFor={name}>
                            {name}
                        </label>

                        {inputElement}
                    </div>
                ))}
            </div>
        </StyledDemoSectionTemplateRoot>
    );
}

export default memo(DemoSectionTemplate);