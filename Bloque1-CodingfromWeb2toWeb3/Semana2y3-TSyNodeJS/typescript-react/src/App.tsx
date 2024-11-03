import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './componentes/Header'
import { VARIABLE } from './componentes/Constantes'

interface IPersona {
  nif:number,
  nombre:string
}

var personas:IPersona[] = [
  {nif:1, nombre:"Juan"},
  {nif:2, nombre:"Pedro"},
  {nif:3, nombre:"Juan"},
]

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header nombre = "Hello World" dir = "calle solea"></Header>
      <p>{VARIABLE}</p>
      {
        personas.map((item:IPersona) => <div>{item.nombre}</div>)
      }
    </>
  )
}

export default App
