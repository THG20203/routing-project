/* NavLink -> one special behavior. If add the className prop to it, its actually not 
the regular */
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <mav>
        <ul className={classes.list}>
          <li>
            <NavLink
              to="/"
              /* className -> takes a function, that function should return a className that should be 
                added to the anchor tag. That function also automatically recieves an object from which we 
                can destructure the isActive property. */
              /* boolean -> if true -> led to the currently active route. So, can use isActive to 
              conditionally return css classes. */
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
              /* end prop indicates this link "/" should only be considered active if the currently active
              route ends with this path after the url */
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              Products
            </NavLink>
          </li>
        </ul>
      </mav>
    </header>
  );
}

export default MainNavigation;
