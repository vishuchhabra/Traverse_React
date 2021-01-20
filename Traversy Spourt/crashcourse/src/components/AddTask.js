import React,{useState} from 'react'

export default function AddTask({addTask}) {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!text){
            alert('Please Add Task')
            return
        }
        addTask({text,day,reminder})
        setDay('')
        setReminder(false)
        setText('')
        
    }
        return (
        <form className='add-form' onSubmit={onSubmit}>

            <div className='form-control'>
                <label htmlFor="">Task</label>
                <input type="text" name="" id="" value={text} onChange={(e)=>{
                    setText(e.target.value)
                }} placeholder="Add Task"/>
            </div>
            <div className='form-control'>
                <label htmlFor="">Day & Time</label>
                <input type="text" name="" id="" placeholder="Add Day & Time" value={day} onChange={(e)=>{
                    setDay(e.target.value)
                }}/>
            </div>
            <div className='form-control form-control-check'>
                <label htmlFor="">Set Reminder</label>
                <input  type="checkbox"

                checked={reminder}
                name="" id=""  value={reminder} onChange={(e)=>{
                    setReminder(e.currentTarget.checked)}
                } />
            </div>
            <input type="submit" name="" id="" value="Save Task" className="btn btn-block"/>

        </form>
    )
}
