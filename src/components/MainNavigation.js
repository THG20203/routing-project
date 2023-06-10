import { Link } from "react-router-dom";

function MainNavigation() {
  return (
    <header>
      <mav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
        </ul>
      </mav>
    </header>
  );
}

export default MainNavigation;
