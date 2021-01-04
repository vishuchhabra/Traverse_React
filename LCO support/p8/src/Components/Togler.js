import React,{useContext} from "react"
import Theme from "../Context/Theme"

const Togler = () =>{

    const [themeMode ,setThemeMode] = useContext(Theme)

    return (
        <div onClick={()=>{
            setThemeMode(themeMode =="light" ? "dark": "light")
        }}>

         <p >{themeMode}</p>   

        </div>
    )

}
export default Togler