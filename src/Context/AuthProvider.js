import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getProfile, login, register } from "../API/auth/auth";
import { useLocation } from "react-router-dom";
import { API_URL } from "../API/config"

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useLocation();
  const [skip = 0, setSkip] = useState(0);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = async (data) => {
    setLoading(true);
    // console.log("create user Data:", data)
    try {
      const user = await fetch(`${API_URL}/api/v1/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          firstName: data.fname,
          lastName: data.lname,
        }),
      });
      const res = await user.json();
      // console.log(res);
      setToken(res.token);
      localStorage.setItem("token", res.token);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return error;
    }
  };

  const signIn = async (email, password) => {
    setLoading(true);
    try {
      const user = await fetch(`${API_URL}/api/v1/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      const res = await user.json();
      setToken(res.token);
      localStorage.setItem("token", res.token);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      return error;
    }
  };

  const logOut = () => {
    setLoading(true);
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    setLoading(false);
  };

  const getCurrentUser = async (token) => {
    setLoading(true);
    try {
      const data = await fetch(`${API_URL}/api/v1/user/me`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
      const res = await data.json();
      if (res.success === false) {
        setLoading(false);
        return;
      }
      setUser(res.user);
      setLoading(false);
      // console.log("current user", res.user);
    } catch (error) {
      console.log(error);
      setLoading(false);

      return error;
    }
  };

  useEffect(() => {
    localStorage.getItem("token") && setToken(localStorage.getItem("token"));

    if (token) {
      getCurrentUser(token);
    }
  }, [router.pathname, token, localStorage.getItem("token")]);

  const authInfo = {
    user,
    createUser,
    signIn,
    logOut,
    loading,
    token,
    skip,
    setSkip,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
