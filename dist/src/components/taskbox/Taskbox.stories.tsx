import React from 'react'

import Taskbox from './index'





export default{

    title:"TASKBOX",

    component:Taskbox

}



const Template=(args:any)=><Taskbox {...args}/>

export const Default=Template.bind({}) as any

Default.args={

    values:["task 1","task 2","task 3"]

}