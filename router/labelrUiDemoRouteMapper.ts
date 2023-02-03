import { RoutePathFactory } from './RoutePathFactory';
import {
    LabelrButtonDemoSection,
    LabelrSocialButtonDemoSection,

    LabelrInputDemoSection,
    LabelrInputEmailDemoSection,
    LabelrInputPasswordDemoSection,
    LabelrInputConfirmDemoSection,

    UseLabelrSnackbarDemoSection,
} from '@/components/pages/labelrUiDemoPages/demoSections';

export const labelrUiDemoRouteMapper = {
    /** buttons */
    button: {
        title: 'LabelrButton',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
        DemoSectionComponent: LabelrButtonDemoSection,
    },
    socialButton: {
        title: 'LabelrSocialButton',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('socialButton'),
        DemoSectionComponent: LabelrSocialButtonDemoSection,
    },

    /** inputs */
    input: {
        title: 'LabelrInput',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('input'),
        DemoSectionComponent: LabelrInputDemoSection,
    },
    inputEmail: {
        title: 'LabelrInputEmail',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputEmail'),
        DemoSectionComponent: LabelrInputEmailDemoSection,
    },
    inputPassword: {
        title: 'LabelrInputPassword',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputPassword'),
        DemoSectionComponent: LabelrInputPasswordDemoSection,
    },
    inputConfirm: {
        title: 'LabelrInputConfirm',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputConfirm'),
        DemoSectionComponent: LabelrInputConfirmDemoSection,
    },

    /** Overlay */
    useSnackbar: {
        title: 'useLabelrSnackbar',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('useSnackbar'),
        DemoSectionComponent: UseLabelrSnackbarDemoSection,
    },
} as const;

export type TLabelrUiDemoRouteMapperKey = keyof typeof labelrUiDemoRouteMapper;
