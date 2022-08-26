import { useEffect, useState } from "react"
import { useSelector } from 'react-redux'
import axios from "axios"

function useFetchData(pageNumber) {

    const topic = useSelector(state => state.topic.current)

    const search = useSelector(state => state.search.query)

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState([])
    // const [hasMore, setHasMore] = useState(false)
    
    useEffect(() => {
        
        setData([])
    
    }, [topic, search])

    useEffect(() => {

        let preURL = ""
        let sufURL = ""

        if(search) {
            preURL = "https://api.unsplash.com/search/"
            sufURL = `&query=${search}`
        }
        else if(topic == "editorial") {
            preURL = "https://api.unsplash.com/"
        }
        else {
            preURL = `https://api.unsplash.com/topics/${topic}/`
        }

        setLoading(true)

        axios({
            method: "GET",
            url: preURL+`photos?page=${pageNumber}&client_id=6FwjynLcZYVVjDDvsN_Ls-2mWKJrAlirkzoBG00JioU&count=10`+sufURL
        })
            .then(res => {
                let result = search ? res.data.results : res.data 

                setData(prev => [...new Set([...prev, ...result])])
                setLoading(false)
            })
            .catch(err => setError(err))

    }, [pageNumber, topic, search])

    return { loading, error, data }
}

export default useFetchData