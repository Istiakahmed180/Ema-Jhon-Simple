import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Main from "./Layout/Main";
import Home from "./Pages/Home/Home/Home";
import ManageInventory from "./Pages/Invertory/ManageInventory";
import Order from "./Pages/Order/Order";
import OrderReview from "./Pages/Order/OrderReview";
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
        element: <ManageInventory></ManageInventory>,
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
