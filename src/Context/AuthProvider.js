import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import { getProfile, login, register } from "../API/auth/auth";
import { useLocation, useNavigate } from "react-router-dom";
import { API_URL } from "../API/config";
import gravatarUrl from "gravatar-url";
import { useAlert } from "react-alert";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const router = useNavigate();
  const location = useLocation();
  const [skip = 0, setSkip] = useState(0);
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(false);
  const alert = useAlert();

  useEffect(() => {
    if (user && !user?.profilePicture) {
      setUser({
        ...user,
        profilePicture: gravatarUrl(user.email, {
          size: 200,
          default: "retro",
        }),
      });
    }
  }, [user, user?.profilePicture]);

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
      console.log(res);
      setToken(res.token);
      localStorage.setItem("token", token);
      await getCurrentUser(res.token);

      if (user) {
        router("/main", { replace: true });
      }
      setLoading(false);

      if (res.error) {
        alert.error(res.error.message);
        setLoading(false);
        return res.error;
      }
    } catch (error) {
      console.log(error);
      alert.error("Something went wrong");
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
      console.log(res);
      setToken(res.token);
      localStorage.setItem("token", res.token);
      await getCurrentUser(res.token);

      if (user) {
        router("/main", { replace: true });
      }

      setLoading(false);
    } catch (error) {
      alert.error(error.message);

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
    router("/login", { replace: true });
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

      alert.error("Sesson Expired");

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
