import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ADMINS } from "../../helpers/consts";
import {
  deleteOneProduct,
  editOneProduct,
  getOneProduct,
} from "../../store/products/productsAction";

const ProductDetails = () => {
  const { oneProduct } = useSelector((state) => state.products);

  const { user } = useSelector((state) => state.auth);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [editProduct, setEditProduct] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
  });

  const [showInps, setShowInps] = useState(false);
  const inpEl = useRef(null);
  useEffect(() => {
    dispatch(getOneProduct(id));
  }, []);
  useEffect(() => {
    if (oneProduct) {
      setEditProduct(oneProduct);
    }
  }, [oneProduct]);

  const handleInput = (event) => {
    setEditProduct({
      ...editProduct,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(editOneProduct(editProduct));
  };

  const handleEdit = () => {
    setShowInps(!showInps);
    inpEl?.current?.scrollIntoView({ behavior: "smooth" });
  };
  const handleDelete = () => {
    dispatch(deleteOneProduct(id));
    navigate("/products");
  };

  return (
    <div>
      <img src={oneProduct?.image} alt="" />
      <h1>{oneProduct?.title}</h1>
      <h5>{oneProduct?.description}</h5>
      <h5>{oneProduct?.price}</h5>
      {ADMINS.includes(user) ? (
        <>
          <button onClick={handleEdit}>edit</button>
          <button onClick={handleDelete}>delete</button>
        </>
      ) : (
        <></>
      )}

      {showInps ? (
        <form
          className="editForm"
          ref={inpEl}
          onSubmit={(event) => {
            handleSubmit(event);
          }}
        >
          <input
            type="text"
            name="title"
            value={editProduct.title}
            onChange={handleInput}
          />
          <input
            type="text"
            name="description"
            value={editProduct.description}
            onChange={handleInput}
          />
          <input
            type="text"
            name="price"
            value={editProduct.price}
            onChange={handleInput}
          />
          <input
            type="text"
            name="image"
            value={editProduct.image}
            onChange={handleInput}
          />
          <button type="submit">save</button>
        </form>
      ) : (
        <></>
      )}
    </div>
  );
};

export default ProductDetails;
