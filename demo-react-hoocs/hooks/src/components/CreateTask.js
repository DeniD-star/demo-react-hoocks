import React, { useState } from 'react'

const CreateTask = ({
    createTaskHandler
}) => {
const[task, setTask] = useState('');

    const onSubmit=(e)=>{
        e.preventDefault();
        createTaskHandler(task);
        setTask('');
    }

    const onChange= (e)=>{
        setTask(e.target.value);
    }
  return (
  <form onSubmit={onSubmit}>
      <input type="text"
       name="taskName" 
       value={task}
       onChange={onChange}
        placeholder="Do the dishes"/>
      <input type="submit" value="Add"/>
  </form>
  )
}

export default CreateTask;