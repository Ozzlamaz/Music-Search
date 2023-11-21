//state
import useAppContext from '../context/useAppContext'
//router
import { useLoaderData, useNavigation } from 'react-router-dom'
//components
import AlbumGrid from '../components/AlbumGrid'
import Artist from '../components/Artist'
import Pagination from '../components/Pagination'
import ErrorPage from './ErrorPage'
import LoadingSpinner from '../components/LoadingSpinner'


function ResultGrid() {

    const navigation = useNavigation();
    const {results, total} = useLoaderData();

    if(navigation.state === 'loading') {
        return (
            <div className='d-flex justify-content-center '>
                <LoadingSpinner />
            </div>
        )
    }

    if(results.length === 0) {
        return <ErrorPage />
    }

    return (
        <div className='container'>
            <div className='row'>
                {results.map(item => item.type === 'album' ? <AlbumGrid key={item.id} item={item}/> : <Artist key={item.id} item={item}/>)}
            </div>  
            {results.length > 0 && <Pagination results={results} total={total}/>}
        </div>
        )
    }
        
export default ResultGrid