import { 
    RoutePathFactory,
} from '@/router';
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
    LabelrModalDemoSection,

    LabelrBreadcrumbDemoSection,
} from '@/components/pages/labelrUiDemoPages/demoSections';

export const labelrUiDemoRouteMapper = {
    /** buttons */
    button: {
        name: 'LabelrButton',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('button'),
        DemoSectionComponent: LabelrButtonDemoSection,
    },
    socialButton: {
        name: 'LabelrSocialButton',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('socialButton'),
        DemoSectionComponent: LabelrSocialButtonDemoSection,
    },

    /** inputs */
    input: {
        name: 'LabelrInput',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('input'),
        DemoSectionComponent: LabelrInputDemoSection,
    },
    inputEmail: {
        name: 'LabelrInputEmail',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('inputEmail'),
        DemoSectionComponent: LabelrInputEmailDemoSection,
    },
    inputPassword: {
        name: 'LabelrInputPassword',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('inputPassword'),
        DemoSectionComponent: LabelrInputPasswordDemoSection,
    },
    inputConfirm: {
        name: 'LabelrInputConfirm',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('inputConfirm'),
        DemoSectionComponent: LabelrInputConfirmDemoSection,
    },
    dropdown: {
        name: 'LabelrDropdown',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('dropdown'),
        DemoSectionComponent: LabelrDropdownDemoSection,
    },

    /** Overlay */
    useSnackbar: {
        name: 'useLabelrSnackbar',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('useSnackbar'),
        DemoSectionComponent: UseLabelrSnackbarDemoSection,
    },
    popover: {
        name: 'LabelrPopover',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('popover'),
        DemoSectionComponent: LabelrPopoverDemoSection,
    },
    modal: {
        name: 'LabelrModal',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('modal'),
        DemoSectionComponent: LabelrModalDemoSection,
    },

    /** Navigation */
    breadcrumb: {
        name: 'LabelrBreadcrumb',
        path: RoutePathFactory['labelr-ui-demo']['/[demoName]']('breadcrumb'),
        DemoSectionComponent: LabelrBreadcrumbDemoSection,
    },
} as const;

export type TLabelrUiDemoRouteMapperKey = keyof typeof labelrUiDemoRouteMapper;
