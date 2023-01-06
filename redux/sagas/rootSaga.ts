import { all } from 'redux-saga/effects';
import mockUsersSaga from './mockUsersSaga/mockUsersSaga';

function* rootSaga() {
    yield all([
        mockUsersSaga()
    ]);
}

export default rootSaga;