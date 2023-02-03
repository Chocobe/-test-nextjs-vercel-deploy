import {
    CallEffect,
    PutEffect,
} from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { TRetrieveMockUsersApiResponse } from '@/network/api/mockUsersApi/mockUsersApiTypes';

export type TRetrieveMockUsersSagaType = Generator<
    CallEffect<TRetrieveMockUsersApiResponse> | PutEffect,
    void,
    AxiosResponse<TRetrieveMockUsersApiResponse>
>;