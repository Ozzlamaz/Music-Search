//state
import AppContextProvider from './state management/AppContextProvider.jsx'
//router
import {Routes, Route} from 'react-router-dom'
//components
import MainPage from './Components/Mainpage/MainPage.jsx'
import Footer from './Components/Mainpage/Child Components/Footer.jsx'
import AlbumModal from './AlbumModal'
import ResultGrid from './Components/Resultsgrid/ResultGrid.jsx'
import ErrorPage from './ErrorPage.jsx'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'

function App() {

  return (
    <>
      <AppContextProvider>
          <Routes>
                <Route path='/Music-Search' element={<MainPage />}>
                  <Route path=':inputParam/:filterParam/:offsetParam/:pageParam' element={<ResultGrid />}/>
                  <Route path=':artistIdParam/:offsetParam/:pageParam' element={<ResultGrid />}/>
                  <Route path='*' element={<ErrorPage />}/>
                </Route>
          </Routes>
        <Footer />
        <AlbumModal />
      </AppContextProvider>
    </>
  )
}

export default App
