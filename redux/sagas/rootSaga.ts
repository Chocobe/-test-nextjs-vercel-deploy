import { 
    all
} from 'redux-saga/effects';
// saga
import accountsSaga from './accountsSaga/accountsSaga';

// FIXME: accountsSaga 구현 후, 삭제하기
// mocking
import mockUsersSaga from './mockUsersSaga/mockUsersSaga';

function* rootSaga() {
    yield all([
        accountsSaga(),
        // FIXME: accountsSaga 구현 후, 삭제하기
        // mocking
        mockUsersSaga(),
    ]);
}

export default rootSaga;
