import React from 'react'
import '../index.css'
import Button from './Button'
export default function Header(props) {


    // returning part
    return (
        <div>
            <header  className="header">
                <h1>{props.name}</h1>
                {
                    props.showAdd ? 
                    <Button name={"Close"} color={"red"}onclick= {props.onAdd}></Button>
                    :
                    <Button name={"Add"} color={"green"}onclick= {props.onAdd}></Button>

                }

            </header>
        </div>
    )
}

 