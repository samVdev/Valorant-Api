import ReactDOM from 'react-dom/client'
import "./css/micss.css"
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Load } from './pages/load'
import { Suspense, lazy } from 'react'

const Inicio = lazy(() => import('./pages/inicio'))
const AgentesWeb = lazy(() => import('./pages/AgentesWeb'))
const MapasWeb = lazy(() => import('./pages/MapasWeb'))
const AgentesData = lazy(() => import('./pages/AgentesData'))
const Busqueda = lazy(() => import('./pages/resultados'))


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Suspense fallback={<Load Load text= ""/>}><Inicio/></Suspense>}></Route>
      <Route path='/agents' element={<Suspense fallback={<Load Load text= ""/>}><AgentesWeb/></Suspense>}></Route>
      <Route path='/Mapas' element={<Suspense fallback={<Load Load text= ""/>}><MapasWeb/></Suspense>}></Route>
      <Route path='/agents/:id' element={<Suspense fallback={<Load Load text= ""/>}><AgentesData/></Suspense>}></Route>
      <Route path='/Search/:busqueda' element={<Suspense fallback={<Load Load text= ""/>}><Busqueda/></Suspense>}></Route>
    </Routes>
    </BrowserRouter>
  </>
)
