import { Link } from "react-router-dom"

export function Header() {
    return <div>
        <ul>
            <li><Link to="/home/productos">Productos</Link></li>
            <li><Link to="/home/clientes">Clientes</Link></li>
            <li><Link to="/home/lista">Lista</Link></li>
            <li><Link to="/home/tx">TX</Link></li>
        </ul>
    </div>
}