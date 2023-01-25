import {
    useMemo,
    useEffect,
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
} from '@/router/labelrUiDemoRouteMapper';

const StyledLabelrUiDemoPageRoot = styled.div`
    width: 100%;
    height: 100%;

    .demoArticle {
        padding: 20px;
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

    useEffect(() => {
        if (!demoSection) {
            router.replace(labelrUiDemoRouteMapper.input.path);
        }
    }, [router, demoSection]);

    return (
        <StyledLabelrUiDemoPageRoot>
            <article className="demoArticle">
                {demoSection}
            </article>
        </StyledLabelrUiDemoPageRoot>
    );
}

export default LabelrUiDemoPage;