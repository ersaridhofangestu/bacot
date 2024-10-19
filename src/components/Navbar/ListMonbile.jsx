import PropTypes from "prop-types";
import Button from "../Button";
// icons
import {
  AiOutlineHome,
  AiOutlinePhone,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { Link } from "react-scroll";

const ListMonbile = ({ active }) => {
  const lists = [
    { icon: <AiOutlineHome size={26} />, title: "home", to: "home" },
    { icon: <MdOutlineRestaurantMenu size={26} />, title: "menu", to: "menu" },
    { icon: <BsTools size={26} />, title: "service", to: "service" },
    { icon: <AiOutlineInfoCircle size={26} />, title: "about us", to: "about" },
    { icon: <AiOutlinePhone size={26} />, title: "contacts", to: "contacts" },
  ];
  return (
    <div
      className={`md:hidden absolute w-full bottom-0 h-screen top-[5.1rem] right-0 left-0 p-0 ${active ? "translate-x-0" : "translate-x-[100%] duration-1000"} transition-transform ease-in-out`}
    >
      <div
        className={`absolute w-[100%] right-0 bottom-0 h-screen p-0 blur-0 ${active ? "translate-x-0 duration-500" : "translate-x-[100%] duration-1000"} transition-transform  ease-in-out bg-black/90`}
      />
      <div
        className={`absolute w-[90%] right-0 bottom-0 h-screen bg-yellow p-0 blur-0 ${active ? "translate-x-0 duration-700" : "translate-x-[100%] duration-700"} transition-transform  ease-in-out`}
      />
      <div
        className={`absolute w-[90%] right-0 bottom-0 h-screen bg-white p-0 blur-0 ${active ? "translate-x-0 duration-1000" : "translate-x-[100%] duration-500"} transition-transform  ease-in-out`}
      >
        <div className="flex flex-col items-center h-full w-full p-5 py-10 gap-5">
          <ul className="flex flex-col w-36 gap-5 font-semibold">
            {lists?.map((list, index) => (
              <Link
                key={index}
                activeClass="text-yellow font-bold transition-all duration-500 ease-in-out delay-100 border-b"
                to={list.to}
                spy={true}
                smooth={true}
                hashSpy={true}
                duration={1500}
                delay={300}
                isDynamic={true}
                ignoreCancelEvents={false}
                spyThrottle={500}
                className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100 Link flex items-center gap-5"
              >
                {list.icon} {list.title}
              </Link>
            ))}
          </ul>
          <div className="border-b-2 border-yellow w-full" />
          <p className="font-thin text-black text-center">
            Maniskan harimu! Yuk, pesan dessert favoritmu sekarang!
          </p>
          <Button>buy</Button>
        </div>
      </div>
    </div>
  );
};

ListMonbile.propTypes = {
  active: PropTypes.bool.isRequired,
};

export default ListMonbile;
