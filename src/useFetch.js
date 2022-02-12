import { useState, useEffect} from "react"
import axios from 'axios'

const useFetch = (url) => {
    const [ products, setProducts ] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        axios.get(url).then((response)=> {
            return response.data
         }).then((data)=> {
             setProducts(data)
             setIsLoading(false)
         })

    }, [url]);

    return { products, isLoading }
}
export default useFetch;