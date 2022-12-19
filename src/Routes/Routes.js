import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Auth/Login/Login";
import SignUp from "../Pages/Auth/Signup/Signup";
import ForgotPassword from "../Pages/Auth/Forgot-Password/ForgotPassword";
import ResetPassword from "../Pages/Auth/Reset-Password/ResetPassword";
import ProgressBar from "../Components/ProgressBar/ProgressBar";
import WelcomeLayout from "../Layout/WelcomeLayout";
import Welcome from "../Pages/Welcome/Welcome";
import Home from "../Pages/Home/Home/Home";
import SportChoice from "../Pages/SportChoice/SportChoice";
import FilterChoice from "../Pages/SportChoice/FilterChoice";
import Message from "../Pages/Message/Message";
import ProfileUser from "../Pages/Profile/ProfileUser";
import ProfileFilter from "../Pages/Profile/ProfileFilter";
import Users from "../Pages/Users/Users";
import Community from "../Pages/Community/Community";
import Feedback from "../Pages/Community/Feedback";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

import PageNotFound from "../Pages/404/PageNotFound";



const router = createBrowserRouter([
  {
    path: "/main",
    element: <PrivateRoute><Main></Main></PrivateRoute>,
    children: [
      {
        path: "/main",
        element: <Home></Home>,
      },
      {
        path: '/main/sportchoice/:id',
        element: <SportChoice></SportChoice>
      },
      {
        path: '/main/filterchoice',
        element: <FilterChoice></FilterChoice>
      },
      {
        path: '/main/message',
        element: <Message></Message>
      },
      {
        path: '/main/profileuser',
        element: <ProfileUser></ProfileUser>
      },
      {
        path: '/main/profilefilter',
        element: <ProfileFilter></ProfileFilter>
      },
      {
        path: '/main/users',
        element: <Users></Users>
      },
      {
        path: '/main/community',
        element: <Community></Community>
      },
      {
        path: '/main/feedback',
        element: <Feedback></Feedback>
      },
      {
        path: '/main/404',
        element: <PageNotFound></PageNotFound>
      }
    ],
  },

  {
    path: "/",
    element: <WelcomeLayout></WelcomeLayout>,
    children: [
      {
        path: "/",
        element: <Welcome></Welcome>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/sign-up",
        element: <SignUp></SignUp>,
      },
      {
        path: "/forgot-password",
        element: <ForgotPassword></ForgotPassword>,
      },
      {
        path: "/reset-password",
        element: <ResetPassword></ResetPassword>,
      },

    ],
  },

]);

export default router;
