// define where children routes should be rendered
import { Outlet } from "react-router-dom";

function RootLayout() {
  return (
    <>
      <h1>Layout</h1>
      <Outlet />
    </>
  );
}

export default RootLayout;
