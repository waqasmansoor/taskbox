import React from 'react'







import Task,{TaskProps} from './Task'





export default {

    title:"TASK",

    component:Task

}



const Template=(args:TaskProps)=><Task {...args}/>



export const Default=Template.bind({}) as any

Default.args={

    task:{

        id:1,

        value:"Test Task",

        state:"TASK_INBOX",

        className:"task-inbox"

    },

    events:{

        onPinTask:()=>{},

        onArchiveTask:()=>{}

    }

}

export const Pinned=Template.bind({}) as any

Pinned.args={

    task:{

    ...Default.args.task,

        state:'TASK_PINNED',

        className:'task-pinned'

    },

    events:{...Default.args.events}

}



export const Archived=Template.bind({}) as any

Archived.args={

    task:{

    ...Default.args.task,

    state:"TASK_ARCHIVED",

    className:"task-archived"

    },

    events:{...Default.args.events}

}