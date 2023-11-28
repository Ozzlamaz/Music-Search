//state
import useAppContext from '../context/useAppContext';
//hooks
import getTracks from '../services/getTracks';
//icons
import {FaSpotify} from 'react-icons/fa'
import {FaMusic} from 'react-icons/fa'


function Album({item}) {
    const {id, name, release_date, total_tracks, images, artists, external_urls} = item;

    const {state : {album: {albumId}, setAlbum}} = useAppContext();

    return (
        <article className='card mx-auto' style={albumId !== id ? {width: '18.75rem'} : {width: '100%'}}>
            <img 
                className="card-img-top mx-auto object-fit-scale" 
                src={images[1].url} 
                style={{width: '17rem', height: '17rem'}}
                alt={name} 
            />
            <div className='card-body'>
                <div className={albumId === id ? 'text-center' : undefined}>
                    <h5 className='card-title'>Album</h5>
                    <p className="card-text">{[...name.slice(0,37) , name.length < 37 ? '' : '...']}</p>
                    <h6 className='card-subtitle'>Artist</h6>
                    <p className="card-title">{artists[0].name}</p>
                    <h6 className='card-subtitle'>Release Date</h6>
                    <p className="card-text">{release_date.split('-').reverse().join('/')}</p>
                </div>
            </div>
            <div className="btn-group" role='group'>
                <a className="p-1 btn btn-primary btn-outline-dark text-white" href={external_urls.spotify} target="_blank">
                    <span>Go Spotify </span>
                    <span><FaSpotify /></span>
                </a>
                {albumId !== id &&
                <button
                    className="p-1 btn btn-primary btn-outline-dark text-white" 
                    onClick={() => getTracks(id, setAlbum)} 
                    data-bs-toggle="modal" 
                    data-bs-target='#album-modal'
                    type="button" 
                    >
                    <span>{`Show ${total_tracks} tracks `}</span>
                    <span><FaMusic/></span>
                </button> 
                }
            </div>
        </article>
    )
}

export default Album