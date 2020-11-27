import React from 'react'

import { task } from './index'



import './Task.css'





export interface TaskProps {

    task: task,

    key?:number,

    events: {

        onPinTask: (id: task["id"]) => void,

        onArchiveTask: (id: task["id"]) => void

    }



}



const Task = (props: TaskProps) => {

    const { task: { id, state, value }, events: { onArchiveTask, onPinTask } } = props



    return (

        <div className="list-item" {...props}>

            <label className='checkbox' >

                <input type='checkbox' name="checked" disabled={true} defaultChecked={state === "TASK_ARCHIVED"}



                />

                <span onClick={() => onArchiveTask(id)}></span>



            </label>

            <div className='text'>

                <input type="text" value={value} readOnly={true} placeholder="Input Title" />

            </div>

            <div className='actions'>

                {state !== "TASK_ARCHIVED" ?

                    state === "TASK_INBOX" ? <span onClick={()=>onPinTask(id)} className="grey-star">&#9734;</span> : <span className="blue-star">&#9734;</span>

                    : null

                }



            </div>

        </div>

    )

}

export default Task