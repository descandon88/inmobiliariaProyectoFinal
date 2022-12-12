import React from 'react';
import ReactDOM from 'react-dom/client';

// ============ IMPORT ROUTE ===============
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// ============ IMPORT COMPONENTS ===============
import BuscadorPage from './Components/BuscadorPage/BuscadorPage';
import RegistrarInmueble from "./Components/ComponentsInmu/RegistrarInmueble";
import GestionPublicaciones from './Pages/GestionPublicaciones/GestionPublicaciones';
import GestionUsuarios from './Pages/GestionUsuarios/GestionUsuarios';
import HomeAdmin from './Pages/HomeAdmin/HomeAdmin.jsx';
import PageLogin from './Pages/PageLogin/PageLogin';
import DetalleCard from './Components/DetalleCard/DetalleCard';
import Empresa from './Components/Empresa/Empresa';
import Estudio from './Components/Estudio/Estudio';
import App from './Routes/App/App';




// ============ STYLE ===============

import { ChakraProvider } from '@chakra-ui/react';
import './index.css';





const router = createBrowserRouter([

{
  path: "/",
  element: <App />,
},

{
  path: "pageLogin",
  element: <PageLogin />,
},

{
  path: "homeAdmin",
  element: <HomeAdmin />,
},

{
  path: "gestionUsuarios",
  element: <GestionUsuarios />,
},

{
  path: "gestionPublicaciones",
  element: <GestionPublicaciones />,
},
{
  path: "buscador",
  element: <BuscadorPage/>
},
{
  path: "empresa",
  element: <Empresa/>
},
{
  path: "estudio",
  element: <Estudio/>
},

{
  path: "buscadorPage",
  element: <BuscadorPage/>,
},
{
  path: "buscadorPage/detalleInmueble/:id_inmueble",
  element: <DetalleCard />,
},
{
  path: "registrarInmueble",
  element: <RegistrarInmueble />,
},



]);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <ChakraProvider>
      <RouterProvider router={router} />
      </ChakraProvider>
    </React.StrictMode>
);