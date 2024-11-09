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
import Neovim from './views/neovim.jsx'
import Dotfiles from './views/dotfiles.jsx';

import './index.css'
import Layout from './components/layout/layout.jsx';
import Stocksystem from './views/stocksystem.jsx';

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
  },
  {
    path: "/Proyectos/Neovim",
    element: <Neovim />
  },
  {
    path: "/Proyectos/dotfiles",
    element: <Dotfiles />
  },
  {
    path: "/Proyectos/stock",
    element: <Stocksystem />
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
        <RouterProvider router={router} />
  </StrictMode>,
)
