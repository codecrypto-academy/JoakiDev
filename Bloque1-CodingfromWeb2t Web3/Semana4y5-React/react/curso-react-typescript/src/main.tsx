import { memo, useCallback, useState } from "react";
import ReactDOM from "react-dom/client";

interface IRegistro {
  id: string
  nombre: string
}

interface IItemProps {
  item: IRegistro
  borrarRegistro: (id:string) => void
}
                                   // Memoriza el estado del componente y solo renderiza si hay cambios
const Item: React.FC<IItemProps> = memo(({item, borrarRegistro}) => {
  return <li>{item.id} {item.nombre} <button onClick={() => borrarRegistro(item.id)}>Borrar</button></li>
})

interface IListaProps {
  registros: IRegistro[]
  borrarRegistro: (id:string) => void
}

const Lista: React.FC<IListaProps> = memo(({registros, borrarRegistro}) => {
  return <div>
    {
      registros.map((item:IRegistro, index:number) => 
        <Item key={index} borrarRegistro={borrarRegistro} item={item}></Item>
      )
    }
  </div>
})

const valoresIniciales: IRegistro[] = [
  {
    id: "1",
    nombre: "producto1"
  },
  {
    id: "2",
    nombre: "producto2"
  }
]

const App = () => {
  const [texto, setTexto] = useState("")
  const [productos, setProductos] = useState<IRegistro[]>(valoresIniciales)

  const añadirRegistro = () => {
    const nuevo:IRegistro = {
      id: new Date().getTime().toString(),
      nombre: texto
    }
    setProductos([...productos, nuevo])
  }

  // Callback para impedir que renderice innecesariamente
  const borrarRegistro = useCallback((id:string) => {
    setProductos(productos.filter(item => item.id != id))
  },[productos])

  return <div>
    <input type="text" value={texto} onChange={(e) => setTexto(e.target.value)}></input>
    <button onClick={() => añadirRegistro()}>Añadir</button>
    <Lista registros={productos} borrarRegistro={borrarRegistro}/>
  </div>
}

const root = document.getElementById("root") as HTMLElement;
ReactDOM.createRoot(root).render(
  <App/>
)