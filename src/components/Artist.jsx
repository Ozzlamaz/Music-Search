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

    const genresCard = genres.length < 3 ? genres.slice(0,2) : [...genres.slice(0,2), '...']

    return (
        <div className='mb-4 col-xxl-3 col-xl-4 col-md-6 col-sm-12'>
            <article id={id} className="card mx-auto" style={{width: '18.75rem'}}>
                <img 
                className='card-img-top mx-auto object-fit-scale'
                style={{width: '17rem', height: '17rem'}} 
                src={images.length > 0 ? images[1].url : avatar} 
                alt={name} />
                <div className='card-body'>
                    <h5 className='card-title'>Artist</h5>
                    <p className="card-text">{[...name.slice(0,60) , name.length < 60 ? '' : '...']}</p>
                    <h6 className='card-title'>Genres</h6>
                    <p className="card-text">{genres == '' ? 'Unknown' : genresCard.join(', ')}</p>
                    <h6 className="card-title">Popularity</h6>
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
                        <span style={{fontSize: '0.8rem'}} className="me-1">Go Spotify</span>
                        <span><FaSpotify/></span>
                    </a>
                    <Link className="p-1 btn btn-primary text-white btn-outline-dark" to={`/${name}/albums/${id}/offset=0/page=1`}>
                        <span style={{fontSize: '0.8rem'}} className="me-1">Show Albums</span>
                        <span><RiAlbumFill /></span>
                    </Link>
                </div>
            </article>
        </div>
    )
}
export default Artist