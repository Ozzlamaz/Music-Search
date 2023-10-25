//components
import Search from "./Child Components/Search"
//router
import { Outlet } from "react-router-dom"

function MainPage() {

    return (
        <main>
            <h1 className='text-center mb-5'>
                <div>
                    Music Search
                </div>
                <div style={{fontSize: '0.6rem'}}>
                    Powered by spotify Web API
                </div>
            </h1>
            <Search />
            <Outlet />
        </main>
    )
}
export default MainPage;