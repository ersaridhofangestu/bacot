import { BiShoppingBag } from "react-icons/bi";
import Button from "./Button";

const Navbar = () => {
    return (
        <nav className="flex justify-between" >
            <div className="flex items-center">
                <img className="" src="/src/assets/logo.png" alt="" width={70} height={70} />
                <h1 className="text-5xl font-bold text-yellow">Bacot</h1>
            </div>
            <ul className="flex items-center justify-around w-[50rem] text-black font-semibold text-lg capitalize">
                <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                    <a href={"/"}>home</a>
                </li>
                <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                    <a href={"/"}>menu</a>
                </li>
                <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                    <a href={"/"}>service</a>
                </li>
                <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                    <a href={"/"}>about</a>
                </li>
                <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                    <a href={"/"}>contacts</a>
                </li>
            </ul>
            <div className="flex items-center justify-between gap-5 relative">
                <div className="relative">
                    <BiShoppingBag className="size-9" />
                    <p className="absolute left-3 top-3 bg-yellow text-xl font-semibold w-8 h-8 flex justify-center items-center rounded-full scale-75">1</p>
                </div>
                <Button>buy</Button>
            </div>
        </nav>
    )
}

export default Navbar
