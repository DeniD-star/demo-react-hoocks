const url = 'http://localhost:3030/jsonstore/todo'

const useTodoFetch = () => {

    const removeTodo = (todoId)=>{
      return  fetch(`${url}/${todoId}`, {
            method: 'DELETE'
        })
        .then(res=> res.json())
    }
  return {removeTodo};
  
}

export default useTodoFetch;