import { fireEvent } from '@testing-library/react'
import React, { useState, useEffect } from 'react'
import AddTask from './components/AddTask'
import Header from './components/Header'
import Tasks from './components/Tasks'
import './index.css'



const App = ()=>{

  const [showAddTask,setShowAddTask]  = useState(false)


  // functional part
  const [tasks, setTasks] = useState([])

  useEffect(()=>{
    const getTasks = async ()=>{
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  },[])

  // fetch tasks
  const fetchTasks = async()=>{
    const res = await fetch('http://localhost:5000/tasks')
    const data = res.json()
    return data;
  }

  // fetch task
  const fetchTask = async (id)=>{
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = res.json()
    return data;
  }



  // removing the task
  const remove_task  = async (given)=>{

    await fetch(`http://localhost:5000/tasks/${given.id}`,{
      method:"DELETE"
    })

    let task_list = tasks.filter(task => task!= given)
    setTasks(task_list)
  }

  // toggle the reminder
  const toggle_reminder = async (given)=>{

    const taskToToggle = await fetchTask(given.id)

    const updTask = {...taskToToggle,reminder:!taskToToggle.reminder}

    const res = await fetch(`http://localhost:5000/tasks/${given.id}`,{
      method:'PUT',
      headers:{
        'Content-type':'application/json'
      },
      body:JSON.stringify(updTask)
    })

    const data = await res.json()
    let task_list = tasks.map( (task)=>
    task==given ? {...task,reminder : data.reminder} : task
    )
    setTasks(task_list)
  }

  // adding the task
  const addTask =  async (task)=>{

    const res = await fetch('http://localhost:5000/tasks',{
      method:"POST",
      headers:{
        'content-type':'application/json' 
      },
      body: JSON.stringify(task)
    })
    const data = await res.json()
    setTasks([...tasks,data])
    // let size = tasks.length +1
    // task.id = size;
    // setTasks([...tasks,task])

  }

  // returing part
  return (
    <div className="container">
      <Header name={"Task Tracker"} onAdd ={()=>setShowAddTask(!showAddTask)} showAdd = {showAddTask}/>
      {showAddTask &&  <AddTask addTask={addTask}/>}
        <Tasks tasks={tasks} remove_task= {remove_task} toggle_reminder={toggle_reminder}></Tasks>

    </div>
  )
} 

// exporting the application
export default App