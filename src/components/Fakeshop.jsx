import React, { useState, useEffect } from "react";
import axios from "axios";

const Fakeshop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => console.error(error));
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <p>{product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Fakeshop;
