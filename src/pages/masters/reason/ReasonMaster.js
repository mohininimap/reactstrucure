import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import ReusableHeader from "../reusableComponent/componentHeader/ReusableHeader";
import DeleteModal from "./modal/DeleteModal";
import "./master.scss";
import "../../../src/App.css"
import { RowPerPage } from "../RowPage/RowPerPage";

// toster
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Rings } from "react-loader-spinner";
import ReasonMasterModal from "./modal/ReasonMasterModal";
import { reasonMasterTableDataFetchStart } from "../../redux/actions/masterActions";
import { firstLetterCapital, getCurrentPagePermissions } from "../../utility";

const ReasonMaster = () => {
  const { ReasonMaster, isDataFetch, isAdding, isUpdating, totalCount } =
    useSelector((state) => state?.master?.reasonMaster);
  const dispatch = useDispatch();
  const [edata, setEdata] = useState({});

  const [isOpen, setIsOpen] = useState(false);
  const [isdeletemodal, setIsdeletemodal] = useState(false);
  const [reload, setReload] = useState(false);
  const [deleteID, setDeleteID] = useState(null);
  const [searchValue, setSearch] = useState("");
  const [order, setOrder] = useState("");
  const [condition, setCondition] = useState(false);
  const [head, setHead] = useState("");
  const [sortedData, setSortedData] = useState([]);

  const { permissions } = useSelector(state => state?.master?.currentPermissions)
  const currentPagePermissions = useMemo(() => {
    return getCurrentPagePermissions(permissions, "masters", "Reason")
  }, [permissions])

  const setSearchValue = (temp) => {
    setSearch(temp);
  };

  ////React Pagination start
  const [pageNumber, setPageNumber] = useState(0);
  const [usersPerPage, setUsersPerPage] = useState(10);
  const pagesVisited = pageNumber * usersPerPage;
  /////React paginate end

  const openModal = (e, data = {}) => {
    e.preventDefault();
    setIsOpen(true);
    setEdata(data);
  };

  const closeModal = () => {
    setIsOpen(false);
  };
  const openDeleteModal = (id) => {
    setIsdeletemodal(true);
    setDeleteID(id);
  };
  const closeDeleteModal = () => {
    setIsdeletemodal(false);
    setDeleteID(null);
  };

  const getReasonData = () => {
    let payload = {
      searchValue,
      from: pageNumber * usersPerPage + 1,
      to: (pageNumber + 1) * usersPerPage,
      head,
      order,
    };
    payload?.from > totalCount ? setPageNumber(0) : setPageNumber(pageNumber);
    payload = {
      ...payload,
      from: totalCount < payload?.from ? 1 : payload?.from,
      to: totalCount < payload?.from ? usersPerPage : payload?.to,
    };
    dispatch(
      reasonMasterTableDataFetchStart(
        payload?.searchValue,
        payload?.from,
        payload?.to,
        payload?.head,
        payload?.order
      )
    );
  }

  const deletePropsConfig = {
    setReload,
    closeDeleteModal,
    getApi: getReasonData,
    link: `/reason/${deleteID}`,
    isdeletemodal,
  };

  useEffect(() => {
    getReasonData()
  }, [reload, searchValue, isAdding, order]);

  const getReasonFilterData = () => {
    if (!isDataFetch) {
      setSortedData(ReasonMaster);
    }
  };

  useEffect(() => {
    getReasonFilterData();
  }, [searchValue, isDataFetch]);

  const changePage = (e) => {
    const pageNumber = e.selected;
    let payload = {
      searchValue,
      from: pageNumber * usersPerPage + 1,
      to: (pageNumber + 1) * usersPerPage,
      head,
      order,
    };
    payload?.from > totalCount ? setPageNumber(0) : setPageNumber(pageNumber);
    payload = {
      ...payload,
      from: totalCount < payload?.from ? 1 : payload?.from,
      to: totalCount < payload?.from ? usersPerPage : payload?.to,
    };
    console.log(payload, "payload");
    dispatch(
      reasonMasterTableDataFetchStart(
        payload?.searchValue,
        payload?.from,
        payload?.to,
        payload?.head,
        payload?.order
      )
    );
  };

  const handleRows = (e) => {
    setUsersPerPage(e.target.value);
    let payload = {
      searchValue,
      from: pageNumber * usersPerPage + 1,
      to: (pageNumber + 1) * usersPerPage,
      head,
      order,
    };

    const perPage = parseInt(e.target.value);
    payload?.from > totalCount || payload?.to - payload?.from + 1 !== perPage
      ? setPageNumber(0)
      : setPageNumber(pageNumber);
    payload = {
      ...payload,
      from:
        totalCount < payload?.from ||
        payload?.to - payload?.from + 1 !== perPage
          ? 1
          : payload?.from,
      to:
        totalCount < payload?.from ||
        payload?.to - payload?.from + 1 !== perPage
          ? e.target.value
          : payload?.to,
    };
    console.log(payload, "payload");
    dispatch(
      reasonMasterTableDataFetchStart(
        payload?.searchValue,
        payload?.from,
        payload?.to,
        payload?.head,
        payload?.order
      )
    );
  };

  const handleSort = (e, i) => {
    setHead(e);
    setOrder(i);
    setCondition(!condition);
  };

  useEffect(() => {
    setPageNumber(0)
  }, [searchValue])

  return (
    <div>
      <div className="projectTarget">
        <ToastContainer limit={1} autoClose={2000} />

        {isOpen && (
          <ReasonMasterModal
            closeModal={closeModal}
            data={edata}
            isOpen={isOpen}
            fromTo={{
              from: pageNumber === 0 ? 1 : pagesVisited + 1,
              to: pagesVisited + usersPerPage,
            }}
            exportProduct="External Product Master"
            searchValue={searchValue}
            head={head}
            order={order}
          />
        )}
        {isdeletemodal && <DeleteModal {...deletePropsConfig} />}

        <ReusableHeader
          title="Reason Master"
          btnName="Add Reason"
          onClick={openModal}
          setSearchValue={setSearchValue}
          searchOn={true}
          btnDisabled={!currentPagePermissions?.["add-reason"]}
        />
        <div className="projectTarget__table">
          <table className="projectTarget__table--tab">
            <thead className="projectTarget__table--tab-head">
              <tr>
                <th
                  className="projectTarget__table--tab-head-th-1"
                >
                  Reason &nbsp;
                  {condition ? (
                    <i
                      onClick={() => handleSort("name", "ASC")}
                      className="fas fa-sort-up"
                      style={{ cursor: "pointer" }}
                    ></i>
                  ) : (
                    <i
                      onClick={() => handleSort("name", "DESC")}
                      className="fas fa-sort-down"
                      style={{ cursor: "pointer" }}
                    ></i>
                  )}
                </th>
                <th
                  className="projectTarget__table--tab-head-th-2"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="projectTarget__table--tab-body">
              {isDataFetch || isAdding || isUpdating ? (
                <tr>
                  <td colSpan="9" className="ring-spin">
                  <Rings color="#63B8EC" height={80} width={80} />
                </td>
                </tr>
              ) : sortedData.length > 0 ? (
                sortedData?.map((data) => {
                  return (
                    <tr key={data.id}>
                      <td>{firstLetterCapital(data?.description)}</td>
                      <td
                        className="projectTarget__table--tab-body-alignCenter"
                        // style={{ display: "flex", justifyContent: "end" }}
                      >
                        <span className="projectTarget__table--tab-body-alignCenter-group">
                          <i
                            style={{color: !currentPagePermissions?.["update-reason"] && "gray"}}
                            onClick={(e) => currentPagePermissions?.["update-reason"] && openModal(e, data)}
                            className="fas fa-edit projectTarget__table--tab-body-alignCenter-edit"
                          ></i>
                          &nbsp;
                          <i
                            style={{color: !currentPagePermissions?.["delete-reason"] && "gray"}}
                            onClick={() => currentPagePermissions?.["delete-reason"] && openDeleteModal(data.id)}
                            className="fas fa-trash-alt projectTarget__table--tab-body-alignCenter-delete"
                          ></i>
                        </span>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    style={{
                      textAlign: "center",
                      color: "orangered",
                      fontSize: "1.4rem",
                    }}
                  >
                    No Data Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      {sortedData.length > 0 && (
        <div className="projectTarget__footer">
          <div className="projectTarget__footer--para">
            <label className="selectLabel">Rows Per Page : </label>&nbsp;
            <select
              onChange={(e) => handleRows(e)}
              className="rows-select"
              
              value={usersPerPage}
            >
              <RowPerPage />
            </select>
          </div>
          <ReactPaginate
            previousLabel={"<"}
            nextLabel={">"}
            pageCount={Math.ceil(totalCount / usersPerPage)}
            onPageChange={changePage}
            forcePage={pageNumber}
            containerClassName={"projectTarget__footer--buttons"}
            previousLinkClassName={"projectTarget__footer--buttons-lessthan"}
            nextLinkClassName={"projectTarget__footer--buttons-lessthan"}
            disabledClassName={
              "projectTarget__footer--buttons-paginationDisabled"
            }
            activeClassName={"projectTarget__footer--buttons-active"}
          />
        </div>
      )}
    </div>
  );
};

export default ReasonMaster;
