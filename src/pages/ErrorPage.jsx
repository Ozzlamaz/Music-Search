import { useNavigate, useRouteError } from "react-router-dom"
import {RiEmotionSadLine} from 'react-icons/ri'

function ErrorPage() {
    const navigate = useNavigate();
    const error = useRouteError();

    return (
        <div className="text-center">
            <h1>Looks like there is nothing here</h1>
            <p>{error.message}</p>
            <div>
                <RiEmotionSadLine className="text-secondary" style={{fontSize: '10rem'}}/>
            </div>
            <button onClick={() => {navigate('/Music-Search/'); window.location.reload()}} className="btn btn-danger" type="button">Go Back</button>
        </div>
    )
}
export default ErrorPage