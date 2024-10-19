// libs
import { Element } from "react-scroll";

// components
import Navbar from "./components/Navbar";
import CheckOut from "./components/CheckOut";

// template
import Headers from "./tamplats/Headers";
import Services from "./tamplats/Services";
import Menu from "./tamplats/Menu";
import { GlobalStateContext, GlobalStateProvider } from "./GlobalStateContext";
import { useContext, useEffect } from "react";

const App = () => {
  const { checkout } = useContext(GlobalStateContext);
  useEffect(() => {}, [checkout]);
  return (
    <GlobalStateProvider>
      {checkout == false ? (
        <div className="flex flex-col gap-36">
          <Navbar />
          <Element name="home">
            <Headers />
          </Element>
          <Element name="service">
            <Services />
          </Element>
          <Menu />
        </div>
      ) : (
        <div className="absolute">
          <CheckOut />
        </div>
      )}
    </GlobalStateProvider>
  );
};

export default App;
