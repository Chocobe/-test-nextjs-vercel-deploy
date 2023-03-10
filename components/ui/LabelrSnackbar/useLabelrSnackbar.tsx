// react
import {
    ReactNode,
    useCallback,
} from 'react';
// type
import {
    TUseLabelrSnackbarType,
    TUseLabelrSnackbarOptions,
    TRenderLabelrSnackbarParams,
} from './useLabelrSnackbarTypes';
// chakra ui
import {
    useToast,
    ToastPosition,
    StyleProps,
} from '@chakra-ui/react';
import LabelrSnackbar from './LabelrSnackbar';
import { useTheme } from 'styled-components';

export const useLabelrSnackbar = (initialOptions: TUseLabelrSnackbarOptions = {}) => {
    const {
        type: initialType = 'sky',
        position: initialPosition = 'top',
        content: initialContent = '',
        duration: initialDuration = 3000,
    } = initialOptions;

    // hook
    const theme = useTheme();
    const toast = useToast({
        duration: 1000 * 3,
    });

    // renderer
    const renderSnackbar = useCallback((params: TRenderLabelrSnackbarParams) => {
        const {
            type,
            content,
            close,
        } = params;

        return (
            <LabelrSnackbar 
                type={type}
                close={close}>
                {content}
            </LabelrSnackbar>
        );
    }, []);

    // method
    const getContainerStyle = useCallback((
        type: TUseLabelrSnackbarType
    ) => {
        let backgroundColor = '';

        switch(type) {
            case 'sky': 
                backgroundColor = theme.colors.brand['500'];
                break;
            case 'safe':
                backgroundColor = theme.colors.green['500'];
                break;
            case 'danger':
                backgroundColor = theme.colors.red['400'];
                break;
        }

        return {
            margin: '10px 0',
            padding: '16px 20px',

            width: '100%',
            minWidth: '0',
            maxWidth: '480px',
            borderRadius: '8px',
            backgroundColor,
        } as StyleProps;
    }, [theme]);

    const openLabelrSnackbar = useCallback((options: TUseLabelrSnackbarOptions = {}) => {
        const {
            type,
            position,
            content,
            duration,
        } = options;

        const snackbarOptions = {
            position: (position ?? initialPosition) as ToastPosition,
            containerStyle: getContainerStyle(type ?? initialType),
            duration: duration ?? initialDuration,
            render() {
                return renderSnackbar({
                    type: type ?? initialType,
                    content: (content ?? initialContent) as ReactNode,
                    close: () => {
                        toast.close(toastId);
                    },
                });
            },
        };

        const toastId = toast(snackbarOptions);
    }, [
        initialPosition, initialType, 
        initialContent, initialDuration, toast, 
        getContainerStyle, renderSnackbar,
    ]);

    return {
        openLabelrSnackbar,
    };
};
