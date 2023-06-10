import { createBrowserRouter } from "react-router-dom";
import HomePage from "./pages/home";

// path is part after the domain.

// createBrowserRouter - provide objects -> every object respresents one route
createBrowserRouter([
  // add some properties to define the characteristics like the path -> route should be activated
  // second part of property -> which component should be loaded when path = active
  /* connect to home page 'page' created -> to establish connection, add another key property
  element property -> define the element (the jsx code) that should be loaded when the path next to it
  is active */
  { path: "/" },
  { element: <HomePage /> },
]);

function App() {
  return <div></div>;
}

export default App;
