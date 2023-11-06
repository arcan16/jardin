import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import { Menu } from './Components/Menu'
import { Nosotros } from './pages/Nosotros'
import { Inscripciones } from './pages/Inscripciones'
import { Calendario } from './pages/Calendario'
import { Contacto } from './pages/Contacto'
import { NavBar } from './Components/NavBar'


function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='' element={<Home/>}/>
          <Route path='/nosotros' element={<Nosotros/>}/>
          <Route path='/inscripciones' element={<Inscripciones/>}/>
          <Route path='/calendario' element={<Calendario/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App
