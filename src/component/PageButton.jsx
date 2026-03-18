import React, { useState } from 'react'

const PageButton = ({ page, setPage, isDark }) => {
   const [pageGroup, setPageGroup] = useState(1)
   
    let renderButtons = ()=>   Array.from({length : 10}, (_,index)=>{
         let buttonNum= (pageGroup - 1) * 10 + (index + 1);
        
         return (
            <button
            key={buttonNum}
            className={`${page === buttonNum ? "active" : ""} ${isDark ? "dark" : "light"}`}
              onClick={() => setPage(buttonNum)}
            >{buttonNum}</button>
         )
      })
   return (
      <> 
      <button className='page-change'
      onClick={()=>{
       setPageGroup(pageGroup - 1)
      }}
      disabled = {pageGroup === 1}
      > {"< Prev"} </button>
 
    {renderButtons()}
     
    <button className='page-change'
    onClick={()=>{
   setPageGroup(pageGroup + 1)
    }}
    disabled = {pageGroup === 5}
    >{"Next >"} </button>
      </>
   )
}

export default PageButton
