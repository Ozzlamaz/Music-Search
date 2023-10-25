//state
import useAppContext from "../../../state management/useAppContext"
//components
import Album from "./Album"

function AlbumGrid({item}) {
    const {state: {tracks : {albumId} }} = useAppContext();
  return (
    <div className={albumId !== item.id ? 'mb-4 col-xxl-3 col-xl-4 col-md-6 col-sm-12' : 'mb-4 col-xxl-3 col-xl-4 col-md-6 col-sm-12 invisible'}>
        <Album item={item}/>
    </div>   
  )
}
export default AlbumGrid