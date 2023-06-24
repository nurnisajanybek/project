import { createAsyncThunk } from "@reduxjs/toolkit";
import app from "../../fire";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  clearErrors,
  clearInputs,
  setEmail,
  setEmailError,
  setLoginFlag,
  setPassword,
  setPasswordError,
  setUser,
} from "./authSlice";

const auth = getAuth(app);

export const handleSingup = createAsyncThunk(
  "@auth/handleSingup",
  async (obj, { dispatch }) => {
    console.log(obj);
    dispatch(clearErrors());
    await createUserWithEmailAndPassword(auth, obj.email, obj.password)
      .then(() => {
        dispatch(setLoginFlag(true));
      })
      .catch((err) => {
        console.log(err);
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            dispatch(setEmailError(err.message));
            break;
          case "auth/weak-password":
            dispatch(setPasswordError(err.message));
            break;
        }
      });
  }
);

export const handleLogin = createAsyncThunk(
  "@auth/handleLogin",
  async (obj, { dispatch }) => {
    dispatch(clearErrors());
    await signInWithEmailAndPassword(auth, obj.email, obj.password)
      .then(() => {
        obj.navigate("/");
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/user-disavled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            dispatch(setEmailError(err.message));
            break;
          case "auth/wrong-password":
            dispatch(setPasswordError(err.message));
            break;
        }
      });
  }
);

export const authListener = createAsyncThunk(
  "@auth/authListener",
  async (_, { dispatch }) => {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(clearInputs());
        dispatch(setUser(user?.email));
      } else {
        dispatch(setUser(""));
      }
    });
  }
);

export const handleLogout = createAsyncThunk(
  "@auth/handleLogout",
  async (navigate) => {
    await signOut(auth);
    navigate("/login");
  }
);
