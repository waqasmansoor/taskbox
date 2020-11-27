import React from 'react'

import TaskWrapper from './TaskWrapper'

import {DefaultList} from './TaskList.stories'





export default {

    title:"TASKWRAPPER",

    component:TaskWrapper,

    

}



function Stage({children,...props}:any){

    const [state,setState]=React.useState({})

    return (

        <div {...props}>

            {children(state,setState)}

        </div>

    )

}



function State({state,...props}:any){

    return(

        <div {...props}>

            Parent state: <pre>

                {JSON.stringify(state)}

            </pre>

        </div>

    )

}



const Template=(args:any)=><TaskWrapper {...args}/>





export const Default=Template.bind({}) as any

Default.args={

    taskData:DefaultList.args.tasks

    

}







