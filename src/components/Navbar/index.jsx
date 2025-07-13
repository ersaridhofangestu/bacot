import { BiShoppingBag } from "react-icons/bi";
import Button from "../Button";
import ListDekstop from "./ListDekstop";
import ListMonbile from "./ListMonbile";
import { useContext } from "react";
import Hamburger from "./Hamburger";
import "./navbar.css";
import { GlobalStateContext } from "../../GlobalStateContext";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  const { setCheckout, totalCountOrder, activeNavar, setActiveNavbar } =
    useContext(GlobalStateContext);

  const handleMenuToggle = (isActive) => setActiveNavbar(isActive);
  const handleCloseMenu = () => setActiveNavbar(false);

  return (
    <nav className="flex justify-between border-b-2 border-yellow py-10 bg-white px-[1rem] lg:px-[5rem] w-screen z-50 fixed left-0 h-10">
      <div className="flex items-center">
        <img className="w-16 md:-ml-3" src={Logo} alt="Logo" />
        <h1 className="text-4xl md:text-5xl font-bold text-yellow -ml-2">
          Bacot
        </h1>
      </div>

      <ListDekstop />

      <div className="flex items-center justify-between gap-2 lg:gap-5">
        <div className="relative">
          <BiShoppingBag className="size-9" />
          {totalCountOrder > 0 && (
            <p
              className="absolute left-3 top-3 bg-yellow text-xl font-semibold w-8 h-8 
              flex justify-center items-center rounded-full scale-75"
            >
              {totalCountOrder}
            </p>
          )}
        </div>

        <Button
          className={`hidden md:block ${totalCountOrder <= 0 && "disabled:cursor-none"}`}
          onClick={() => setCheckout(true)}
        >
          Buy
        </Button>

        <Hamburger func={handleMenuToggle} value={activeNavar} />

        <ListMonbile
          active={activeNavar}
          setActive={handleCloseMenu}
          func={() => setCheckout(true)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
