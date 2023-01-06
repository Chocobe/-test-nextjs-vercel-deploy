import {
    RetrieveMockUsersApiResponse,
} from '@/network/api/mockUsersApi/mockUsersApiTypes';

export type MockUsersSliceState = {
    retrieve: {
        isPending: boolean;
        data: RetrieveMockUsersApiResponse | null;
        error: any;
    };
};