import {FaSpotify} from 'react-icons/fa';

function Tracks({tracksList}) {
  return (
    <div>
        <h3 className='text-center my-3'>Tracks</h3>
        <ul className='p-0'>
            {tracksList.map(track => {
                const {id, name, duration_ms, external_urls} = track;
                let duration_M = Math.floor(duration_ms /1000 /60).toString().padStart(2,'0');
                let duration_s = Math.floor(Math.floor(duration_ms / 1000) % 60).toString().padStart(2,'0');
                return  (
                    <li key={id} className='text-dark bg-light my-2 p-1 rounded'>
                        <span>{name}</span>
                        <div className="mt-1 text-end">
                            <span className='me-1'>{`${duration_M}:${duration_s}`}</span>
                            <a href={external_urls.spotify} target='_blank'><FaSpotify className="p-1 btn btn-primary" role='button' style={{fontSize: '2rem'}} /></a>
                        </div>
                    </li>
                )
            })}
        </ul>
    </div>
  )
}
export default Tracks