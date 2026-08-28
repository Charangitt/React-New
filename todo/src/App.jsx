import { useState } from "react"

function App() {
  
  const [todos,setTodos] = useState([])
  const [input,setInput] = useState("")

  const addTodo = (e) => {
    e.preventDefault()

    if(input.trim()==="" || input.length<3) return 

    const newTodo = {
      id:Date.now(),
      text:input,
      completed:false,
    }

    setTodos([...todos,newTodo])
    setInput("")
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id!==id))
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((item)=>
      item.id===id ? {...item,completed:!item.completed} : item
    ))
  }

  

  return (
    <>
      <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} placeholder="add a new todo"/>
      <br />
      <br />
      <button onClick={addTodo}>Add Todo</button>
      <br />
      

      {todos.map((item,index)=>(
        <>
        <div className="flex justify-around">
          <input type="checkbox" checked={item.completed} onChange={()=>toggleTodo(item.id)}/>
          <span>{item.text}</span>
          <button onClick={()=>deleteTodo(item.id)}>Delete Todo</button>
        </div>
        </>
      ))}

    </>
  )
}

export default App;