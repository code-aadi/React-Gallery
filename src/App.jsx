import { useEffect, useState } from 'react'
import PageButton from './component/PageButton'
import Mode from './component/Mode'
import Images from './Images'
import Favourites from './Favourites'
import FavouriteImg from './FavouriteImg'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



function App() {
const [data, setData] = useState([])
const [page, setPage] = useState(1)
const [loading, setLoading] = useState(true)
const [isDark , setIsDark] = useState(()=>{
  return JSON.parse(localStorage.getItem("gallery-mode")) || false;
})
const [search , setSearch] = useState("")
const [favourite , setFavourite] = useState(()=>{
  return JSON.parse(localStorage.getItem("favourite-img")) || []
})
const [pageItems, setPageItems] = useState("Home")




function addFavourites(pic){
  let duplicateImg = favourite.some(item => item.id === pic.id)
  if(duplicateImg){
   let filteredImg =  favourite.filter((item)=> item.id !== pic.id )
   setFavourite(filteredImg)
       toast.info("Removed from favourites");

  }
  else{
   toast.success("Added to favourites");
    setFavourite([...favourite, pic])

  }
}

useEffect(()=>{
  console.log(pageItems)
},[pageItems])

useEffect(()=>{
  localStorage.setItem("favourite-img", JSON.stringify(favourite))
},[favourite])

useEffect(()=>{
  localStorage.setItem("gallery-mode", isDark)
},[isDark])

  useEffect(()=>{
  async function getData() {
  try{
    setData([])
    setLoading(true)
    let response = await fetch(`https://picsum.photos/v2/list?page=${page}&limit=50`)
    let data = await response.json()
    setData(data)
  } catch(err){
    console.log(err)
    alert(err.message)
  }
   finally{
setLoading(false)
   }
  }
  getData()
  }, [page])

  let filteredData = data.filter((item)=>{
    return item.author.toLowerCase().includes(search.toLowerCase());
  })

  return (
   <>
   
   <Mode isDark={isDark} setIsDark={setIsDark}/>
      <h1>Gallery</h1>
{pageItems === "Home" && (

  <>
  <div className="input-field">
  <input type="text"
value={search}
onChange={(e)=>{
  setSearch(e.target.value)
}}
placeholder='Search by Author'
className={`searchInp 
  ${isDark?"dark":""}
  `}
/>
</div>


<Favourites setPageItems = {setPageItems} />
    <div className="button-cont">
  <PageButton page = {page} setPage = {setPage} isDark = {isDark}/>
</div>


    {loading && <div className="loader"></div>}

   <ToastContainer />
    <Images data={filteredData} loading = {loading} addFavourites={addFavourites}/>

  </>
)}
{pageItems === "Favourite"  && (
  <>
  <h2 className='My-fav-title'>My Favourites</h2>
  <button className="back"
  onClick={()=>{
    setPageItems("Home")
  }}
  ><img src="back-button.png" alt="" />Back</button>
   <div className="gallery">
     <FavouriteImg data = {favourite} setFavourite = {setFavourite}/>

   </div>
 </>

)}
</>
  )
}

export default App
