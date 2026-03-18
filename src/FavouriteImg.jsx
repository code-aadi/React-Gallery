import React from 'react'

const FavouriteImg = ({data , setFavourite}) => {
    function removeFromFav(pic){
         let filteredImg =  data.filter((item)=> item.id !== pic.id )
   setFavourite(filteredImg)
    }
  return (
 <>
 {data.map((pic) => {
     return (
         <div className="image-card" key={pic.id}>
      
      <img 
        className='favourite' 
        src="delete-symbol.png" 
        alt="fav" 
        onClick={()=>{
            removeFromFav(pic)
        }}
        />

      
      <a target='_blank' href={pic.url} rel="noreferrer">
        <img 
          className='gallery-img' 
          src={`https://picsum.photos/id/${pic.id}/300/200`} 
          alt={pic.author} 
          />
        <h2 className='authorName'>{pic.author}</h2>
      </a>
    </div>
  );
})}
  
</>   

  )
}

export default FavouriteImg
