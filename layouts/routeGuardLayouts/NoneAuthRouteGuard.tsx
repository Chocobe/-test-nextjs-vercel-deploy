// react
import {
    useCallback,
    useState,
} from 'react';
// UI Components
import RouteGuardTemplate, {
    TRouteGuardProps,
} from './RouteGuardTemplate';

function NoneAuthRouteGuard(props: TRouteGuardProps) {
    const {
        redirectUrlWhenInvalidRoute,
        children,
    } = props;

    const [randomValue] = useState(Math.floor(Math.random() * 10));

    // FIXME: 로그인 기능 구현 후, slice 에서 로그인 정보로 검사하기
    const onCheckIsRouteValid = useCallback(() => {
        return randomValue > 4;
    }, [randomValue]);

    return (
        <RouteGuardTemplate 
            redirectUrlWhenInvalidRoute={redirectUrlWhenInvalidRoute}
            onCheckIsRouteValid={onCheckIsRouteValid}>
            {children}
        </RouteGuardTemplate>
    );
}

export default NoneAuthRouteGuard;