//state
import useAppContext from "../../../state management/useAppContext"
import { useState, useRef } from "react"
//router
import { Link, useNavigate } from "react-router-dom"
//components
import LoadingSpinner from "./LoadingSpinner"
import AlertBox from '../../../AlertBox'
//icons
import {BiSearch} from 'react-icons/bi'

function Search() {

    const {state : {loading}} = useAppContext();

    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('album');
    const [alert, setAlert] = useState(false);

    const filterRef = useRef(null);

    const navigate = useNavigate();

    const handleSelect = () => {
        setFilter(filterRef.current.value)
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    const handleAlert = () => {
        if (input === '') {
            setAlert(true);
        }
    }


    return (
        <>
            {alert && <AlertBox setAlert={setAlert}/>}
            <div className='mb-5 d-flex flex-column justify-content-center align-items-center flex-sm-row'>
                <input 
                onKeyDown={(e) => {if(e.key === 'Enter') {navigate(`/Music-Search/${input}/${filter}/0/1`)}}} 
                className='py-1 px-1 me-1' 
                value={input} onChange={handleInput}
                style={{width: '320px'}}
                type="text" />
                <div className="">
                    <select ref={filterRef} onChange={handleSelect} className="btn btn-primary me-1" name="type" id="type">
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                    </select>
                    <Link to={input !== '' && `/Music-Search/${input}/${filter}/0/1`}>
                        <button onClick={handleAlert} className="btn btn-primary me-1" type="button" ><BiSearch /></button>
                    </Link>
                </div>
                {loading && <LoadingSpinner />}
            </div>
        </>
    )
}
export default Search