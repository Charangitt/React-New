import React from 'react'
import useFetch from './useFetch'
import { ThemeContext } from './ThemeContext'
import { useContext } from 'react'

export const DataCenter = () => {
 
    const {data, error, loading} = useFetch("https://jsonplaceholder.typicode.com/users")
    const {count} = useContext(ThemeContext)
    if(loading) return <h1>LOADING</h1>
    if(error) return <h1>ERROR</h1>
  return (
    <div>
        {data.map(item=>(<h1>{item.name}</h1>))}
        {count}
    </div>
  )
}
