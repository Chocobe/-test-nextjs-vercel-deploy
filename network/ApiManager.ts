import accountsApi from './api/accountsApi/accountsApi';
// FIXME: accountsApi 구현 후, 지우기
import mockUsersApi from './api/mockUsersApi/mockUsersApi';

const ApiManager = {
    accountsApi,

    // FIXME: accountsApi 구현 후, 지우기
    mockUsersApi,
} as const;

export default ApiManager;
