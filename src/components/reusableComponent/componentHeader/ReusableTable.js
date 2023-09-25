import React from 'react'
import ReactPaginate from 'react-paginate'
function ReusableTable(props) {
  const pageOption = [{
    id:1,
  label: '5'
  } ,{
    id:2,
    label: '10'
  },
  {
    id:3,
    label: '15'}
   ]
    
  
    return (
        <div className="projectTarget__table">
            <table className="projectTarget__table--tab">
                <thead className="projectTarget__table--tab-head">
                    <tr>
                         {props.isCheckbox && 
                        <th style={{
                            textAlign: "center",
                        }}>
                            <input
                                type="checkbox"
                            />
                        </th>
                        }
                        {props.header.map( (data) => {
                                return (
                                    <th>
                                        {data.name}
                                    </th>
                                )
                        })}
                        
                    </tr>
                </thead>
                <tbody className="projectTarget__table--tab-body">
                    {props.children}
                </tbody>
            </table>
            <div className="projectTarget__footer">
                <div className="projectTarget__footer--para">
                    <label className="selectLabel">Rows Per Page : </label>&nbsp;
                    <select
                    onChange={(e) => props?.handleRows(e)}
                    className="rows-select"
                    style={{ borderRadius: "5px" }}
                    value={props?.usersPerPage}
                    >
                    
                    {
                        pageOption.map((temp) => {
                            return(
                            <option value={temp.label} key={temp.id} >{temp.label}</option>
                            )
                        })
                    }
                    
                    </select>
                </div>
                <ReactPaginate
                    forcePage={props?.pageNumber}
                    previousLabel={"<"}
                    nextLabel={">"}
                    pageCount={Math.ceil(props?.totalCount / props?.usersPerPage)}
                    onPageChange={props?.changePage}
                    containerClassName={"projectTarget__footer--buttons"}
                    previousLinkClassName={"projectTarget__footer--buttons-lessthan"}
                    nextLinkClassName={"projectTarget__footer--buttons-lessthan"}
                    disabledClassName={
                    "projectTarget__footer--buttons-paginationDisabled"
                    }
                    activeClassName={"projectTarget__footer--buttons-active"}
                />
            </div>
        </div>
    )
}

export default ReusableTable