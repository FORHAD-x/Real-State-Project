import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import LayOutOne from './Components/Layout/LayOutOne'
import Home from './pages/Home'


function App() {
  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route>

      <Route path='/' element={<LayOutOne/>}/>
      <Route index element={<Home/>}/>

    </Route>
  ))
  return (
    <>
    <RouterProvider router={myRoute}/>
    </>
  )
}

export default App
