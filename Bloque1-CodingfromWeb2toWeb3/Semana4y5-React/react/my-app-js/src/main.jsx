import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Home } from './componentes/Home.jsx'
import { Lista } from './componentes/Lista.jsx'
import { Tx } from './componentes/Tx.jsx'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/home" element={<Home/>}>
            <Route index element={<h2>Home principal</h2>} />
            <Route path="productos" element={<p>Productos</p>} />
            <Route path="clientes" element={<p>Clientes</p>} />
            <Route path="lista" element={<Lista/>} />
            <Route path="tx" element={<Tx/>} />
            <Route path="*" element={<h2>Ruta no válida</h2>} />
          </Route>
          <Route path="/adios" element={<p>Adios</p>} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </React.StrictMode>
)
