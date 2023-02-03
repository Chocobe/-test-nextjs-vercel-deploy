import {
    useState,
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
    const [isDoneCheckingRoute, setIsDoneCheckingRoute] = useState(false);
    const router = useRouter();

    useEffect(() => {
        const {
            redirectUrlWhenInvalidRoute = '/',
            onCheckIsRouteValid,
        } = props;

        const isRouteValid = onCheckIsRouteValid();

        if (!isRouteValid) {
            router.push(redirectUrlWhenInvalidRoute);
        }

        setIsDoneCheckingRoute(true);
    }, [props, router]);

    if (!isDoneCheckingRoute) {
        return props.fallback ?? null;
    }

    return <>{props.children}</>;
}

export default RouteGuardTemplate;