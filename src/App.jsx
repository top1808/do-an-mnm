import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./layout/Layout";
// import Product from "./pages/Product";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./pages/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  // {
  //   path: "/product/:id",
  //   element: <Product />,
  // },
]);

function App() {
  return (
    <Layout>
      <ToastContainer />
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
