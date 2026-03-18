import React from 'react'

const Favourites = (props) => {
  return (
  
      <div className="fav-btn">
  <button className="fav"
   onClick={()=>{
    props.setPageItems("Favourite")
  }}
  >My Favourites <img src="heart.png" alt="" /></button>
</div>
   
  )
}

export default Favourites
