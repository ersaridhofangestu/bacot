import { BiShoppingBag } from "react-icons/bi";
import { Button, Hamburger, OpstionDekstop,OpstionMobile } from "@Components";
import { useContext } from "react";
import "./navbar.css";

import { GlobalStateContext } from "../../GlobalStateContext";
import {logo} from "@Assets"
import {AiOutlineHome, AiOutlineInfoCircle} from "react-icons/ai";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import {BsTools} from "react-icons/bs";

const options = [
    { icon: <AiOutlineHome size={26} />, title: "home", to: "home" },
    { icon: <MdOutlineRestaurantMenu size={26} />, title: "menu", to: "menu" },
    { icon: <BsTools size={26} />, title: "service", to: "service" },
    { icon: <AiOutlineInfoCircle size={26} />, title: "about us", to: "about" },
];

export default function Navbar() {
  const { setCheckout, totalCountOrder, activeNavar, setActiveNavbar } =
    useContext(GlobalStateContext);

  const handleMenuToggle = (isActive) => setActiveNavbar(isActive);
  const handleCloseMenu = () => setActiveNavbar(false);

  return (
    <nav className="flex justify-between border-b-2 border-yellow py-10 bg-white px-[1rem] lg:px-[5rem] w-screen z-50 fixed left-0 h-10">
      <div className="flex items-center">
        <img className="w-16 md:-ml-3" src={logo || ""} alt="Logo" />
        <h1 className="text-4xl md:text-5xl font-bold text-yellow -ml-2">
          Bacot
        </h1>
      </div>

      <OpstionDekstop opstion={options} />

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

        <OpstionMobile
            opstion={options}
            active={activeNavar}
            setActive={handleCloseMenu}
            func={() => setCheckout(true)}
        />
      </div>
    </nav>
  );
};
