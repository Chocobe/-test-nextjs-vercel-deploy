import {
    useMemo,
} from 'react';
// nextjs
import {
    useRouter,
} from 'next/router';
// styled-components
import styled from 'styled-components';
// UI components
import {
    labelrUiDemoRouteMapper,
    TLabelrUiDemoRouteMapperKey,
} from '@/router/routeMappers/labelrUiDemoRouteMapper';

const StyledLabelrUiDemoPageRoot = styled.div`
    width: 100%;
    height: 100%;

    .demoArticle {
        height: 100%;
        overflow: hidden;
    }
`;

function LabelrUiDemoPage() {
    const router = useRouter();
    const demoName = router.query.demoName as TLabelrUiDemoRouteMapperKey;

    const demoSection = useMemo(() => {
        const DemoSectionComponent = labelrUiDemoRouteMapper[demoName]?.DemoSectionComponent;

        return DemoSectionComponent
            ? <DemoSectionComponent />
            : null;
    }, [demoName]);

    return (
        <StyledLabelrUiDemoPageRoot>
            <article className="demoArticle">
                {demoSection}
            </article>
        </StyledLabelrUiDemoPageRoot>
    );
}

export default LabelrUiDemoPage;
