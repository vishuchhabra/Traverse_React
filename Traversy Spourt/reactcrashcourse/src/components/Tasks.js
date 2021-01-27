import React ,{useState} from 'react'
import Task  from '../components/Task'
import '../index.css'

function Tasks({tasks, remove_task,toggle_reminder}) {
    
    // returning part
    return (
        <div>
            
            { (tasks.length >0) ? tasks.map((task, index)=>(
           
           (task.reminder)
           ?

            <Task key={index} task={task}  remove_task= {remove_task} toggle_reminder={toggle_reminder} border={true} />
            :
            <Task key={index} task={task}  remove_task= {remove_task} toggle_reminder={toggle_reminder} />

            )):
                <div className="task">No Pending Task Found . . . . . .</div>
            }
          
        </div>
    )
}

export default Tasks
