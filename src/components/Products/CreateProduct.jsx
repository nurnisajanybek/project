import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../store/products/productsAction";

const CreateProduct = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });
  const dispatch = useDispatch();

  const handleInput = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const createProduct = (event) => {
    event.preventDefault();
    dispatch(addProduct(product));
  };

  return (
    <>
      <form onSubmit={createProduct}>
        <input
          type="text"
          name="title"
          onChange={handleInput}
          value={product.title}
        />
        <input
          type="text"
          name="description"
          onChange={handleInput}
          value={product.description}
        />
        <input
          type="text"
          name="price"
          onChange={handleInput}
          value={product.price}
        />
        <input
          type="text"
          name="image"
          onChange={handleInput}
          value={product.image}
        />
        <button type="submit">add</button>
      </form>
    </>
  );
};

export default CreateProduct;
