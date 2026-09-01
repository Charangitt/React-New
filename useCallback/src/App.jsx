import React from 'react'
import {useState, useCallback, useMemo} from 'react'
import ProductList from './ProductList'


export const App = () => {
  const [number, setNumber] = useState(0)
  const [theme, setTheme] = useState(false)
  const [prods, setProducts] = useState([
        {
          id:1, name:"laptop", price:500000
        },
        {
          id:2, name:"mobile", price:100000
        },
        {
          id:3, name:"phone", price:20000
        }
      ])

  const toggleTheme = () => {
    console.log("theme toggled")
  }

  const getProducts = useCallback(() => {
      return prods
  },[])

    const calculate = useMemo(() => prods.reduce((acc,curr)=>acc+curr.price,0) , [prods])

  return (
    <div>
      <input placeholder="Enter a Number" type="number" onChange={e=>setNumber(Number(e.target.value))}>
      </input>
      <button  onClick={toggleTheme}> Toggle Theme
      </button>
      <ProductList getProducts={getProducts} props={number}/>
      
    </div>
  )
}
