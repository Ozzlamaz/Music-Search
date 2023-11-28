//components
import useAppContext from "../context/useAppContext"
import Album from "./Album"

function AlbumGrid({item}) {

  const {state: {album: {albumId}}} = useAppContext();

  return (
    <div className={'mb-4 col-xxl-3 col-xl-4 col-md-6 col-sm-12 ' + (albumId === item.id && 'invisible')}>
        <Album item={item}/>
    </div>   
  )
}
export default AlbumGrid