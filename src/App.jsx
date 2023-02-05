import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [input,setInput] = useState("");
  const [todo,setTodo] = useState([]);
  const addTodo = ()=>{
    setTodo((todo)=>{
     return [...todo,input]
    })
  }
  function deleteHandler(id){
    const taskCopy = [...todo]
    taskCopy.splice(id,1)
    setTodo(taskCopy)
  }
  return (
    <>
    <h1>React Todo App</h1>

    <div>
      <input type="text" style={{borderRadius:"5px"}} value={input} placeholder='Enter Your Todos' onChange={(e)=>{
        setInput(e.target.value)
      }} />
      <button style={{marginLeft:"8px",borderRadius:"5px"}} onClick={addTodo}>Add</button>
    </div>
    <div>
      <ul style={{listStyle:"none",border:"2px solid gray",height:"auto",borderRadius:"5px"}}>
        {todo.map((item,id)=>{
          return <li>[{id}] {item}<button style={{marginLeft:"8px"}} onClick={deleteHandler}>❌</button></li>
        })}
      </ul>
    </div>
    </>
  )
}

export default App
