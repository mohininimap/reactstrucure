import React from 'react'
 
export const RowPerPage = () => {
 const pageOption = [
   {
     id: 1,
     label: "5",
   },
   {
     id: 2,
     label: "10",
   },
   {
     id: 3,
     label: "15",
   },
   
   
 ];
  return (
   <>
     {pageOption.map((temp) => {
               return (
                 <option value={temp.label} key={temp.id}>
                   {temp.label}
                 </option>
               );
             })}

</>
  )
}
