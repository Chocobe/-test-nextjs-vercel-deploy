import axios, {
    AxiosRequestConfig, 
    AxiosResponse,
} from 'axios';
import { ELocalStorageItemKey } from './CONSTANTS/ELocalStorageItemKey';

export type TSendRequestParams = {
    method: (
        typeof axios.get | 
        typeof axios.post |
        typeof axios.put |
        typeof axios.patch |
        typeof axios.delete
    ),
    url: string,
    payload?: any,
    params?: any,
    config?: AxiosRequestConfig,
    callback?: (response: any) => any
};

const PROXY_URL = '/labelr-console-v2/api';

const axiosInstance = (function() {
    const axiosInstance = axios.create({
        headers: {
            post: {
                ['Content-type']: 'application/x-www-form-urlencoded',
            }
        },
        timeout: 10000,
    });

    axiosInstance.interceptors.request.use(
        function (config) {
            // TODO: authToken 처리
            const accessKey = localStorage.getItem(ELocalStorageItemKey.LABELR_ACCESS_KEY);

            if (accessKey && config.headers) {
                (config.headers as any)!['Authorization'] = `Token ${accessKey}`;
            }
            
            return config;
        },

        function (error) {
            return Promise.reject(error);
        }
    );

    axiosInstance.interceptors.response.use(
        function (response) {
            return response;
        },

        function (error) {
            const response = error?.response ?? error;
            const status = response.status;
            const statusText = response.statusText;
            const errorData = response.data;

            return Promise.reject({ 
                status, 
                statusText,
                errorData,
            });
        }
    );

    return axiosInstance;
}());

const sendRequest = async <T = any>({
    method,
    url,
    payload = {},
    params = {},
    config = {},
    callback,
}: TSendRequestParams) => {
    try {
        // if (!url) {
        //     throw new Error('empty url is invalid');
        // }

        const response = await method(
            `${PROXY_URL}${url}`,
            payload, 
            { ...config, params }
        ) as AxiosResponse<T>;

        callback?.(response);
        return response;
    } catch (error) {
        throw error;
    }
};

const RestClient = {
    async get<T>(
        url: string,
        params?: any,
        config?: any,
        callback?: () => any
    ) {
        const payload = {
            ...config,
            params,
        };

        return sendRequest<T>({
            method: axiosInstance.get,
            url,
            payload,
            callback,
        });
    },

    async post<T>(
        url: string,
        payload?: any,
        config?: any,
        callback?: () => any
    ) {
        return sendRequest<T>({
            method: axiosInstance.post,
            url,
            payload,
            config,
            callback,
        });
    },

    async put<T>(
        url: string,
        payload?: any,
        config?: any,
        callback?: () => any
    ) {
        return sendRequest<T>({
            method: axiosInstance.put,
            url,
            payload,
            config,
            callback,
        });
    },

    async patch<T>(
        url: string,
        payload?: any,
        config?: any,
        callback?: () => any
    ) {
        return sendRequest<T>({
            method: axiosInstance.patch,
            url,
            payload,
            config,
            callback,
        });
    },

    async delete<T>(
        url: string,
        params?: any,
        config?: any,
        callback?: () => any
    ) {
        const payload = {
            ...config,
            params,
        };

        return sendRequest<T>({
            method: axiosInstance.delete,
            url,
            payload,
            callback,
        });
    },
} as const;

export default RestClient;
