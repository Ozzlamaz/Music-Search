//context
import AppContextProvider from './context/AppContextProvider.jsx'
//router
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
// pages & modals
import MainPage from './layout/MainPage.jsx'
import AlbumModal from './components/AlbumModal.jsx'
import ResultGrid from './pages/ResultGrid.jsx'
import ErrorPage from './pages/ErrorPage.jsx'
import Welcome from './pages/Welcome.jsx'
//Loaders
import getResults from './services/Loaders/getResults.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainPage />}>
      <Route index element={<Welcome />}/>
      <Route 
        path=':inputParam/:filterParam/:artistIdParam?/:offsetParam/:pageParam' 
        element={<ResultGrid />}
        loader={getResults}
        errorElement={<ErrorPage />}
        />
      {/* <Route 
        path=':artistIdParam/:offsetParam/:pageParam' 
        element={<ResultGrid />}
        loader={getResults}
        errorElement={<ErrorPage />}
        />
      <Route path='*' element={<ErrorPage />}/> */}
    </Route>
  )
)

function App() {

  return (
    <>
      <AppContextProvider>
        <RouterProvider router={router}/>
        <AlbumModal />
      </AppContextProvider>
    </>
  )
}

export default App
