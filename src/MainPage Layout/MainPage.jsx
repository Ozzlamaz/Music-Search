//components
import Search from './Components/Search'
import Footer from './Components/Footer'
import Header from "./Components/Header"
//router
import { Outlet } from "react-router-dom"

function MainPage() {

    return (
        <>
            <Header />
            <main className='container'>
                <Search />
                <Outlet />
            </main>
            <Footer />
        </>
    )
}
export default MainPage;