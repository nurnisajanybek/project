import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div className="product__card">
      <img src={product.image} />
      <div className="product__card-description">
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>{product.price}</p>
        <button onClick={() => navigate(`/products/${product.id}`)}>
          show
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
