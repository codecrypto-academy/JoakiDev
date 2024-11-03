import { Header } from './Header'
import { Carrusel } from './Carrusel'
import { Precios } from './Precios'
import { Footer } from './Footer'

export function Home() {
    return <div className='container'>
        <Header></Header>
        <Carrusel></Carrusel>
        <Precios></Precios>
        <Footer></Footer>
    </div>
}