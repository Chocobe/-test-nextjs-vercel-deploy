import {
    cloneElement,
    isValidElement,
    ReactNode,
    ReactElement,
} from 'react';

export const passPropsToElement = (
    element: ReactElement | ReactNode | string | null | undefined,
    callbackForMergeProps?: (originProps: Record<string, any>) => Record<string, any>
) => {
    // return isValidElement(element)
    //     ? cloneElement(element, props)
    //     : element;

    // if (isValidElement(element)) {
    //     const originProps = element.props;
    //     console.log('originProps: ', originProps);

    //     const newProps = callbackForMergeProps
    //         ? callbackForMergeProps(props)
    //         : props;

    //     return cloneElement(element, newProps);
    // }

    if (!isValidElement(element)) return element;

    const originProps = element.props;
    const newProps = callbackForMergeProps?.(originProps) ?? originProps;

    return cloneElement(element, newProps);
};