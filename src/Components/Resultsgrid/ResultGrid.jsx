//state
import useAppContext from '../../state management/useAppContext'
//router
import { useParams } from 'react-router-dom'
//react hooks
import { useEffect} from 'react'
//components
import AlbumGrid from './Child Components/AlbumGrid'
import Artist from './Child Components/Artist'
import Pagination from './Child Components/Pagination'
//custom hooks
import getSearchResults from '../../hooks/getSearchResults'
import getAlbums from '../../hooks/getAlbums'
import ErrorPage from '../../ErrorPage'

function ResultGrid() {

    const {state: {results, loading}, dispatchers} = useAppContext();

    const {inputParam, filterParam, artistIdParam, offsetParam} = useParams();

    useEffect(() => {
        if(inputParam) {
            getSearchResults(inputParam, filterParam, offsetParam, dispatchers)
        }
    },[inputParam, filterParam, offsetParam])

    useEffect(() => {
        if(artistIdParam) {
            getAlbums(artistIdParam, offsetParam, dispatchers)
        }
    },[artistIdParam, offsetParam]);



    if(results.length === 0 && !loading) {
        return <ErrorPage />
    }

    return (
        <>
            <div className='container'>
                <div className='row'>
                    {results.map(item => item.type === 'album' ? <AlbumGrid key={item.id} item={item}/> : <Artist key={item.id} item={item}/>)}
                </div>  
                {results.length > 0 && <Pagination />}
            </div>
        </>
        )
        
}
export default ResultGrid