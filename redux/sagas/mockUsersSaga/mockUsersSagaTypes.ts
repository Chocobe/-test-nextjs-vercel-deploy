import {
    CallEffect,
    PutEffect,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { RetrieveMockUsersApiResponse } from '@/network/api/mockUsersApi/mockUsersApiTypes';

// export type RetrieveMockUsersGeneratorType = Generator<
//     any,
//     void,
//     AxiosResponse<RetrieveMockUsersApiResponse>
// >;

export type RetrieveMockUsersSagaType = Generator<
    CallEffect<RetrieveMockUsersApiResponse> | PutEffect,
    void,
    AxiosResponse<RetrieveMockUsersApiResponse>
>;