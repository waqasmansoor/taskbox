import React from 'react';

import Button from './components/button'
import './App.css';
import SingleInputAlertBox from './components/alertBox'
import Taskbox from './components/taskbox/index'


// const initialData={
//   values:[
//     "one","two",'three','four',"one","two",'three','four',"one","two",'three','four',"one","two",'three','four'
//   ]
// }
function App() {
  
  const [showAlert,setShowAlert]=React.useState(false)
  const [taskName,setTaskName]=React.useState<string[]>([])
  
  function addTask(taskName:string){
    setTaskName([taskName])
    setShowAlert(false)
  }
  
  return (
    <div className='app'>
      <Taskbox values={taskName}/>
      
      <Button btn_text={"Add"} onClick={()=>setShowAlert(true)}/>
      {showAlert&&
        <SingleInputAlertBox input_title={"Add Task Name"} addTask={addTask}/>
      }
    </div>
  );
}

export default App;
