import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import PaymentScreen from "./Screens/PaymentScreen/PaymentScreen";
import PlaceOrderScreen from "./Screens/PlaceOrderScreen/PlaceOrderScreen";
import ProductScreen from "./Screens/ProductScreen/ProductScreen";
import ShippingScreen from "./Screens/ShippingScreen/ShippingScreen";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";

import CartScreen from "./Screens/CartScreen/CartScreen";
import CategoryScreen from "./Screens/CategoryScreen/CategoryScreen";
import LoginScreen from "./Screens/LoginScreen/LoginScreen";
import ProfileScreen from "./Screens/ProfileScreen/ProfileScreen";
import RegisterScreen from "./Screens/RegisterScreen/RegisterScreen";
import OrderScreen from "./Screens/OrderScreen/OrderScreen";
import UserListScreen from "./Screens/UserListScreen/UserListScreen";
import UserEditScreen from "./Screens/UserEditScreen/UserEditScreen";

import useAlan from "./useAlan";

const Layout = () => {
  useAlan();
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
      { path: "/order/:id", element: <OrderScreen /> },
      { path: "/shipping", element: <ShippingScreen /> },
      { path: "/payment", element: <PaymentScreen /> },
      { path: "/placeorder", element: <PlaceOrderScreen /> },
      { path: "/login", element: <LoginScreen /> },
      { path: "/register", element: <RegisterScreen /> },
      { path: "/profile", element: <ProfileScreen /> },
      { path: "/product/:id", element: <ProductScreen /> },
      { path: "/cart/:id?", element: <CartScreen /> },
      { path: "/admin/userlist", element: <UserListScreen /> },
      { path: "/admin/user/:id/edit", element: <UserEditScreen /> },
      { path: "/category/:category", element: <CategoryScreen /> },
      { path: "/", element: <HomeScreen /> },
    ],
  },
]);

function App() {
  // useEffect(() => {
  //   alanBtn({
  //     key: "85a3f6c2b2fd57b29cb2e9d3e338c88c2e956eca572e1d8b807a3e2338fdd0dc/stage",
  //     onCommand: (commandData) => {
  //       console.log(commandData)
  //       if (commandData.command === "showCategories") {
  //         //   console.log("showCategories");
  //       }
  //     },
  //   })
  // }, [])

  return <RouterProvider router={router} />;
}

export default App;
