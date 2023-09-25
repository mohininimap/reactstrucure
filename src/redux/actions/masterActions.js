import * as actionTypes from "../actionTypes";

import { showSuccessNotification, showErrorNotification } from "../../utility";

export const reasonMasterTableDataFetchStart = (
    searchValue,
    from,
    to,
    head,
    order
  ) => {
    return {
      type: actionTypes.REASON_MASTER_TABLE_DATA_FETCH_START,
      payload: { searchValue, from, to, head, order },
    };
  };
  export const reasonMasterTableDataFetchSuccess = (data) => {
    // showSuccessNotification('Data Loaded Successfully!', configToast);
    return {
      type: actionTypes.REASON_MASTER_TABLE_DATA_FETCH_SUCCESS,
      payload: data,
    };
  };
  
  export const reasonMasterTableDataFetchFailed = (error) => {
    // showErrorNotification(error?.data?.message, configToast)
    return {
      type: actionTypes.REASON_MASTER_TABLE_DATA_FETCH_FAILED,
      payload: error,
    };
  };
  