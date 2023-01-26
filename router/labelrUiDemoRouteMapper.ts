import { RoutePathFactory } from './RoutePathFactory';
import {
    LabelrInputDemoSection,
    LabelrInputEmailDemoSection,
    LabelrInputPasswordDemoSection,
    LabelrButtonDemoSection,
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

    button: {
        title: 'LabelrButton',
        path: RoutePathFactory['/labelrUiDemo/[demoName]']('button'),
        DemoSectionComponent: LabelrButtonDemoSection,
    },
} as const;

export type TLabelrUiDemoRouteMapperKey = keyof typeof labelrUiDemoRouteMapper;
