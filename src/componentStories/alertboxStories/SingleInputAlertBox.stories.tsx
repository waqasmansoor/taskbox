import React from 'react'
import SingleInputAlertBox from '../components/alertBox/SingleInputAlertBox'

export default {
    title:"SingleInputAlertBox",
    component:SingleInputAlertBox
}

const Template=(args:any)=><SingleInputAlertBox {...args}/>

export const Default=Template.bind({}) as any
Default.args={
    input_title:"Task Name"
}
