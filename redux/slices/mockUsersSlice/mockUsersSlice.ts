import { 
    createSlice,
    PayloadAction,
} from '@reduxjs/toolkit';
import {
    MockUsersSliceState,
} from './mockUsersSliceTypes';
import {
    RetrieveMockUsersApiPayload,
    RetrieveMockUsersApiResponse,
} from '@/network/api/mockUsersApi/mockUsersApiTypes';

const initialState: MockUsersSliceState = {
    retrieve: {
        isPending: false,
        data: null,
        error: null,
    },
};

const mockUsersSlice = createSlice({
    name: 'mockUsers',
    initialState,
    reducers: {
        // reset
        resetMockUsers(state: MockUsersSliceState) {
            state.retrieve = {
                isPending: false,
                data: null,
                error: null,
            };
        },

        // retrieve
        retrieveMockUsersRequested(
            state: MockUsersSliceState, 
            // eslint-disable-next-line
            action: PayloadAction<RetrieveMockUsersApiPayload>
        ) {
            state.retrieve = {
                isPending: true,
                data: null,
                error: null,
            };
        },
        retrieveMockUsersSucceed(
            state: MockUsersSliceState,
            action: PayloadAction<RetrieveMockUsersApiResponse>
        ) {
            state.retrieve = {
                isPending: false,
                data: action.payload,
                error: null,
            };
        },
        retrieveMockUsersFailed(
            state: MockUsersSliceState,
            action: PayloadAction<any>
        ) {
            state.retrieve = {
                isPending: false,
                data: null,
                error: action.payload,
            };
        }
    }
});

export default mockUsersSlice;
export const {
    resetMockUsers,
    retrieveMockUsersRequested,
    retrieveMockUsersSucceed,
    retrieveMockUsersFailed,
} = mockUsersSlice.actions;