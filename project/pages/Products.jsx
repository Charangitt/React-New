import React from 'react'
import useFetch from '../hooks/useFetch'
import { useMemo , memo} from 'react'
import { useState , useRef} from 'react'
import { useEffect } from 'react'
import { use } from 'react'

function Products() {
  const { data, error, loading } = useFetch("https://fakestoreapi.com/products")
  const [name, setName] = useState("")
  const searchRef = useRef()

  // if(loading) return <h1>Loading</h1>
  // if(error) return <h1>ERROR</h1>
  console.log("hi")



  useEffect(()=>{
    if(!loading) searchRef.current.focus()
  })
  const filteredData = useMemo(() => data.filter((item)=>item.title.toLowerCase().includes(name.toLowerCase())),[data, name])
  const total = useMemo(()=>
    filteredData.reduce((acc , curr)=>acc+curr.price,0)
  ,[filteredData])
  return (
    <div>
      <input type="text" placeholder='Enter product name' ref={searchRef} onChange={(e)=>setName(e.target.value)}/>
      <h1>{filteredData.length} items</h1>
      {filteredData.map(item => {
        return (
          <div className='flex gap-5 flex row'>
        <ul className='border border-1px-black mt-5'>
          <img className='h-[60px]' src={item.image} alt="" />
          <li>{item.title}</li>
          <li>${item.price}</li>
        </ul>
        </div>
        )

      })}
      <h1>Total Price ${total}</h1>
    </div>
  )
}

export default memo(Products)