import ReactDOM from 'react-dom/client'
import "./css/micss.css"
import { RouterProvider, createHashRouter} from 'react-router-dom'
import { Load } from './pages/load'
import { Suspense, lazy } from 'react'

const Inicio = lazy(() => import('./pages/inicio'))
const AgentesWeb = lazy(() => import('./pages/AgentesWeb'))
const MapasWeb = lazy(() => import('./pages/MapasWeb'))
const AgentesData = lazy(() => import('./pages/AgentesData'))
const Busqueda = lazy(() => import('./pages/resultados'))

const rutas = createHashRouter([
  {
    path:'/',
    element: <Suspense fallback={<Load Load text= ""/>}><Inicio/></Suspense>
  },
  {
    path:'/agents',
    element: <Suspense fallback={<Load Load text= ""/>}><AgentesWeb/></Suspense>
  },
  {
    path:'/Mapas',
    element: <Suspense fallback={<Load Load text= ""/>}><MapasWeb/></Suspense>
  },
  {
    path:'/agents/:id',
    element: <Suspense fallback={<Load Load text= ""/>}><AgentesData/></Suspense>
  },
  {
    path:'/Search/:busqueda',
    element: <Suspense fallback={<Load Load text= ""/>}><Busqueda/></Suspense>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
  <RouterProvider router={rutas}/>
  </>
)
