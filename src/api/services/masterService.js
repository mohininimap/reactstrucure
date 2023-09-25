import axios from "axios";
import { privateRequest } from "../axiosConfig/privateRequest";

export const fetchReasonMaster = (pagination) => {
  if (pagination.order == "" && pagination.head == "") {
    return privateRequest
      .get(
        `/reason?search=${pagination.searchValue}&from=${pagination.from}&to=${pagination.to}`
      )
      .then((res) => res.data);
  } else {
    return privateRequest
      .get(
        `/reason?search=${pagination.searchValue}&from=${pagination.from}&to=${pagination.to}&sort=${pagination.head}&orderby=${pagination.order}`
      )
      .then((res) => res.data);
  }
};


export const addReasonMaster = (data) => {
  return privateRequest.post("/reason", data).then((res) => res?.data?.data);
};
export const editReasonMaster = (data) => {
  const { id, created_at, updated_at, ...other } = data;
  return privateRequest.put(`/reason/${id}`, other).then((res) => res);
};
