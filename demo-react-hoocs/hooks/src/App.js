import TaskList from './components/TaskList';
import './App.css';
import CreateTask from './components/CreateTask';
import useFetch from './hooks/useFetch';

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

  const createTaskHandler = (newTask) => {
    setTasks(state => [ //trqbva da napravim nova referenzia na masiva, i trugvame ot poslednata stoinost na masiva, pribavqiki mu noviq task
      ...state,
      {
        _id: state[state.length - 1]?._id + 1 || 1,
        title: newTask
      }
    ]);
  }

  const taskDeleteHandler = (taskId)=>{
      setTasks(state=> state.filter(x=> x._id != taskId));//tova e iztrivane samo ot state,
      // trqbva da se napravi i iztrivane ot servera i tui kato imame povtarqemost na funkzionalnost ili logika,
      //6te si napravq CUSTOM HOOC
  }
  return (
    <div className="App">
      <header>
        <h1>TO DO App</h1>
      </header>
      <main>
        {isLoading
        ? <p>Loading...</p>
        : <TaskList tasks={tasks} taskDeleteHandler={taskDeleteHandler}/>}
        
        <CreateTask createTaskHandler={createTaskHandler} />
      </main>
    </div>
  );
}

export default App;
