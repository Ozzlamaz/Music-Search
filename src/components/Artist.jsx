//router
import { Link } from 'react-router-dom'
//icons
import {FaSpotify} from 'react-icons/fa'
import {RiAlbumFill} from 'react-icons/ri'
//other libraries
import Ratings from 'react-ratings-declarative'
import avatar from '../assets/images/avatar.webp'


function Artist({item}) {

    const {genres, id, images, popularity, name, external_urls} = item;

    return (
        <div className='mb-4 col-xxl-3 col-xl-4 col-md-6 col-sm-12'>
            <article id={id} className="card mx-auto" style={{width: '18.75rem'}}>
                <img 
                    className='card-img-top mx-auto object-fit-scale'
                    src={images.length > 0 ? images[1].url : avatar} 
                    style={{width: '17rem', height: '17rem'}} 
                    alt={name} 
                />
                <div className='card-body'>
                    <h5 className='card-title'>Artist</h5>
                    <p className="card-text">{[...name.slice(0,60) , name.length < 60 ? '' : '...']}</p>
                    <h6 className='card-subtitle'>Genres</h6>
                    <p className="card-text">{genres.length !== 0 ? genres[0] : 'Unknown'}</p>
                    <h6 className="card-subtitle">Popularity</h6>
                    <div className="card-text">
                        <Ratings rating={popularity/20} widgetRatedColors='gold'>
                            <Ratings.Widget widgetDimension="10px" />
                            <Ratings.Widget widgetDimension="10px" />
                            <Ratings.Widget widgetDimension="10px" />
                            <Ratings.Widget widgetDimension="10px" />
                            <Ratings.Widget widgetDimension="10px" />
                        </Ratings>
                    </div>
                </div>
                <div className="btn-group" role='group'>
                    <a className="p-1 btn btn-primary btn-outline-dark text-white" href={external_urls.spotify} target="_blank">
                        <span>Go Spotify </span>
                        <span><FaSpotify/></span>
                    </a>
                    <Link className="p-1 btn btn-primary btn-outline-dark text-white" to={`/${name}/albums/${id}/offset=0/page=1`}>
                        <span>Show Albums </span>
                        <span><RiAlbumFill /></span>
                    </Link>
                </div>
            </article>
        </div>
    )
}
export default Artist