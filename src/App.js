import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home";
import ProductsPage from "./pages/product";
import RootLayout from "./pages/Root";

// path is part after the domain.

// createBrowserRouter - provide objects -> every object within array respresents one route
// add some properties to define the characteristics like the path -> route should be activated
// second part of property -> which component should be loaded when path = active
/* connect to home page 'page' created -> to establish connection, add another key property
  element property -> define the element (the jsx code) that should be loaded when the path next to it
  is active */
const router = createBrowserRouter([
  /* extra route, with 'nothing' path, with element that loads the layout wrapper that should be
  wrapped around the other routes. To wrap other routes, need another special property */
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/products", element: <ProductsPage /> },
    ],
  },
]);

function App() {
  /* RouterProvider has a special prop I must set -> router prop. Passing router const to router prop. */
  return <RouterProvider router={router} />;
}

export default App;
