

import { task } from './index'



export function pinTask(id: number, tasks: task[], setTasks: React.Dispatch<React.SetStateAction<task[]>>) {
    
    const newTaskArray = tasks.map((task) => (
        id === task.id ? { ...task, state: "TASK_PINNED" } : task
    )) as task[]
    setTasks(newTaskArray)
    
}
export function archiveTask(id: number, tasks: task[], setTasks: React.Dispatch<React.SetStateAction<task[]>>) {
    const newTaskArray = tasks.map((task) => (
        id === task.id ? { ...task, state: "TASK_ARCHIVED" } : task
    )) as task[]
    setTasks(newTaskArray)

}