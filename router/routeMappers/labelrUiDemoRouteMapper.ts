import { RoutePathFactory } from '../RoutePathFactory';
import {
    LabelrButtonDemoSection,
    LabelrSocialButtonDemoSection,

    LabelrInputDemoSection,
    LabelrInputEmailDemoSection,
    LabelrInputPasswordDemoSection,
    LabelrInputConfirmDemoSection,
    LabelrDropdownDemoSection,

    UseLabelrSnackbarDemoSection,
    LabelrPopoverDemoSection,

    LabelrBreadcrumbDemoSection,
} from '@/components/pages/labelrUiDemoPages/demoSections';

export const labelrUiDemoRouteMapper = {
    /** buttons */
    button: {
        name: 'LabelrButton',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('button'),
        DemoSectionComponent: LabelrButtonDemoSection,
    },
    socialButton: {
        name: 'LabelrSocialButton',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('socialButton'),
        DemoSectionComponent: LabelrSocialButtonDemoSection,
    },

    /** inputs */
    input: {
        name: 'LabelrInput',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('input'),
        DemoSectionComponent: LabelrInputDemoSection,
    },
    inputEmail: {
        name: 'LabelrInputEmail',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputEmail'),
        DemoSectionComponent: LabelrInputEmailDemoSection,
    },
    inputPassword: {
        name: 'LabelrInputPassword',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputPassword'),
        DemoSectionComponent: LabelrInputPasswordDemoSection,
    },
    inputConfirm: {
        name: 'LabelrInputConfirm',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('inputConfirm'),
        DemoSectionComponent: LabelrInputConfirmDemoSection,
    },
    dropdown: {
        name: 'LabelrDropdown',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('dropdown'),
        DemoSectionComponent: LabelrDropdownDemoSection,
    },

    /** Overlay */
    useSnackbar: {
        name: 'useLabelrSnackbar',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('useSnackbar'),
        DemoSectionComponent: UseLabelrSnackbarDemoSection,
    },
    popover: {
        name: 'LabelrPopover',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('popover'),
        DemoSectionComponent: LabelrPopoverDemoSection,
    },

    /** Navigation */
    breadcrumb: {
        name: 'LabelrBreadcrumb',
        path: RoutePathFactory.labelrUiDemo['/[demoName]']('breadcrumb'),
        DemoSectionComponent: LabelrBreadcrumbDemoSection,
    },
} as const;

export type TLabelrUiDemoRouteMapperKey = keyof typeof labelrUiDemoRouteMapper;
