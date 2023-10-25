//state
import useAppContext from '../../../state management/useAppContext';
//hooks
import getTracks from '../../../hooks/getTracks';
//icons
import {FaSpotify} from 'react-icons/fa'
import {FaMusic} from 'react-icons/fa'


function Album({item}) {
    const {id, name, release_date, total_tracks, images, artists, external_urls} = item;
    const {state : {tracks: {albumId}}, dispatchers} = useAppContext();

    return (
        <article 
            className='card mx-auto' 
            style={albumId !== id ? {width: '18.75rem'} : {width: '100%'}}>
            <img className="card-img-top mx-auto" 
            src={images[1].url} 
            style={{width: '17rem', height: '17rem'}}
            alt={name} />
            <div className='card-body d-flex flex-column justify-content-between' style={{height: '18rem'}}>
                <div className={albumId !== id ? '' : 'text-center'}>
                    <h5 className='card-title'>Album</h5>
                    <p className="card-text">{[...name.slice(0,60) , name.length < 60 ? '' : '...']}</p>
                    <h6 className='card-subtitle'>Artist</h6>
                    <p className="card-title">{artists[0].name}</p>
                    <h6 className='card-subtitle'>Release Date</h6>
                    <p className="card-text">{release_date.split('-').reverse().join('/')}</p>
                </div>
                <div className="btn-group mb-2 w-100" role='group'>
                    <a className="p-1 btn btn-primary btn-outline-dark text-white" href={external_urls.spotify} target="_blank">
                        <span style={{fontSize: '0.8rem'}} className="me-1">Go Spotify</span><FaSpotify />
                    </a>
                    {albumId !== id &&
                        <button onClick={() => getTracks(id, dispatchers)} type="button" className="p-1 btn btn-primary text-white btn-outline-dark" data-bs-toggle="modal" data-bs-target='#album-modal'>
                            <span style={{fontSize: '0.8rem'}} className="me-1">{'Show '+total_tracks+' tracks'}</span><FaMusic/>
                        </button> 
                    }
                </div>
            </div>
        </article>
    )
}

export default Album