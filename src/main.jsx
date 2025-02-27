import React from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { GoogleOAuthProvider } from '@react-oauth/google';
import CreateTrip from './Pages/CreateTrip.jsx';
import Header from './components/Header/Header.jsx'
import ViewTrip from './Pages/ViewTrip.jsx';
import { Toaster } from 'sonner';
import App from './App.jsx'
import './index.css'
const Routers = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />
    },
    {
      path: "/create-trip",
      element: <CreateTrip />
    },
    {
      path: "/view-trip/:tripId",
      element: <ViewTrip />
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
