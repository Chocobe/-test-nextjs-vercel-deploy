import { RoutePathFactory } from './RoutePathFactory';
import {
    LabelrButtonDemoSection,
    LabelrSocialButtonDemoSection,

    LabelrInputDemoSection,
    LabelrInputEmailDemoSection,
    LabelrInputPasswordDemoSection,
} from '@/components/pages/labelrUiDemoPages/demoSections';

export const labelrUiDemoRouteMapper = {
    button: {
        title: 'LabelrButton',
        path: RoutePathFactory['/labelrUiDemo/[demoName]']('button'),
        DemoSectionComponent: LabelrButtonDemoSection,
    },
    socialButton: {
        title: 'LabelrSocialButton',
        path: RoutePathFactory['/labelrUiDemo/[demoName]']('socialButton'),
        DemoSectionComponent: LabelrSocialButtonDemoSection,
    },

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
