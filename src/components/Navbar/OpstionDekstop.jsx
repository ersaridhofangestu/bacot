import { Link } from "react-scroll";

export default  function  OpstionDekstop ({
  className = "hidden md:flex items-center justify-around", opstion
}) {

  return (
    <ul
      className={` w-[23rem] lg:w-[35rem] text-black font-semibold text-md lg:text-lg capitalize ${className} `}
    >
      {opstion?.map((list, index) => (
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
