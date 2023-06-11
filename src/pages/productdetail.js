/* Now here want to know which product id was used so we could reach out to a backend API/ database
  to fetch the data for that specific product, display it on the screen. */
/* so use another tool in react */
import { useParams } from "react-router-dom";

function ProductDetailPage() {
  const params = useParams();
  /* params object is a simple javascript object -> contains every dynamic path segment we defined in
  our route definition as a property. */

  return (
    <>
      <h1>Product Details</h1>
      <p>{params.productId}</p>
    </>
  );
}

export default ProductDetailPage;
