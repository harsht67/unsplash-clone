import { useEffect, useState } from "react"
import axios from "axios"

function useFetchData(pageNumber) {

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    // const [hasMore, setHasMore] = useState(false)

    useEffect(() => {

        setLoading(true)

        axios({
            method: "GET",
            url: `https://api.unsplash.com/photos?page=${pageNumber}&client_id=6FwjynLcZYVVjDDvsN_Ls-2mWKJrAlirkzoBG00JioU&count=10`
        })
            .then(res => {
                setData(prev => [...prev, ...res.data])
                setLoading(false)
            })
            .catch(err => setError(err))

    }, [pageNumber])

    return { loading, error, data }
}

export default useFetchData