import React from 'react'
import ReactDOM from 'react-dom/client'
import { Auth0Provider } from '@auth0/auth0-react';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home/>
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <Auth0Provider
      domain="dev-z0dczr6dqbv5doq4.us.auth0.com"
      clientId="g7dAmf6ehD3DaFv87EaMQNJEAZAGhtZ0"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router}/>
    </Auth0Provider>
  </React.StrictMode>

)
