import React from 'react'
import {useState, useRef, useEffect} from 'react'
import Card from './Card'

const App2 = () => {
    const [posts,setPosts] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState("")
    const [search, setSearch] = useState("")
    const searchRef = useRef(null)
    const [count,setCount] = useState(0)

    useEffect(()=>{
        async function data(){
        try{
            const data = await fetch("https://jsonplaceholder.typicode.com/posts")
            const parsed = await data.json()
            setPosts(parsed)
            setLoading(false)
        }catch(err){
            setError("Error Loading Data")
            setLoading(false)
        }

    }

    data();

},[])    

    const filteredData = posts.filter((e)=>e.title.toLowerCase().includes(search.toLowerCase()))

    useEffect(()=>{
        setCount(filteredData.length)
    },[search])
    useEffect(()=>{
        if(loading==false) searchRef.current.focus()
    },[loading])

    if(loading) return <h1>DATA IS LOADING</h1>
    if(error) return <h1>ERROR</h1>
    
  return (
    <div>
        <input
            ref = {searchRef}
            value = {search}
            type = "text"
            onChange={(e)=>setSearch(e.target.value)}
        />
        <span> {count} </span>

        {filteredData.map((item)=><Card props={item} />)}

    </div>
  )
}

export default App2