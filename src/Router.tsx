import {createBrowserRouter} from "react-router-dom";
import * as Routes from "@/routes";
import Layout from "./components/layout";
const {CreateAccount, Home, Login, Profile} = Routes;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "home",
        element: <Home/>
      },
      {
        path: "profile",
        element: <Profile/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/create-account",
    element: <CreateAccount/>
  }

]);

export default router;