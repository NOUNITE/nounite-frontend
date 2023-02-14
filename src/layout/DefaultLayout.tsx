import React from "react";
import { Fragment } from "react";
import Navbar from "../components/common/Navbar";

interface Props {
    children ?: any
}

const DefaultLayout = ({ children }: Props) => {
  return ( 
    <Fragment>
      <Navbar />

      <div>{children}</div>
      


    </Fragment>
  );
};
 
export default DefaultLayout;