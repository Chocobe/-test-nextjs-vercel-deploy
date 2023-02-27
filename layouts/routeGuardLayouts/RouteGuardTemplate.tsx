import {
    useState,
    useMemo,
    useEffect,
    PropsWithChildren,
    ReactElement,
} from 'react';
import {
    useRouter,
} from 'next/router';

export type TRouteGuardProps = PropsWithChildren<{
    redirectUrlWhenInvalidRoute?: string;
    fallback?: ReactElement;
}>;

export type TRouteGuardTemplateProps = TRouteGuardProps & {
    onCheckIsRouteValid: () => boolean;
};

function RouteGuardTemplate(props: TRouteGuardTemplateProps) {
    const {
        redirectUrlWhenInvalidRoute = '/',
        onCheckIsRouteValid,
    } = props;

    //
    // state
    //
    const [isDoneCheckingRoute, setIsDoneCheckingRoute] = useState(false);

    //
    // hook
    //
    const router = useRouter();

    //
    // cache
    //
    const currentRoutePath = useMemo(() => {
        return router.asPath;
    }, [router]);

    const isRouteValid = useMemo(() => {
        const isRouteValid = onCheckIsRouteValid();

        return isRouteValid;

        // eslint-disable-next-line
    }, [onCheckIsRouteValid, currentRoutePath]);

    //
    // effect
    //
    useEffect(() => {
        if (!isRouteValid && isDoneCheckingRoute) {
            router.replace(redirectUrlWhenInvalidRoute);
        }

        // eslint-disable-next-line
    }, [
        isRouteValid, redirectUrlWhenInvalidRoute, 
        currentRoutePath, isDoneCheckingRoute,
    ]);

    useEffect(() => {
        setIsDoneCheckingRoute(true);

        return () => {
            setIsDoneCheckingRoute(false);
        };
    }, [currentRoutePath]);

    if (!isDoneCheckingRoute || !isRouteValid) {
        return null;
    }

    return <>{props.children}</>;
}

export default RouteGuardTemplate;
