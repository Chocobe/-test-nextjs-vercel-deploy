// react
import {
    useCallback,
} from 'react';
// redux
import {
    useAppSelector,
} from '@/redux/hooks';
// UI Components
import RouteGuardTemplate, {
    TRouteGuardProps,
} from './RouteGuardTemplate';
import { 
    RoutePathFactory,
} from '@/router';

function NoneAuthRouteGuard(props: TRouteGuardProps) {
    const {
        redirectUrlWhenInvalidRoute = RoutePathFactory.console['/'](),
        children,
    } = props;

    //
    // api state
    //
    const signinApiData = useAppSelector(({ accountsApi }) => accountsApi.signin.data!);

    //
    // callback
    //
    const onCheckIsRouteValid = useCallback(() => {
        const {
            accessToken,
            refreshToken,
        } = signinApiData ?? {};

        return !accessToken && !refreshToken;
    }, [signinApiData]);

    return (
        <RouteGuardTemplate 
            redirectUrlWhenInvalidRoute={redirectUrlWhenInvalidRoute}
            onCheckIsRouteValid={onCheckIsRouteValid}>
            {children}
        </RouteGuardTemplate>
    );
}

export default NoneAuthRouteGuard;
