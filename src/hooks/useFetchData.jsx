import React, { useEffect, useState } from 'react'
import { token } from '../config'

const useFetchData = (url) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [err, setErr] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(url, {
                    method: 'get',
                    headers: { Authorization: `Bearer ${token()}` }
                })
                const result = await res.json()
                if (!res.ok) {
                    throw new Error(result.message + '☹️')
                }
                setData(result.data)
                setLoading(false)
            } catch (error) {
                setLoading(false)
                setErr(error.message)
            }
        }
        fetchData()
    }, [url])
    return {
        data, loading, err
    }
}

export default useFetchData
