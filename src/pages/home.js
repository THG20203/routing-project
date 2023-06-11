/* import Link from react router dom to construct links. Link component better than <a> tags, 
cause under the hood it renders anchor element, but listens for clicks on that element prevents 
the browser default of sending an https request if the link is clicked, and instead takes a look at 
the router definitions to update page accordingly, load appropriate content. */
import { Link, useNavigate } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function HomePage() {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate("/products");
  }
  return (
    <>
      <h1>My Home Page</h1>
      <p>
        Go to <Link to="/products">The list of products.</Link>
      </p>
      <p>
        <button onClick={navigateHandler}>Products</button>
      </p>
    </>
  );
}

export default HomePage;
