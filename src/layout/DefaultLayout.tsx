import React from "react";
import { Fragment } from "react";
import Advert from "../components/common/advert";
import Navbar from "../components/common/Navbar";

interface Props {
    children ?: any
}

const DefaultLayout = ({ children }: Props) => {
  return ( 
    <Fragment>
      <Navbar />

      <div>{children}</div>
      
      <Advert />

    </Fragment>
  );
};
 
export default DefaultLayout;