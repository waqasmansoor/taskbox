import React from 'react'

import Button from '.'



export default {

    title:"BUTTON",

    component:Button

}



const Template=(args:any)=><Button {...args}/>

export const Default=Template.bind({}) as any

Default.args={

    btn_text:"something"

}