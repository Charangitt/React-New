import { useState } from 'react'
import React from 'react'
import ProductCard from './ProductCard'

const App2 = () => {

    const[input,setInput] = useState("")
    const[expense,setExpense] = useState([])
    const[amount,setAmount] = useState(0)
    const[total,setTotal] = useState(0)

    const addExpense = (e) => {
        e.preventDefault()

        const newExpense = {
            id : Date.now(),
            text : input,
            amount : Number(amount),
            completed : false
        }

        setExpense([...expense,newExpense])
        setTotal((prev)=>prev+amount)
        setAmount(0)
        setInput("")

    }

    const deleteExpense = (id,amount) => {
        setExpense(expense.filter((item)=>item.id!==id))
        setTotal((prev)=>prev-amount)
    }

    const toggleExpense = (id) => {
        setExpense(expense.map((item)=>item.id===id?{...item,completed:!item.completed} : item))
    }

  return (
    <>
         <div>
            <input type="text" value={input} placeholder="Add expense here" onChange={(e)=>setInput(e.target.value)}/>
            <input type="text" value={amount} placeholder="Add expense Amount" onChange={(e)=>setAmount(Number((e.target.value)))}/>
            <button onClick={addExpense}>Add Expense</button>
        </div>   
        
        {expense.map((item,index)=>(
            <ProductCard props = {item} onDelete={deleteExpense} onToggle={toggleExpense} />
        ))}

        <p>Total Amount is {total}</p>
    </>
  )
}

export default App2