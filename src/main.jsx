
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router'
import { GoogleOAuthProvider } from '@react-oauth/google';
import CreateTrip from './Pages/CreateTrip.jsx';
import ViewTrip from './Pages/ViewTrip.jsx';
import { Toaster } from 'sonner';
import App from './App.jsx'
import './index.css'
import MyTrips from './Pages/MyTrips.jsx';
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
    },
    {
      path: "/my-trips",
      element: <MyTrips />
    }
  ]
)
createRoot(document.getElementById('root')).render(
  <>
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_OUTH_ID_KEY}>
      <Toaster />
      <RouterProvider router={Routers}>
      </RouterProvider>
      
    </GoogleOAuthProvider>
  </>



)
