import { createContext, useState } from "react";
import PropTypes from "prop-types";

const GlobalStateContext = createContext({
  activeNavar: false,
  checkout: false,
  totalCountOrder: 0,
  allMenuOrders: [],
  setTotalCountOrder: () => {},
  setActiveNavbar: () => {},
  setAllMenuOrders: () => {},
  setCheckout: () => {},
});

const GlobalStateProvider = ({ children }) => {
  const [totalCountOrder, setTotalCountOrder] = useState(0);
  const [activeNavar, setActiveNavbar] = useState(false);
  const [allMenuOrders, setAllMenuOrders] = useState([]);
  const [checkout, setCheckout] = useState(false);

  return (
    <GlobalStateContext.Provider
      value={{
        activeNavar,
        setActiveNavbar,
        setTotalCountOrder,
        setAllMenuOrders,
        allMenuOrders,
        totalCountOrder,
        setCheckout,
        checkout,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

GlobalStateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { GlobalStateProvider, GlobalStateContext };
