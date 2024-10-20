import { Link } from "react-scroll";
import PropTypes from "prop-types";

const ListDekstop = ({
  className = "hidden md:flex items-center justify-around",
}) => {
  const lists = [
    { title: "home", to: "home" },
    { title: "menu", to: "menu" },
    { title: "service", to: "service" },
    { title: "about us", to: "about" },
  ];

  return (
    <ul
      className={` w-[23rem] lg:w-[35rem] text-black font-semibold text-md lg:text-lg capitalize ${className} `}
    >
      {lists.map((list, index) => (
        <li
          key={index}
          className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100"
        >
          <Link
            activeClass="text-yellow font-bold transition-all duration-500 ease-in-out delay-100 border-b"
            to={list.to}
            spy={true}
            offset={-100}
            smooth={true}
            duration={1500}
            className="Link"
          >
            {list.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

ListDekstop.propTypes = {
  className: PropTypes.string,
};

export default ListDekstop;
