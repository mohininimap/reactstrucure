import { takeEvery, all, put, call } from "redux-saga/effects";

// actionTypes
import * as actionTypes from "../redux/actionTypes";

// actions
import {
  reasonMasterUpdateSuccess,
  reasonMasterUpdateFailed,
  reasonMasterTableDataFetchSuccess,
  reasonMasterTableDataFetchFailed,
  reasonMasterCreateFailed,
  reasonMasterCreateSuccess,
} from "../redux/actions/masterActions";

// services
import {
  fetchReasonMaster,
  addReasonMaster,
  editReasonMaster,
} from "../api/services/masterService";

// Worker saga


function* loadReasonMaster(action) {
  try {
    const { data, count } = yield call(fetchReasonMaster, action.payload);
    yield put(
      reasonMasterTableDataFetchSuccess({ reasonData: data?.reasonData, count })
    );
  } catch (error) {
    yield put(reasonMasterTableDataFetchFailed(error.response));
  }
}
function* createReasonMaster(action) {
  try {
    const { reason } = yield call(addReasonMaster, action.payload);
    yield put(reasonMasterCreateSuccess(reason));
  } catch (error) {
    yield put(reasonMasterCreateFailed(error.response));
  }
}
function* updateReasonMaster(action) {
  try {
    yield call(editReasonMaster, action.payload);
    yield put(reasonMasterUpdateSuccess(action.payload));
  } catch (error) {
    yield put(reasonMasterUpdateFailed(error.response));
  }
}
// ***************************** REASON MASTER END *****************************
// watcher saga

function* watchReasonMaster() {
  yield takeEvery(
    actionTypes.REASON_MASTER_TABLE_DATA_FETCH_START,
    loadReasonMaster
  );
  yield takeEvery(actionTypes.REASON_MASTER_CREATE_START, createReasonMaster);
  yield takeEvery(actionTypes.REASON_MASTER_UPDATE_START, updateReasonMaster);
}
export function* mastersSaga() {
  yield all([
    watchReasonMaster(),
  ]);
}
