import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import App from './App.jsx'
import CreateTrip from './Pages/CreateTrip.jsx';
import Header from './components/Header/Header.jsx'
import './index.css'
import { Toaster } from 'sonner';
import { GoogleOAuthProvider } from '@react-oauth/google';



const Routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/create-trip",
      element: <CreateTrip />
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OUTH_ID}>
      <Header />
      <Toaster />
      <RouterProvider router={Routers}>
      </RouterProvider>
    </GoogleOAuthProvider>
  </>



)
