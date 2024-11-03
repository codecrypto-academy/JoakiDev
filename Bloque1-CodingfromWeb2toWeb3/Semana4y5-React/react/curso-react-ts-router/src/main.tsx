import ReactDOM from 'react-dom/client'
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom'

const Layout = () => {
  return <div>
    <p><Link to="contact">Contacto</Link></p>
    <p><Link to="quienessomos">Quienes somos</Link></p>
    <p><Link to="servicios">Servicios</Link></p>
    <div>
      <Outlet/>
    </div>
  </div>
}

const Servicios = () => {
  return <div>
    <p>Servicios de la empresa</p>
    <p><Link to="ser1">Servicio 1</Link></p>
    <p><Link to="ser2">Servicio 2</Link></p>
    <p><Link to="ser3">Servicio 3</Link></p>
    <div>
      <Outlet/>
    </div>
  </div>
}

const App = () => {
  return <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>
        <Route path="contact" element="contacto"></Route>
        <Route path="quienessomos" element="Somos una empresa..."></Route>
        <Route path="servicios" element={<Servicios/>}>
          <Route index element="Servicio1 por defecto"></Route>
          <Route path="ser1" element="Este es el servicio 1"></Route>
          <Route path="ser2" element="Este es el servicio 2"></Route>
          <Route path="ser3" element="Este es el servicio 3"></Route>
        </Route>
        <Route path='*' element="404"></Route>
      </Route>
    </Routes>
  </BrowserRouter>
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App/>
)
