//state
import useAppContext from '../state management/useAppContext'
//router
import { useLoaderData, useNavigation } from 'react-router-dom'
//components
import AlbumGrid from './Components/AlbumGrid'
import Artist from './Components/Artist'
import Pagination from './Components/Pagination'
import ErrorPage from './Components/ErrorPage'
import LoadingSpinner from '../MainPage Layout/Components/LoadingSpinner'


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