// libs
import { Element } from "react-scroll";

// components
import Navbar from "./components/Navbar";
import CheckOut from "./components/CheckOut";

// template
import Headers from "./tamplats/Headers";
import Services from "./tamplats/Services";
import Menu from "./tamplats/Menu";
import { GlobalStateContext } from "./GlobalStateContext";
import { useContext, useEffect } from "react";
import Testimonial from "./tamplats/Testimonial";
import About from "./tamplats/About";
import Footer from "./components/Footer";

const App = () => {
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
          <Element name="">
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

export default App;
