import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { ADMINS } from "../helpers/consts";
import { PRIVATE_ROUTES, PUBLIC_ROUTES } from "../helpers/routes";
import MainLayout from "../pages/MainLayout";
import { authListener } from "../store/auth/authActions";

const AppRoutes = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authListener());
  }, []);
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {PUBLIC_ROUTES.map(({ id, path, element }) => (
          <Route key={id} path={path} element={element} />
        ))}

        {ADMINS.includes(user) ? (
          PRIVATE_ROUTES.map(({ id, path, element }) => (
            <Route key={id} path={path} element={element} />
          ))
        ) : (
          <></>
        )}
      </Route>
    </Routes>
  );
};

export default AppRoutes;
