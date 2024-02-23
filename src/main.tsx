import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { AuthProvider } from './contexts/Auth/AuthProvider.tsx';


import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom';

//paginas

import Home from './routes/Home.tsx';
import NewUser from './routes/NewUser.tsx';
import { Login } from './routes/Login.tsx';



const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/new',
        element: <NewUser />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
