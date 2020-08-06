import { useState ,useEffect} from 'react'
import getGif from '../helpers/getGif'

const useFetchGif = (category:string) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGif(category)
            .then( data => {
                setTimeout(() => {
                    setState({
                        data,
                        loading: false
                    })
                },3000)
            })
            .catch(console.log)
    },[category])

    return state
}

export default useFetchGif