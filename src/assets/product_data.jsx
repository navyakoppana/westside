import { useEffect, useState } from "react";

function products() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:5000/api/products")  // Flask API URL
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {product.map((prod) => (
          <li key={prod._id}>
            <h2>{prod.name}</h2>
            <p>{prod.description}</p>
            <p>{prod.price}</p>
            {prod.image && prod.image.length > 0 && (
              <img src={prod.image[0]} alt={prod.name} width="100" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default products;
