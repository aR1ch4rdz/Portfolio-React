import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import HomeSection from './pages/Home'
import Sobre from './pages/Sobre'
import Skills from './pages/Skills'
import Projetos from './pages/Projetos'
import ErrorPage from './pages/ErrorPage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomeSection />
      },
      {
        path: "sobre",
        element: <Sobre />
      },
      {
        path: "skills",
        element: <Skills />
      },
      {
        path: "projetos",
        element: <Projetos />
      }
    ]
  }

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
