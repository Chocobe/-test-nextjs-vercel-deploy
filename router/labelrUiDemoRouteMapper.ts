import { RoutePathFactory } from './RoutePathFactory';
import {
    LabelrButtonDemoSection,
    LabelrSocialButtonDemoSection,

    LabelrInputDemoSection,
    LabelrInputEmailDemoSection,
    LabelrInputPasswordDemoSection,
    LabelrInputConfirmDemoSection,
} from '@/components/pages/labelrUiDemoPages/demoSections';

export const labelrUiDemoRouteMapper = {
    /** buttons */
    button: {
        title: 'LabelrButton',
        // path: RoutePathFactory['/labelrUiDemo/[demoName]']('button'),
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
        DemoSectionComponent: LabelrButtonDemoSection,
    },
    socialButton: {
        title: 'LabelrSocialButton',
        // path: RoutePathFactory['/labelrUiDemo/[demoName]']('socialButton'),
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('socialButton'),
        DemoSectionComponent: LabelrSocialButtonDemoSection,
    },

    /** inputs */
    input: {
        title: 'LabelrInput',
        // path: RoutePathFactory['/labelrUiDemo/[demoName]']('input'),
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('input'),
        DemoSectionComponent: LabelrInputDemoSection,
    },
    inputEmail: {
        title: 'LabelrInputEmail',
        // path: RoutePathFactory['/labelrUiDemo/[demoName]']('inputEmail'),
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputEmail'),
        DemoSectionComponent: LabelrInputEmailDemoSection,
    },
    inputPassword: {
        title: 'LabelrInputPassword',
        // path: RoutePathFactory['/labelrUiDemo/[demoName]']('inputPassword'),
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputPassword'),
        DemoSectionComponent: LabelrInputPasswordDemoSection,
    },
    inputConfirm: {
        title: 'LabelrInputConfirm',
        // path: RoutePathFactory['/labelrUiDemo/[demoName]']('inputConfirm'),
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputConfirm'),
        DemoSectionComponent: LabelrInputConfirmDemoSection,
    },
} as const;

export type TLabelrUiDemoRouteMapperKey = keyof typeof labelrUiDemoRouteMapper;
