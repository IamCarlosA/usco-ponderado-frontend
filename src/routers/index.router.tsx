/* eslint-disable arrow-body-style */
import React from "react";
import {
  createBrowserRouter
} from "react-router-dom";
import { Layout } from "../components/layouts/Layout";
import { Ponderado } from "../views/ponderado/Ponderado.view";
import { Result } from "../views/resultados/Result.view";


export const RouterConfig = createBrowserRouter([
  { 
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Ponderado />,
      },
      {
        path: "/resultado",
        element: <Result />,
      },
    ],
  }
]);
