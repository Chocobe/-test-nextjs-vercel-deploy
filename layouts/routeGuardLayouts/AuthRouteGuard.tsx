// react
import {
    useCallback,
} from 'react';
// redux
import {
    useAppSelector,
} from '@/redux/hooks';
// UI components
import RouteGuardTemplate, {
    TRouteGuardProps,
} from './RouteGuardTemplate';

function AuthRouteGuard(props: TRouteGuardProps) {
    const {
        redirectUrlWhenInvalidRoute,
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

        return !!(accessToken && refreshToken);
    }, [signinApiData]);

    return (
        <RouteGuardTemplate 
            redirectUrlWhenInvalidRoute={redirectUrlWhenInvalidRoute}
            onCheckIsRouteValid={onCheckIsRouteValid}>
            {children}
        </RouteGuardTemplate>
    );
}

export default AuthRouteGuard;
