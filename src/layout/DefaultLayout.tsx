import React from "react";
import { Fragment } from "react";
import Advert from "../components/common/advert";
import Links from "../components/common/Links";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import NewsLetter from "../components/newsletter/newLetter";

interface Props {
    children ?: any
}

const DefaultLayout = ({ children }: Props) => {
  return ( 
    <Fragment>
      <Navbar />

      <div>{children}</div>
      
      <Advert />

      <NewsLetter />
      <Links />
      <Footer />

    </Fragment>
  );
};
 
export default DefaultLayout;