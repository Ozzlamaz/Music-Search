import { useNavigate } from "react-router-dom"
import {RiEmotionSadLine} from 'react-icons/ri'

function ErrorPage() {
    const navigate = useNavigate();

    return (
        <div className="text-center">
            <h1>Looks Like there is nothing here</h1>
            <div>
                <RiEmotionSadLine className="text-secondary" style={{fontSize: '10rem'}}/>
            </div>
            <button onClick={() => navigate(-1)} className="btn btn-danger" type="button">Go Back</button>
        </div>
    )
}
export default ErrorPage