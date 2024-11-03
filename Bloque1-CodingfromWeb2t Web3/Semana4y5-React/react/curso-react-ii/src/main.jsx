import React, { createContext, useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CompA from './componentes/CompA'

// Se llama "props" por convención, pero no es necesario que se llame así
const Compo2 = (props) => {
  return <p>{props.b}</p>
}

const Compo = (p) => {
  return <p>{p.a}-{p.b} <Compo2 b={p.b+10}/></p>
}

const lista = ["Valencia", "Alicante", "Madrid", "Castellon"]

const sesion = {
  usuario: "Joaquin"
}

const Likes = (props) => {
  //El valor dentro de useState es el valor inicial, en este caso 0
  const [likes, setLikes] = useState(0);
  const increment = () => {
    setLikes(likes+1);
    console.log(likes)
  }

  return <button onClick={() => increment()}>Likes {likes}</button>
}

const Post = ({numero}) => {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${numero}`)
    .then(response => response.json())
    .then(data => setData(data))
  }, [])

  if(!data) {
    return <div>
      Cargando el post {numero}
      <hr></hr>
    </div>
  }

  return <div>
    post {numero}
      {JSON.stringify(data)}
    <hr></hr>
  </div>
}

const App = () => {
  return <div>
    <Post numero={1} />
    <Post numero={2} />
    <Post numero={3} />
    <Post numero={4} />
  </div>
}

// Por convenio, todos los nombres de hooks comienzan por "use"
const useContador = (valorInicial) => {
  const [c, setC] = useState(valorInicial)
  const incrementar = () => setC(c + 1)
  const decrementar = () => setC(c - 1)
  const reset = () => setC(0)

  return {
    contador : c, incrementar, decrementar, reset
  }
}

const AppHook = () => {
  const {contador, incrementar, decrementar, reset} = useContador(60)
  return <div>
    {contador}
    <button onClick={() => incrementar()}>Incrementar</button>
    <button onClick={() => decrementar()}>Decrementar</button>
    <button onClick={() => reset()}>Reset</button>
  </div>
}

const GlobalContext = createContext()

const AppGlobal = ({children}) => {
  const [estado, setEstado] = useState({
    usuario: "usu1"
  })
  return <GlobalContext.Provider value={[estado, setEstado]}>
    {children}
  </GlobalContext.Provider>
}

const Hijo = () => {
  const [context, setContext] = useContext(GlobalContext)
  return <div>
    Usuario: {context.usuario}
    <Nieto />
  </div>
}

const Nieto = () => {
  const [context, setContext] = useContext(GlobalContext)
  const cambiar = () => {
    setContext({...context, usuario: "FELIPE"})
  }
  return <div>
    Soy el nieto: {context.usuario}
    <button onClick={() => {cambiar()}}>Cambiar usuario</button>
  </div>
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <h1><Compo a="1" b={3+5+6} /></h1>
      Hello <CompA b={2}/>

      <ul>
        { lista.map((prov, cont) => <li key={cont}>{prov}</li>) }
      </ul>

      <p>{ sesion ? <p>Usuario: {sesion.usuario}</p> : "Sin login" }</p>

      <Likes/>

      <App/>

      <AppHook/>

      <AppGlobal>
        <h1>Hola</h1>
        <h2>Hola otra vez</h2>
        <Hijo />
      </AppGlobal>
    </div>
  </React.StrictMode>,
)
