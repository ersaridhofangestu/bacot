import { BiShoppingBag } from "react-icons/bi";
import Button from "../Button";
import ListDekstop from "./ListDekstop";
import ListMonbile from "./ListMonbile";
import { useContext } from "react";
import Hamburger from "./Hamburger";
import "./navbar.css";
import { GlobalStateContext } from "../../GlobalStateContext";

const Navbar = () => {
  const {
    setCheckout,
    checkout,
    totalCountOrder,
    activeNavar,
    setActiveNavbar,
  } = useContext(GlobalStateContext);
  console.log(checkout);
  return (
    <nav className="flex justify-between border-b-2  border-yellow py-10 bg-white px-[1rem] w-screen z-50 fixed left-0 h-10">
      <div className="flex items-center">
        <img className="w-16 md:-ml-3" src="/src/assets/logo.png" alt="" />
        <h1 className="text-4xl md:text-5xl font-bold text-yellow -ml-2">
          Bacot
        </h1>
      </div>
      <ListDekstop />
      <div className="flex items-center justify-between gap-2 md:gap-5">
        <div className="relative">
          <BiShoppingBag className="size-9" />
          {totalCountOrder > 0 && (
            <p
              className={
                "absolute left-3 top-3 bg-yellow text-xl font-semibold w-8 h-8 flex justify-center items-center rounded-full scale-75"
              }
            >
              {totalCountOrder}
            </p>
          )}
        </div>
        <Button
          className={`hidden md:block ${totalCountOrder < 0 && "disabled:cursor-none"}`}
          onClick={() => setCheckout(true)}
        >
          buy
        </Button>
        <Hamburger onChange={() => setActiveNavbar(!activeNavar)} />
        <ListMonbile active={activeNavar} />
      </div>
    </nav>
  );
};

export default Navbar;
