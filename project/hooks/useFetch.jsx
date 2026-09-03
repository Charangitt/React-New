import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function useFetch(url) {

    const [data, setData] = useState([])
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(`${url}`)
                const parsedData = await data.json()

                setData(parsedData)
                setLoading(false)
            } catch (err) {
                setError(true)
                setLoading(false)
            }

        }
        fetchData()
},[])

    

    return { data , error, loading}
}

export default useFetch