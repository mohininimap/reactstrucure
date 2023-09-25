import * as actionTypes from "../../actionTypes";

const inititalState = {
  isDataFetch: false,
  ReasonMaster: [],
  isError: false,
  isAdding: false,
  totalCount: 0,
  isUpdating: false,
  error: {},
};

export const reasonMasterReducer = (state = inititalState, action) => {
  switch (action.type) {
    case actionTypes.REASON_MASTER_TABLE_DATA_FETCH_START:
      return {
        ...state,
        isDataFetch: true,
        isError: false,
        error: {},
      };

    case actionTypes.REASON_MASTER_CREATE_START:
      return {
        ...state,
        isAdding: true,
        isError: false,
        error: {},
      };

    case actionTypes.REASON_MASTER_UPDATE_START:
      return {
        ...state,
        isUpdating: true,
        isDataFetch: true,
        isError: false,
        error: {},
      };

    case actionTypes.REASON_MASTER_TABLE_DATA_FETCH_SUCCESS:
      return {
        ...state,
        isDataFetch: false,
        ReasonMaster: [...action.payload.reasonData],
        isError: false,
        totalCount: action.payload.count,
        // isAdding: false,
        // isUpdating: false,
        error: {},
      };

    case actionTypes.REASON_MASTER_CREATE_SUCCESS:
      const newReason = [action.payload.description, ...state.ReasonMaster];
      console.log("newReason", newReason);
      return {
        ...state,
        ReasonMaster: [...newReason],
        totalCount: action.payload.count,
        isAdding: false,
        error: {},
      };

    case actionTypes.REASON_MASTER_UPDATE_SUCCESS:
      const updateReason = [...state.ReasonMaster];
      const findIndexT = updateReason.findIndex(
        (d) => d.id === action.payload.id
      );
      updateReason[findIndexT] = { ...action.payload };
      return {
        ...state,
        ReasonMaster: [...updateReason],
        isUpdating: false,
        isDataFetch: false,
        error: {},
      };

    case actionTypes.REASON_MASTER_TABLE_DATA_FETCH_FAILED:
      return {
        ...state,
        isError: true,
        isDataFetch: false,
        ReasonMaster: [],
        isAdding: false,
        isUpdating: false,
        error: { ...action.payload },
      };

    case actionTypes.REASON_MASTER_CREATE_FAILED:
      return {
        ...state,
        isError: true,
        isDataFetch: false,
        ReasonMaster: [],
        isAdding: false,
        isUpdating: false,
        error: { ...action.payload },
      };

    case actionTypes.REASON_MASTER_UPDATE_FAILED:
      return {
        ...state,
        isError: true,
        isDataFetch: false,
        ReasonMaster: [],
        isAdding: false,
        isUpdating: false,
        error: { ...action.payload },
      };
    default:
      return state;
  }
};
