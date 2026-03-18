import React from 'react'


const Images = ({data , loading, addFavourites}) => {
  if (data.length === 0 && !loading) {
    return (
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <h2>Kuch nahi mila! (No Match Found)</h2>
        <p>Thoda alag naam search karke dekho.</p>
      </div>
    );
  }
  return (
   <>
   <div className="gallery">

 {data.map((pic) => {
  return (
    <div className="image-card" key={pic.id}>
      
      <img 
        className='favourite' 
        src="heart.png" 
        alt="fav" 
        onClick={()=>{
          addFavourites(pic)
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
  </div>

   </>
  )
}

export default Images
