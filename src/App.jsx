import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom'
import { Root } from './Layout/Root'
import './App.css'
import { OurCompany } from './Pages/Our_company'
import { Contacts } from './Pages/Contacts'
import { Locations } from './Pages/Locations'
import { Error } from './Pages/404_Pages'
import Home from './Pages/Home'
import { WEB_DESIGN } from './Pages/Web-Design' 
import { APP_DESIGN } from './Pages/App-Design'
import { GRAPHICS_DESIGN } from './Pages/Graphic-Design'
function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>

      <Route index element={<Home />}/>
      <Route path='/our_Company' element={<OurCompany/>}/>
      <Route path="/contact" element={<Contacts/>} />
      <Route path='/Locations' element={<Locations />} />
      <Route path='/services/web-design' element={<WEB_DESIGN/>}/>
      <Route path='/services/app-design' element={<APP_DESIGN/>}/>
      <Route path='/services/graphics-design' element={<GRAPHICS_DESIGN/>}/>
      <Route path='*' element={<Error />} />
      </Route>
    )
  );
  
  return (
  <div className='App'>
      <RouterProvider router={router}>
      
      </RouterProvider>
  </div>
  
    );
}

export default App