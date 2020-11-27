import React from 'react'
import Button from '../button'
import './SingleInputAlertBox.css'

const SingleInput_alertBox:React.FC<{input_title:string,addTask:(inputText:string)=>void}>=({input_title,addTask})=>{
    const [inputText,setInputText]=React.useState('')
    return(
        <div className='alertbox_container'>
            <div className="alertbox">
                <div className='alertbox-textarea'>
                    <span>{input_title}</span>
                    <label>
                        <input type="text" placeholder="Type Something" onChange={(e)=>setInputText(e.target.value)}/>
                    </label>
                </div>
                <div className='alertbox-btn'>
                    <Button btn_text={"Add"} onClick={()=>addTask(inputText)}/>
                </div>
                
            </div>
        </div>
    )
}

export default SingleInput_alertBox