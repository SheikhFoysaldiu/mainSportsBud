import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/Signup/Signup";
import WelcomeLayout from "../Layout/Welcome";
import Welcome from "../Pages/Welcome/Welcome";
import Home from "../Pages/Home/Home";
import ForgotPassword from "../Pages/Auth/Forgot-Password/ForgotPassword";
import ResetPassword from "../Pages/Auth/Reset-Password/ResetPassword";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "/welcome",
    element: <WelcomeLayout></WelcomeLayout>,
    children: [
      {
        path: "/welcome",
        element: <Welcome></Welcome>,
      },
    ],
  },
  {
    path: "/auth",
    element: <WelcomeLayout></WelcomeLayout>,
    children: [
      {
        path: "/auth",
        element: <Welcome></Welcome>,
      },
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/auth/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/auth/reset-password",
        element: <ResetPassword></ResetPassword>,
      },
    ],
  },
]);

export default router;
