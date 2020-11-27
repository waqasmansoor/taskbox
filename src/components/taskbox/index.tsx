import React from 'react'
import { useEffect } from 'react'

import TaskWrapper from './TaskWrapper'
import './Taskbox.css'

let index=1

export interface task {
    id: number,
    value: string,
    state: "TASK_PINNED" | "TASK_ARCHIVED" | "TASK_INBOX"
}
const Taskbox: React.FC<{ values?: string[] }> = ({ values }) => {
    const [taskData, setTaskData] = React.useState<task[]>([])
    
    

    
    useEffect(() => {
        
            
            let task = [] as task[]

            if(values && values.length!==0){
               task = values.map((value) => (
                {      
                    state: "TASK_INBOX",
                       id: index++,
                       value: value
                   }
   
   
               ))
               
               setTaskData(task)
               
           }
        
        
    }, [values])
    
    
    return (
        <div className="taskbox">
            <div className='taskbox-heading'>
                <span className="taskbox-archive">Archive</span><span>Task</span><span className='taskbox-pin'>Pin</span>
            </div>
            <div className='taskbox-wrapper'>
                <TaskWrapper taskData={taskData}/>
            </div>
        </div>
    )
}

export default Taskbox