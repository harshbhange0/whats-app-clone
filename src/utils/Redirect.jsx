import React from "react";
import Loader from "../components/Loader";
import { Outlet } from "react-router-dom";

function Redirect({ isLoading }) {
  console.log(isLoading);
  return isLoading ? <Loader /> : <Outlet />;
}

export default Redirect;
