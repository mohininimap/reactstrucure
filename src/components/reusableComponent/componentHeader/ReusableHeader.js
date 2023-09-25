import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { FilterData } from '../../../redux/actions/masterActions'
import "../componentHeader/ReusableHeader.scss";
// import FilterDeleteModal from "../../process/modal/FilterDeleteModal";
import { debounce } from "lodash";
const ReusableHeader = ({
  title,
  onClick,
  onExportClick,
  btnExport,
  btnName,
  btnImport,
  setSearchValue,
  searchOn,
  delBtn,
  bulkDelete,
  filterBtn,
  filterListBtn,
  openFilterModal,
  openDelModal,
  onHandleImport,
  btnAction,
  btnDisabled
  // onHandleSearch

}) => {
  const [search, setSearch] = useState("");
  // const [isOpen, setIsOpen] = useState(false);
  // const [reload, setReload] = useState(false);

  // const openDelModal = () => {
  //   setIsOpen(true);
  // };

  // const closeDelModal = () => {
  //   setIsOpen(false);
  // };

  const handleOnchange = (e) => {
    // onHandleSearch(e)
    setSearch(e.target.value);
    if (e.target.value.length >= 1) {
      setTimeout(() => {
        setSearchValue(e.target.value);
      }, 1000);
    } else if (e.target.value.length === 0) {
      setSearchValue(e.target.value);
    }
  };

  return (
    <div className="reusableHeader">
      {/* {isOpen && (
        <FilterDeleteModal
          openDelmodal={openDelModal}
          closeDelModal={closeDelModal}
        />
      )} */}
      <div className="reusableHeader__name">
        <div className="reusableHeader__name--icon">
          <i className="bi bi-bar-chart-line-fill"></i>
        </div>
        <div className="reusableHeader__name--title">{title}</div>
      </div>

      <div className="reusableHeader__search">
        {searchOn ? (
          <div className="reusableHeader__search--first">
            <input
              className="reusableHeader__search--first-input"
              type="search"
              value={search}
              onChange={handleOnchange}
              placeholder="Search"
              name="schedulesearch"
              autoComplete="off"
            />
          </div>
        ) : (
          ""
        )}

        <div className="reusableHeader__search--second">
          {delBtn ? (
            <button
              className="reusableHeader__search--second-btn"
              onClick={bulkDelete}
            >
              Delete
            </button>
          ) : (
            ""
          )}
          {!btnName ? (
            ""
          ) : (
            <button
              className="reusableHeader__search--second-btn"
              onClick={onClick}
              disabled={btnDisabled}
            >
              {btnName}
            </button>
          )}


          {!btnAction ? (
            ""
          ) : (
            <button
              className="reusableHeader__search--second-btn"
              onClick={onClick}
            >
              {btnAction}
            </button>
          )}








          {!btnImport ? (" ") : (
            <button
              className="reusableHeader__search--second-btn"
              onClick={onHandleImport}
            >
              {btnImport}
            </button>

          )}
          {!btnExport ? (
            ""
          ) : (
            <button
              className="reusableHeader__search--second-btn"
              onClick={onExportClick}
            >
              <i class="fas fa-download"></i>
              &nbsp; {btnExport}
            </button>
          )}

          {filterBtn ? (
            <div
              className="reusableHeader__search--filter"
              onClick={openDelModal}
            >
              <i
                class="fa-solid fa-filter"
                style={{ fontSize: "1.5vw", color: "white" }}
              ></i>
            </div>
          ) : (
            ""
          )}

          {filterListBtn ? (
            <div
              className="reusableHeader__search--filter"
              onClick={openFilterModal}
            >
              <i
                class="fa-solid fa-filter"
                style={{ fontSize: "1.5vw", color: "white" }}
              ></i>
            </div>
          ) : (
            ""
          )}

        </div>
      </div>
    </div>
  );
};

export default ReusableHeader;
