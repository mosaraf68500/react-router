import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/Home/Home.jsx'
import Root from './components/Root/Root.jsx'
import Mobiles from './components/Mobiles/Mobiles.jsx'
import Loptop from './components/Loptop/Loptop.jsx'

const router=createBrowserRouter([
  {
    path:'/',
    Component:Root,
    children:[
      {
        index: true, Component:Home,
      },
      {
        path:'laptop', Component:Loptop,
      },
      {
        path:'mobiles', Component:Mobiles
      },

      {
        
      }
    ]
  },

  

])



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
