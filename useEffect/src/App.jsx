import React from 'react'
import {useEffect, useState, useRef} from 'react'
import Card from './Card'

const App = () => {

  const [users,setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error,setError] = useState(null)
  const [search,setSearch] = useState("")
  const searchRef = useRef(null)

  useEffect(() => {
    
    async function data() {
      try{
      const fetchData = await fetch("https://jsonplaceholder.typicode.com/users")
      const parsedData = await fetchData.json()
      setUsers(parsedData)
      setLoading(false);
      }catch(err){
        setError("Failed to load Data")
        setLoading(false)
      }
    }
     
    data()
    
  }, [])

  useEffect(() => {
  if (!loading) {
    searchRef.current.focus()
  }
}, [loading])


  const filteredData = users.filter((user)=>user.name.toLowerCase().includes(search.toLowerCase()))
  
  if(loading) return <h1>Data is Loading</h1>
  if(error) return <h1>Error loading the Data</h1>
  
  return (
    <div>
      <input
        ref = {searchRef}
        type = "text"
        value = {search}
        onChange={(e)=>setSearch(e.target.value)}
      />
       {filteredData.map((item)=>(
        <div className='flex flex-col gap-10'>
          <Card props={item}/>
        </div>
        ))}
    </div>
  )
}

export default App