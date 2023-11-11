//state
import useAppContext from "../state management/useAppContext";
//components
import Album from '../Results Grid Layout/Components/Album';
import LoadingSpinner from "../MainPage Layout/Components/LoadingSpinner";
//icons
import {FaSpotify} from 'react-icons/fa';

function AlbumModal() {

    const {state: {album: {item, tracksList}, setAlbum}} = useAppContext();

    const clearTracksList = () => {
        if(tracksList.length > 0) {
            setAlbum({item: {}, albumId: '', tracksList: []});
        }
    }
    
    return (
        <div id='album-modal' className="modal fade" tabIndex={-1} onClick={clearTracksList}>
            <div className="modal-dialog modal-dialog-scrollable text-light">
                <div className="modal-content bg-dark" onClick={(e) => e.stopPropagation()}>
                    <div className="modal-header">
                        <h3 id='album-modalLabel' className="modal-title">{item.name}</h3>
                        <button type="button" className='btn btn-danger' data-bs-dismiss='modal' onClick={clearTracksList}>Close</button>
                    </div>
                    {tracksList.length > 0 ?
                        <div className="modal-body">
                            <Album item={item}/>
                            <div>
                                <h3 className='text-center my-3'>Tracks</h3>
                                <ul className='p-0'>
                                    {tracksList.map(track => {
                                        const {id, name, duration_ms, external_urls} = track;
                                        let duration_M = Math.floor(duration_ms /1000 /60).toString().padStart(2,'0');
                                        let duration_s = Math.floor(Math.floor(duration_ms / 1000) % 60).toString().padStart(2,'0');
                                        return  (
                                            <li key={id} className='text-dark bg-light my-1 p-1 rounded'>
                                                <span>
                                                {name}
                                                </span>
                                                <div className="mt-1 text-end">
                                                    {duration_M+':'+duration_s} <a href={external_urls.spotify} target='_blank'><FaSpotify className="p-1 btn btn-primary" role='button' style={{fontSize: '2rem'}} /></a>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        :
                        <LoadingSpinner/>
                    }
                </div>
            </div>
        </div>
    )
}
export default AlbumModal