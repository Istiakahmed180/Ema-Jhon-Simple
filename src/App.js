import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import ManageInventory from "./Pages/Invertory/ManageInventory";
import Login from "./Pages/Login/Login";
import Order from "./Pages/Order/Order";
import OrderReview from "./Pages/Order/OrderReview";
import Shipping from "./Pages/Shipping/Shipping";
import SginUp from "./Pages/SignUp/SginUp";
import PrivateRoute from "./Routes/PrivateRoute";
import { productsAndCartLoder } from "./utilities/ProductsAndCartLoader";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/order",
        element: <Order></Order>,
        loader: productsAndCartLoder,
      },
      {
        path: "/order-review",
        element: <OrderReview></OrderReview>,
        loader: productsAndCartLoder,
      },
      {
        path: "/manage-inventory",
        element: (
          <PrivateRoute>
            <ManageInventory></ManageInventory>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SginUp></SginUp>,
      },
      {
        path: "/shipping",
        element: (
          <PrivateRoute>
            <Shipping></Shipping>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
