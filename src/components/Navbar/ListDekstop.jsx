import { Link } from 'react-scroll';

const ListDekstop = () => {
    const lists = [
        { title: "home", to: "home" },
        { title: "menu", to: "menu" },
        { title: "service", to: "service" },
        { title: "about us", to: "about" },
        { title: "contacts", to: "contacts" },
    ];

    return (
        <ul className="items-center justify-around w-[23rem] lg:w-[35rem] text-black font-semibold text-md lg:text-lg capitalize hidden md:flex">
            {lists.map((list, index) => (
                <li key={index} className='hover:text-yellow transition-colors duration-500 ease-in-out delay-100'>
                    <Link
                        activeClass="text-yellow font-bold transition-all duration-500 ease-in-out delay-100 border-b"
                        to={list.to}
                        spy={true}
                        smooth={true}
                        duration={1500}
                        className='Link'
                    >
                        {list.title}
                    </Link>
                </li>
            ))}
        </ul>
    );
}

export default ListDekstop;
