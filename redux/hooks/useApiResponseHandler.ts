// react
import {
    useEffect, useMemo,
} from 'react';
// type
import { 
    TApiSliceSingleState,
} from '../slices/apiSlices/apiSliceSingleStateType';

type TOnSucceeded<T> = {
    callback: (data: T) => void;
    deps?: Array<any>;
} | {
    (data: T): void;
};

type TOnFailed<T> = {
    callback: (error: T) => void;
    deps?: Array<any>;
} | {
    (error: T): void;
};

const useApiResponseHandler = <T = any, U = any>({
    apiState,
    onSucceeded,
    onFailed,
}: {
    handlerName?: string;
    apiState: TApiSliceSingleState<T, U>;
    onSucceeded?: TOnSucceeded<T>;
    onFailed?: TOnFailed<U>;
}) => {
    const {
        isLoading,
        data,
        error,
    } = apiState;

    //
    // cache
    //
    const onSucceededDeps = useMemo(() => {
        return typeof onSucceeded === 'function'
            ? []
            : onSucceeded?.deps ?? [];
    }, [onSucceeded]);

    const onFailedDeps = useMemo(() => {
        return typeof onFailed === 'function'
            ? []
            : onFailed?.deps ?? [];
    }, [onFailed]);

    //
    // effect
    //
    useEffect(() => {
        if (!onSucceeded) {
            return;
        }

        if (data && !isLoading) {
            typeof onSucceeded === 'function'
                ? onSucceeded(data)
                : onSucceeded?.callback(data);
        }
        // eslint-disable-next-line
    }, [data, isLoading, ...onSucceededDeps]);

    useEffect(() => {
        if (!onFailed) {
            return;
        }

        if (error && !isLoading) {
            typeof onFailed === 'function'
                ? onFailed(error)
                : onFailed?.callback(error);
        }
        // eslint-disable-next-line
    }, [error, isLoading, ...onFailedDeps]); 
};

export default useApiResponseHandler;
