import {
    TRetrieveMockUsersApiResponse,
} from '@/network/api/mockUsersApi/mockUsersApiTypes';

export type MockUsersSliceState = {
    retrieve: {
        isPending: boolean;
        data: TRetrieveMockUsersApiResponse | null;
        error: any;
    };
};