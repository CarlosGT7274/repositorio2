import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'

import Proyectos from './pages/proyectos.jsx'

import Ecommerce from './views/ecommerce.jsx'
import RhSistem from './views/rhsistem.jsx'

import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,  
  },
  {
    path: "/Proyectos",
    element: <Proyectos />,  
  },
  {
    path: "/Proyectos/ecommerce",
    element: <Ecommerce />  
  },
  {
    path: "/Proyectos/rh",
    element: <RhSistem />  
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
