import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";

import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <HomeScreen /> },
      { path: "/product/:id", element: <ProductScreen /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    alanBtn({
      key: "f7981a2e8615a0c2f3ceeb5e326f23db2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        if (commandData.command === "showCategories") {
          //   console.log("showCategories");
        }
      },
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
