const ListDekstop = () => {
    return (
        <ul className="items-center justify-around w-[23rem] lg:w-[35rem] text-black font-semibold text-md lg:text-lg capitalize hidden md:flex">
            <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                <a href={"/"} className="Link">home</a>
            </li>
            <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                <a href={"/"} className="Link">menu</a>
            </li>
            <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                <a href={"/"} className="Link">service</a>
            </li>
            <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                <a href={"/"} className="Link">about</a>
            </li>
            <li className="hover:text-yellow transition-colors duration-500 ease-in-out delay-100">
                <a href={"/"} className="Link">contacts</a>
            </li>
        </ul>
    )
}

export default ListDekstop
