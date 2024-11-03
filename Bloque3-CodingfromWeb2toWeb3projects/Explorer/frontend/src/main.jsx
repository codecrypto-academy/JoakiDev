import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import { Home } from './Home'
import { Balance } from './Balance'
import { Tx } from './Tx'
import { Bloque } from './Bloque'
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="balance/:address" element={<Balance />}></Route>
          <Route path="tx/:tx" element={<Tx />}></Route>
          <Route path="bloque/:bloque" element={<Bloque />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
