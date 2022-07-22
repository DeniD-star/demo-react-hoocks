import { useState, useEffect } from 'react';
import TaskList from './components/TaskList';
import './App.css';
import CreateTask from './components/CreateTask';

function App() {
  const [tasks, setTasks] = useState([ //imame initial stoinost masiv
    { _id: 1, title: 'first' },
    { _id: 2, title: 'second' },
    { _id: 13, title: 'third' },
  ])

  const createTaskHandler = (newTask) => {
    setTasks(state => [ //trqbva da napravim nova referenzia na masiva, i trugvame ot poslednata stoinost na masiva, pribavqiki mu noviq task
      ...state,
      {
        _id: state[state.length - 1]._id + 1,
        title: newTask
      }
    ]);
  }

  const taskDeleteHandler = (taskId)=>{
      setTasks(state=> state.filter(x=> x._id != taskId))
  }
  return (
    <div className="App">
      <header>
        <h1>TO DO App</h1>
      </header>
      <main>
        <TaskList tasks={tasks} taskDeleteHandler={taskDeleteHandler}/>
        <CreateTask createTaskHandler={createTaskHandler} />
      </main>
    </div>
  );
}

export default App;
