import { useState, useEffect } from "react";

export default function useFetch(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error,setError] = useState("")

    useEffect(()=>{
        async function fetchh(){
            try{
                let fetchedData = await fetch(`${url}`)
                fetchedData = await fetchedData.json()
                setData(fetchedData)
                setLoading(false)
            }catch(err){
                setError(err)
                setLoading(false)
            }
        }
        fetchh()
    },[])                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
    return {data, error, loading}
}
