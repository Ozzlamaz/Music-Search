//state
import AppContextProvider from './state management/AppContextProvider.jsx'
//router
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
//components
import MainPage from './MainPage Layout/MainPage.jsx'
import AlbumModal from './Modals/AlbumModal.jsx'
import ResultGrid from './Results Grid Layout/ResultGrid.jsx'
import ErrorPage from './Results Grid Layout/Components/ErrorPage.jsx'
import Welcome from './MainPage Layout/Components/Welcome.jsx'
//Loaders
import getResults from './Results Grid Layout/Loaders/getResults.js'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='Music-Search' element={<MainPage />}>
      <Route index element={<Welcome />}/>
      <Route 
        path=':inputParam/:filterParam/:offsetParam/:pageParam' 
        element={<ResultGrid />}
        loader={getResults}
        errorElement={<ErrorPage />}
        />
      <Route 
        path=':artistIdParam/:offsetParam/:pageParam' 
        element={<ResultGrid />}
        loader={getResults}
        errorElement={<ErrorPage />}
        />
      <Route path='*' element={<ErrorPage />}/>
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
