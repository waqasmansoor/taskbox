import React from 'react'
import './Button.css'

interface btnProps{
    btn_text:string,
    onClick?:()=>void
}

const Button:React.FC<btnProps>=({btn_text,...props})=>{
    return(
        
            <button className="btn-container" {...props}>
                {btn_text}
            </button>
        

    )
}

export default Button