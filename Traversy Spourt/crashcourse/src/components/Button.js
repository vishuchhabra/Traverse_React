import React from 'react'
import "../index.css"

export default function Button({name,color,onclick}) {

    // returning part
    return (
        <div>
            <button style={{"backgroundColor":color}} className="btn" onClick={onclick}>{name} </button> 
        </div>
    )
}
