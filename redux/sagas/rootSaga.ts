import { all } from 'redux-saga/effects';

// mocking
import mockUsersSaga from './mockUsersSaga/mockUsersSaga';

function* rootSaga() {
    yield all([
        // mocking
        mockUsersSaga(),
    ]);
}

export default rootSaga;
