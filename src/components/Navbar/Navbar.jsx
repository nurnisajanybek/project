import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { ADMINS } from "../../helpers/consts";
import { authListener, handleLogout } from "../../store/auth/authActions";
import "./Navbar.css";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(user);
  return (
    <div>
      <div className="navbar">
        <ul className="navbar__list">
          <li onClick={() => navigate("/")}>Home</li>
          <li onClick={() => navigate("/about")}>About Us</li>
          <li onClick={() => navigate("/products")}>Products</li>

          {ADMINS.includes(user) ? (
            <li onClick={() => navigate("/admin")}>Admin</li>
          ) : (
            <></>
          )}
          {user ? (
            <li>{user}</li>
          ) : (
            <li onClick={() => navigate("/auth")}>Sign in</li>
          )}
          {user ? (
            <li onClick={() => dispatch(handleLogout())}>sign out</li>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
