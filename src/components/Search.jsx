//state
import useAppContext from '../context/useAppContext'
import { useState, useRef } from "react"
//router
import { useNavigate } from "react-router-dom"
//components
import AlertBox from './AlertBox'
//icons
import {BiSearch} from 'react-icons/bi'

function Search() {

    const [input, setInput] = useState('');
    const [filter, setFilter] = useState('album');
    const [alert, setAlert] = useState(false);

    const filterRef = useRef(null);

    const navigate = useNavigate();

    const handleSelect = () => {
        setFilter(filterRef.current.value)
    };

    const handleInput = (e) => {
        setInput(e.target.value);
    };

    const handleAlert = () => {
        if (input === '') {
            setAlert(true);
        }
    };

    const handleKeyDown = (e) => {
        if(e.key === 'Enter' && input !== '') {
            navigate(`${input}/${filter}/0/1`);
            return;
        }
        if(e.key === 'Enter' && input === '') {
            handleAlert();
            return;
        }
    };

    const handleClick = () => {
        if(input !== '') {
            navigate(`${input}/${filter}/0/1`);
            return;
        }
        handleAlert();
    };


    return (
        <>
            {alert && <AlertBox setAlert={setAlert}/>}
            <div className='mb-5 d-flex flex-column justify-content-center align-items-center flex-sm-row'>
                <input 
                 onKeyDown={(e) => handleKeyDown(e)} 
                 className='py-1 px-1 me-1' 
                 value={input} onChange={handleInput}
                 style={{width: '320px'}}
                 type="text"
                />
                <div>
                    <select 
                     ref={filterRef} 
                     onChange={handleSelect} 
                     name="type" 
                     id="type"
                     className="btn btn-primary me-1" 
                     >
                        <option value="album">Album</option>
                        <option value="artist">Artist</option>
                    </select>
                    <button
                     onClick={handleClick} 
                     className="btn btn-primary me-1"
                    >
                        <BiSearch />
                    </button>
                </div>
            </div>
        </>
    )
}
export default Search