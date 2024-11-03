import axios from "axios"
import { useQuery } from "react-query"

async function getProductos(){
    return await axios.get('http://localhost:3344/productos/getAll')
}

export function Productos() {
    // "data" es renombrado como "productos"
    const { data:productos, isLoading, isError } = useQuery(['productos'], getProductos)

    if (isLoading){
        return <div>Cargando...</div>
    }

    return (
        <table className="table">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {productos.data.map(producto => (
                    <tr key={producto.product_id}>
                        <td>{producto.product_id}</td>
                        <td>{producto.product_name}</td>
                        <td className="text-end">{producto.unit_price}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}