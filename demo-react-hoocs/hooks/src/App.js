import TaskList from './components/TaskList';
import './App.css';
import CreateTask from './components/CreateTask';
import useFetch from './hooks/useFetch';
import useTodoFetch from './hooks/useTodoFetch';
import { createContext } from 'react';
import { TaskContext } from './context/TaskContext';

function App() {
  // const [tasks, setTasks] = useState([ //imame initial stoinost masiv
  //   { _id: 1, title: 'first' },
  //   { _id: 2, title: 'second' },
  //   { _id: 13, title: 'third' },
  // ])

  // useEffect(()=>{//i tova e zapazvane v stata
  //   fetch('http://localhost:3030/jsonstore/todo')
  //   .then(result=>result.json())
  //   .then(result=>{
  //     setTasks(Object.values(result));
  //   })
  // }, [])

  const [tasks, setTasks, isLoading] = useFetch('http://localhost:3030/jsonstore/todo', []);
  const { removeTodo, createTodo, updateTodo } = useTodoFetch()
  const createTaskHandler = async (newTask) => {
    const createdTask = await createTodo(newTask)//tuk suzdavam todo v servera, sled koeto go dobavqm v su6testvuva6tia state
    setTasks(state => [ //trqbva da napravim nova referenzia na masiva, i trugvame ot poslednata stoinost na masiva, pribavqiki mu noviq task
      ...state,
      createdTask //dobavqm novoto v stata
    ]);
  }


  const taskDeleteHandler = (taskId) => {
    removeTodo(taskId)//purvo go iztrivame ot servura
      .then(result => {  //i samo togava go iztrivame i ot state
        setTasks(state => state.filter(x => x._id != taskId));
      })
    //setTasks(state=> state.filter(x=> x._id != taskId));//tova e iztrivane samo ot state,
    // trqbva da se napravi i iztrivane ot servera i tui kato imame povtarqemost na funkzionalnost ili logika,
    //6te si napravq CUSTOM HOOC
  }

  const toggleTask = async (task) => {
    const updatedTask = {...task, isCompleted : !task.isCompleted};
    await updateTodo(task._id, updatedTask);//purvo updatvame servura
    setTasks(state => state.map(x => x._id == task._id ? updatedTask : x))//posle updatvame state
  }
  return (
    <TaskContext.Provider value={{ tasks, taskDeleteHandler, toggleTask }}>
      <div className="App">
        <header>
          <h1>TO DO App</h1>
        </header>
        <main>
          {isLoading
            ? <p>Loading...</p>
            : <TaskList />}

          <CreateTask createTaskHandler={createTaskHandler} />
        </main>
      </div>
    </TaskContext.Provider>
  );
}

export default App;
