import { 
    all
} from 'redux-saga/effects';
// saga
import accountsSaga from './accountsSaga/accountsSaga';

function* rootSaga() {
    yield all([
        accountsSaga(),
        // FIXME: accountsSaga 구현 후, 삭제하기
    ]);
}

export default rootSaga;
