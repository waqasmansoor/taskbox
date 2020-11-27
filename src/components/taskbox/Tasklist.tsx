import React from 'react'
import './TaskList.css'

import  Task,{ TaskProps } from './Task'
import { task } from './index'



export interface TaskListProps {
    tasks: task[],
    loading: boolean,
    events: TaskProps["events"]

}

const TaskList = (props: TaskListProps) => {

    const loadingRow = (i:number) => {
        return (
            <div className='loading-row' key={i}>

                <span className='glow-checkbox'></span>
                <span className='glow-text'>
                    <span>looding</span><span>ok</span><span>state</span>
                </span>
                <span className='glow-star'>
                    <span>&#9734;</span>
                </span>
            </div>
        )
    }


    if (props.loading) {
        return (
            <div>
                {props.tasks.map((t,i)=>(
                    loadingRow(i)
                ))}
                

            </div>
        )
    }
    if (props.tasks.length === 0) {
        return (
            <div className='empty-box-container'>
                <div className='empty-box'>
                    <div className='box-checkmark'>&#10003;</div>
                    <div className='box-title'>You have no tasks</div>
                    <div className='box-subtitle'>Sit back and relax</div>
                </div>
            </div>
        )
    }
    const taskInOrder = [
        ...props.tasks.filter(t => t.state === "TASK_PINNED"),
        ...props.tasks.filter(t => t.state !== "TASK_PINNED")
    ]
    return (
        <div>
            {

                taskInOrder.map((task, i) => (
                    <Task task={task} events={props.events} key={i} />
                ))
            }
        </div>
    )
}

export default TaskList