import { all } from "redux-saga/effects";

// all sagas
// import { loginSaga } from './loginSaga';
import {mastersSaga} from './mastersSaga';
// import {invoiceSaga} from  './invoiceSaga';
// import {processSaga} from './processSaga';
// import { reportSaga } from "./reportSaga";

function* rootSaga() {
    yield all([
        // loginSaga(),
        mastersSaga(),
        // invoiceSaga(),
        // processSaga(),
        // reportSaga(),      
    ])
}

export default rootSaga;
