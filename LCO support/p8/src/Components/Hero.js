import React,{useContext} from 'react'
import Theme from '../Context/Theme'
import AppTheme from '../Color'


const Hero = () =>{
    const theme = useContext(Theme)[0]
    const currentTheme = AppTheme[theme]

    return (

        <div
        style={{
            padding:"1rem",
            backgroundColor:`${currentTheme.backgroundColor}`,
            color:`${currentTheme.textColor}`,
            border:`${currentTheme.border}`,
            textAlign:"center"
        }}
        >
            <h1>Context API Theme toggler</h1>
            <p>This is a nice paragrah</p>
            <button
                style={{
                    backgroundColor:"#26ae60",
                    padding:"10px 150px",
                    fontSize:"20px",
                    color:"#FFF",
                    border:`${currentTheme.border}`
                }}
            >Click Me</button>
        </div>
    )




}

export default Hero