import RestClient from '@/network/RestClient';
import mockUsersApiUrlList from './mockUsersApiUrlList';
import {
    TRetrieveMockUsersApiResponse,
} from './mockUsersApiTypes';

const mockUsersApi = {
    retrieveMockUsers(id: number) {
        return RestClient.get(
            mockUsersApiUrlList.getRetrieveMockUsersUrl(id)
        ) as any as Promise<TRetrieveMockUsersApiResponse>;
    },
};

export default mockUsersApi;