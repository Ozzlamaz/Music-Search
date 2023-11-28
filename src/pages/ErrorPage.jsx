import { useNavigate, useRouteError } from "react-router-dom"
import { Link } from "react-router-dom";
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
            <Link onClick={() => {navigate(-1)}} className="btn btn-danger" type="button">Go Back</Link>
        </div>
    )
}
export default ErrorPage