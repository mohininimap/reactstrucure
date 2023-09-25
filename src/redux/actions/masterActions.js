import * as actionTypes from "../actionTypes";

import { showSuccessNotification, showErrorNotification } from "../../utility";
const configToast = {
  position: "top-right",
  autoClose: 2000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: false,
  draggable: false,
  progress: undefined,
};

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
  export const reasonMasterCreateSuccess = (data) => {
    showSuccessNotification("Reason Added Successfully!", configToast);
    return {
      type: actionTypes.REASON_MASTER_CREATE_SUCCESS,
      payload: data,
    };
  };
  export const reasonMasterCreateFailed = (error) => {
    showErrorNotification(error?.data?.message, configToast);
    return {
      type: actionTypes.REASON_MASTER_CREATE_FAILED,
      payload: error,
    };
  };
  export const reasonMasterUpdateStart = (data) => {
    return {
      type: actionTypes.REASON_MASTER_UPDATE_START,
      payload: data,
    };
  };
  export const reasonMasterUpdateSuccess = (data) => {
    showSuccessNotification("Reason Updated Successfully!", configToast);
    return {
      type: actionTypes.REASON_MASTER_UPDATE_SUCCESS,
      payload: data,
    };
  };
  export const reasonMasterUpdateFailed = (error) => {
    showErrorNotification(error?.data?.message, configToast);
    return {
      type: actionTypes.REASON_MASTER_UPDATE_FAILED,
      payload: error,
    };
  };