// react
import {
    useCallback,
} from 'react';
// UI components
import RouteGuardTemplate, {
    TRouteGuardProps,
} from './RouteGuardTemplate';

function AuthRouteGuard(props: TRouteGuardProps) {
    const {
        redirectUrlWhenInvalidRoute,
        children,
    } = props;

    const onCheckIsRouteValid = useCallback(() => {
        const hasSignin = true;

        return hasSignin;
    }, []);

    return (
        <RouteGuardTemplate 
            redirectUrlWhenInvalidRoute={redirectUrlWhenInvalidRoute}
            onCheckIsRouteValid={onCheckIsRouteValid}>
            {children}
        </RouteGuardTemplate>
    );
}

export default AuthRouteGuard;
