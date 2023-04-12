import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";
import ShippingScreen from "./Screens/ShippingScreen/ShippingScreen";
import PaymentScreen from "./Screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen/PlaceOrderScreen";

import { useEffect } from "react";
import CartScreen from "./Screens/CartScreen/CartScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
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
      { path: "/shipping", element: <ShippingScreen /> },
      { path: "/payment", element: <PaymentScreen /> },
      { path: "/placeorder", element: <PlaceOrderScreen /> },
      { path: "/login", element: <LoginScreen /> },
      { path: "/register", element: <RegisterScreen /> },
      { path: "/profile", element: <ProfileScreen /> },
      { path: "/product/:id", element: <ProductScreen /> },
      { path: "/cart/:id?", element: <CartScreen /> },
      { path: "/", element: <HomeScreen /> },
    ],
  },
]);

function App() {
  useEffect(() => {
    alanBtn({
      key: "f7981a2e8615a0c2f3ceeb5e326f23db2e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand: (commandData) => {
        console.log(commandData);
        if (commandData.command === "showCategories") {
          //   console.log("showCategories");
        }
      },
    });
  }, []);
  return <RouterProvider router={router} />;
}

export default App;
