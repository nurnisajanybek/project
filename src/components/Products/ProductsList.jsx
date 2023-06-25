import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/products/productsAction";
import { setPage, setSearch } from "../../store/products/productsSlice";
import ProductCard from "./ProductCard";
import "./Products.css";

const ProductsList = () => {
  const { products, search, totalPages, currentPage } = useSelector(
    (state) => state.products
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts({ search, currentPage }));
  }, [search, currentPage]);
  useEffect(() => {
    dispatch(setPage(1));
  }, [search]);
  return (
    <div>
      <h1>products list</h1>
      <input
        type="text"
        placeholder="search..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />
      <div className="products__list">
        {products.map((product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
      <div className="products__pagination">
        <ul>
          {Array.from({ length: totalPages }, (page, index) => (
            <li
              className={
                currentPage == index + 1 ? "products__pagination-active" : ""
              }
              key={index}
              onClick={() => dispatch(setPage(index + 1))}
            >
              {" "}
              {index + 1}{" "}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductsList;
