import React from 'react'
import { pinTask, archiveTask } from './TaskLogic'
import TaskList from './Tasklist'
import { task } from './index'
import { useEffect } from 'react'
import './TaskWrapper.css'
const sleep = (time: number) => new Promise(acc => setTimeout(acc, time))



const TaskWrapper: React.FC<{ taskData: task[] }> = ({ taskData }) => {
    const [loading, setLoading] = React.useState(false)
    const [tasks, setTasks] = React.useState<task[]>([]) 

    useEffect(() => {
        if (taskData.length > 0) {
            setTasks([
                ...tasks,
                ...taskData
            ])
        }
        
        
    }, [taskData])
    async function onPinTask(id: number) {
        setLoading(true)
        pinTask(id, tasks, setTasks)
        await sleep(500)
        setLoading(false)
    }
    async function onArchiveTask(id: number) {
        setLoading(true)
        archiveTask(id, tasks, setTasks)
        await sleep(500)
        setLoading(false)
    }
    return (
        <div className='task-wrapper'>
            <TaskList tasks={tasks} events={{ onPinTask, onArchiveTask }} loading={loading} />
        </div>
    )
}

export default TaskWrapper