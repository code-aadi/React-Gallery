import { useEffect } from "react"


const Mode = ({isDark, setIsDark}) => {
useEffect(()=>{
   if (isDark) {
      document.body.style.backgroundColor = "#1a1a1a";
      document.body.style.color = "#ffffff";
      document.querySelector(".mode-btn").style.backgroundColor = "#ffffff"
       document.querySelector(".mode-btn").style.color = "#000000"
  

    } else {
      document.body.style.backgroundColor = "rgb(217, 222, 231)";
      document.body.style.color = "#000000";
        document.querySelector(".mode-btn").style.backgroundColor = "#000000"
        document.querySelector(".mode-btn").style.color = "#ffffff"
    }
},[isDark])
  return (
    <div>
      <button 
      className="mode-btn"
   onClick={()=>{
    setIsDark(!isDark)
   }}
   >
   {isDark?"Light":"Dark"}
   </button>
    </div>
  )
}

export default Mode
