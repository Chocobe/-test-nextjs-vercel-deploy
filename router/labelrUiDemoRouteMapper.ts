import { RoutePathFactory } from './RoutePathFactory';
import {
    LabelrInputDemoSection,
} from '@/components/pages/labelrUiDemoPages/demoSections';

export const labelrUiDemoRouteMapper = {
    input: {
        title: 'LabelrInput',
        path: RoutePathFactory['/labelrUiDemo/[demoName]']('input'),
        DemoSectionComponent: LabelrInputDemoSection,
    },
} as const;

export type TLabelrUiDemoRouteMapperKey = keyof typeof labelrUiDemoRouteMapper;