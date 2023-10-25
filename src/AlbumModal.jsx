//state
import useAppContext from "./state management/useAppContext";
//components
import Album from "./Components/Resultsgrid/Child Components/Album";
//icons
import {FaSpotify} from 'react-icons/fa';

function AlbumModal() {

    const {state: {results, tracks: {albumId, list}}, dispatchers: {setTracks}} = useAppContext();

    const clearTracksList = () => {
        if(list.length > 0) {
            setTracks({albumId: '', list: []})
        }
    }
    
    return (
        <div id='album-modal' className="modal fade" tabIndex={-1} onClick={clearTracksList}>
            <div className="modal-dialog modal-dialog-scrollable text-light">
                <div className="modal-content bg-dark" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3 id='album-modalLabel' className="modal-title">{results.find(item => item.id === albumId)?.name}</h3>
                        <button type="button" className='btn btn-danger' data-bs-dismiss='modal' onClick={clearTracksList}>Close</button>
                    </div>
                    {list.length > 0 &&
                        <div className="modal-body">
                            <Album item={results.find(item => item.id === albumId)}/>
                            <div className=''>
                                <h3 className='text-center my-3'>Tracks</h3>
                                <ul className='p-0'>
                                    {list.map(track => {
                                        const {id, name, duration_ms, external_urls} = track;
                                        let duration_M = Math.floor(duration_ms /1000 /60).toString().padStart(2,'0');
                                        let duration_s = Math.floor(Math.floor(duration_ms / 1000) % 60).toString().padStart(2,'0');
                                        return  (
                                            <li key={id} className='text-dark bg-light d-flex justify-content-between align-items-center my-1 p-1 rounded'>
                                                <span>
                                                {[...name.slice(0,30) , name.length < 30 ? '' : '...']}
                                                </span>
                                                <span>
                                                    {duration_M+':'+duration_s} <a href={external_urls.spotify} target='_blank'><FaSpotify className="p-1 btn btn-primary" role='button' style={{fontSize: '2rem'}} /></a>
                                                </span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}
export default AlbumModal