import axios, {
    AxiosRequestConfig,
} from 'axios';
import { localStorageItemKey } from './constants';

export type SendRequestParams = {
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
            const accessKey = localStorage.getItem(localStorageItemKey.LABELR_AUTH_TOKEN);

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
            return Promise.reject(error.response);
        }
    );

    return axiosInstance;
}());

const sendRequest = async ({
    method,
    url,
    payload = {},
    params = {},
    config = {},
    callback,
}: SendRequestParams) => {
    try {
        // if (!url) {
        //     throw new Error('empty url is invalid');
        // }

        const response = await method(url, payload, { ...config, params });

        callback?.(response);
        return response;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

const restClient = {
    get: async (
        url: string,
        params?: any,
        config?: any,
        callback?: () => any
    ) => {
        const payload = {
            ...config,
            params,
        };
        
        return sendRequest({
            method: axiosInstance.get,
            url,
            payload,
            callback,
        });
    },

    post: async (
        url: string,
        payload?: any,
        config?: any,
        callback?: () => any
    ) => {
        return sendRequest({
            method: axiosInstance.post,
            url,
            payload,
            config,
            callback,
        });
    },

    put: async (
        url: string,
        payload?: any,
        config?: any,
        callback?: () => any
    ) => {
        return sendRequest({
            method: axiosInstance.put,
            url,
            payload,
            config,
            callback,
        });
    },

    patch: async (
        url: string,
        payload?: any,
        config?: any,
        callback?: () => any
    ) => {
        return sendRequest({
            method: axiosInstance.patch,
            url,
            payload,
            config,
            callback,
        });
    },

    delete: async (
        url: string,
        params?: any,
        config?: any,
        callback?: () => any
    ) => {
        const payload = {
            ...config,
            params,
        };
        
        return sendRequest({
            method: axiosInstance.delete,
            url,
            payload,
            callback,
        });
    },
};

export default restClient;