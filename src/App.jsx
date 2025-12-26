import { Element } from "react-scroll";

import {Navbar, CheckOut, Footer} from "@Components"
import {Menu,Headers,Services,About,Testimonial} from "@Sections"

import { GlobalStateContext } from "./GlobalStateContext";
import { useContext, useEffect } from "react";

export default function App() {
  const { checkout } = useContext(GlobalStateContext);

  useEffect(() => {
    
  },[])
  
  return (
    <>
      {checkout ? (
        <div className={`relative`}>
          <CheckOut />
        </div>
      ) : (
        <div className={` flex flex-col gap-36`}>
          <Navbar />
          <Element name="home">
            <Headers />
          </Element>
          <Element name="service">
            <Services />
          </Element>
          <Element name="menu">
            <Menu />
          </Element>
          <Element name="testimonial">
            <Testimonial />
          </Element>
          <Element name="about">
            <About />
          </Element>
          <Footer />
        </div>
      )}
    </>
  );
};
