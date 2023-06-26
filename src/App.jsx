import './App.css'
import Portada from './Components/Portada/Portada'
import Satisfaccion from './Components/Satisfaccion/Satisfaccion'
import Servicios from './Components/Servicios/Servicios'
import Somos from './Components/Somos/Somos'
import Estamos from './Components/Estamos/Estamos'
import Carrusel from './Components/Carrusel/Carrusel'
import Navbar2 from './Components/Navbar2/Navbar2'
import Footer2 from './Components/Footer2/Footer2'

function App() {

  return (
    <div className="App">
      <Navbar2/>
      <Portada/>
      <Somos/>
      <Satisfaccion/>
      <Carrusel/>
      <Estamos/>
      <Servicios/>
      <Footer2/>
    </div>
  )
}

export default App
