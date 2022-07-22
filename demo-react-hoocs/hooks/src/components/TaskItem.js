import React, { useEffect } from 'react'

const TaskItem = ({
    title, 
    taskDeleteHandler,
    taskId
}) => {

    //clean-up function, useEffect priema funkziq, koqto izvikva druga funkziq, 
    //koqto se izvikva samo vednuj, pri unmountvaneto na componenta(pri negovoto premahvane,iztrivane)
    useEffect(()=>{
        console.log('Mounted');

        return ()=>{
            console.log('Unmounted');
        }
    },[])
  return (
    <li>{title}
    <button onClick={()=>taskDeleteHandler(taskId)}>x</button>
    </li>
   
  )
}

export default TaskItem;