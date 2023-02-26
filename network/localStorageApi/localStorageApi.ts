import { 
    TSigninApiResponse,
} from '../api/accountsApi/accountsApiTypes';
import { 
    ELocalStorageItemKey,
} from './ELocalStorageApiTypes';

export const setAuthTokensToLocalStorage = (
    tokenData?: TSigninApiResponse
) => {
    const {
        accessToken,
        refreshToken,
    } = tokenData ?? {};

    if (!accessToken || !refreshToken) {
        localStorage.removeItem(ELocalStorageItemKey.LABELR_ACCESS_TOKEN_KEY);
        localStorage.removeItem(ELocalStorageItemKey.LABELR_REFRESH_TOKEN_KEY);
        return;
    }

    localStorage.setItem(
        ELocalStorageItemKey.LABELR_ACCESS_TOKEN_KEY,
        accessToken
    );

    localStorage.setItem(
        ELocalStorageItemKey.LABELR_REFRESH_TOKEN_KEY,
        refreshToken
    );
};

export const getAuthTokensFromLocalStorage = () => {
    const accessToken = localStorage.getItem(
        ELocalStorageItemKey.LABELR_ACCESS_TOKEN_KEY
    );

    const refreshToken = localStorage.getItem(
        ELocalStorageItemKey.LABELR_REFRESH_TOKEN_KEY
    );

    return {
        accessToken,
        refreshToken,
    } as TSigninApiResponse;
};
