import React from 'react'

import './Button.css'





const Button:React.FC<{btn_text:string,onClick?:()=>void}>=({btn_text,...props})=>{

    return(

        

            <button className="btn-container" {...props}>

                {btn_text}

            </button>

        



    )

}



export default Button