import React from 'react'

import * as task from './Task.stories'
import TaskList,{TaskListProps} from '../../components/taskbox/Tasklist'


export default {
    title:"TASKLIST",
    component:TaskList,
    decorators: [(story:any) => <div style={{ padding: '3rem' }}>{story()}</div>]
}

const Template=(args:TaskListProps)=><TaskList {...args}/>
export const DefaultList=Template.bind({}) as any;
DefaultList.args={
    tasks:[
        
        {...task.Default.args.task,id:1,value:"task 1"},
        {...task.Default.args.task,id:2,value:"task 2"},
        {...task.Default.args.task,id:3,value:"task 3"},
        {...task.Default.args.task,id:4,value:"task 4"},
        {...task.Default.args.task,id:5,value:"task 5"},
        {...task.Default.args.task,id:6,value:"task 6"},
        {...task.Default.args.task,id:7,value:"task 7"}
    ],
    events:{
        onPinTask:()=>{},
        onArchiveTask:()=>{}
    }
}
export const PinnedList=Template.bind({}) as any
PinnedList.args={
    tasks:[
        ...DefaultList.args.tasks.slice(0,6),
        {id:7,state:"TASK_PINNED",value:"Pinned Task"}
    ],
    events:{
        ...DefaultList.args.events
    }
}
export const Loading=Template.bind({}) as any
Loading.args={
    tasks:[],
    loading:true
}
export const Empty=Template.bind({}) as any
Empty.args={
    tasks:[],
    loading:false
}