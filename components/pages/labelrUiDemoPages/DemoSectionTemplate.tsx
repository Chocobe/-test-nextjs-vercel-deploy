// react
import {
    memo,
    PropsWithChildren,
} from 'react';
// styled-components
import styled from 'styled-components';

const StyledDemoSectionTemplateRoot = styled.div`
    width: 100%;
    height: 100%;

    display: grid;
    grid-template-columns: 1fr minmax(200px, max-content);
    gap: 20px;
    overflow: hidden;

    .demoComponentWrapper {
        overflow: auto;
    }

    .propsWrapper {
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
    
    return (
        <StyledDemoSectionTemplateRoot>
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