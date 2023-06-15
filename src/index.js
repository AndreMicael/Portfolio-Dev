import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rotas from './Pages/Rotas';
import Contacts from './Pages/Contact';
import Projetos from './Pages/Projetos';
import { ThemeProvider } from './Context/ThemeContext';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Rotas/>,
      children: [

        { path: "/" , element: <App/> },
        { path: "/contacts", element: <Contacts/>},
        { path: "/projetos", element: <Projetos/> },
       
      ],
    },
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router}/>    
    </ThemeProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

