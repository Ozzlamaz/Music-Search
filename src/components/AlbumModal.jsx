//state
import useAppContext from "../context/useAppContext";
//components
import Album from './Album';
import LoadingSpinner from "./LoadingSpinner";
import Tracks from "./Tracks";

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
                        <Tracks tracksList={tracksList}/>
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