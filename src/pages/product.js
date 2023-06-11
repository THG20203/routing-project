import { Link } from "react-router-dom";

/* in reality, might fetch product data from some back end from some database. 
Therefore, might have your products as an array. */
const PRODUCTS = [
  // data you're getting might be an array full of javascript objects
  { id: "p1", title: "Product 1" },
  { id: "p2", title: "Product 2" },
  { id: "p3", title: "Product 3" },
];

function ProductsPage() {
  return (
    <>
      <h1>The products page</h1>
      <ul>
        {PRODUCTS.map((prod) => (
          <li key={prod.id}>
            {/* within link to, have a dynamic value, where we construct a string dynamically, by using
            backticks, so that we build such a javascript template literal, which makes it easier to 
            inject dynamic values into this string. */}
            <Link to={`/products/${prod.id}`}>{prod.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ProductsPage;
