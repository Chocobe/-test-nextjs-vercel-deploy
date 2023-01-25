import { RoutePathFactory } from './RoutePathFactory';
import {
    LabelrInputDemoSection,
    LabelrInputEmailDemoSection,
    LabelrInputPasswordDemoSection,
} from '@/components/pages/labelrUiDemoPages/demoSections';

export const labelrUiDemoRouteMapper = {
    input: {
        title: 'LabelrInput',
        path: RoutePathFactory['/labelrUiDemo/[demoName]']('input'),
        DemoSectionComponent: LabelrInputDemoSection,
    },
    inputEmail: {
        title: 'LabelrInputEmail',
        path: RoutePathFactory['/labelrUiDemo/[demoName]']('inputEmail'),
        DemoSectionComponent: LabelrInputEmailDemoSection,
    },
    inputPassword: {
        title: 'LabelrInputPassword',
        path: RoutePathFactory['/labelrUiDemo/[demoName]']('inputPassword'),
        DemoSectionComponent: LabelrInputPasswordDemoSection,
    },
} as const;

export type TLabelrUiDemoRouteMapperKey = keyof typeof labelrUiDemoRouteMapper;
