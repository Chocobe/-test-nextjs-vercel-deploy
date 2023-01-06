import restClient from '@/network/restClient';
import mockUsersApiUrlList from './mockUsersApiUrlList';
import {
    RetrieveMockUsersApiResponse,
} from './mockUsersApiTypes';

const mockUsersApi = {
    retrieveMockUsers(id: number) {
        return restClient.get(
            mockUsersApiUrlList.getRetrieveMockUsersUrl(id)
        ) as any as Promise<RetrieveMockUsersApiResponse>;
    },
};

export default mockUsersApi;