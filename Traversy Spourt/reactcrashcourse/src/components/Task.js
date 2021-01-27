import React from 'react'
import { FaTimes } from 'react-icons/fa';

function Task({task, remove_task ,toggle_reminder, border = false}) {

    // returning part
    return (


        <div className={`task ${border? 'reminder': ''}`} onDoubleClick={()=>{
            toggle_reminder(task)
        }}>

            <h3 key={task.id}>{task.text} 
                <span onClick ={()=>{
                    remove_task(task)}} > <FaTimes style={{color:"red"}}/>
                </span>   
            </h3>
            <p>{task.day}</p> 

        </div>
    )
}

export default Task
