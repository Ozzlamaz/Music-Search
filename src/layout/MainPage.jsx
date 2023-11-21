//components
import Search from '../components/Search'
import Footer from '../components/Footer'
import Header from "../components/Header"
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