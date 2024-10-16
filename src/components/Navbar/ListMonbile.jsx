import PropTypes from "prop-types"
import { AiOutlineHome } from "react-icons/ai"
import Button from "../Button"

const ListMonbile = ({ active }) => {
    return (
        <div className={`md:hidden absolute w-full bottom-0 h-screen top-[5.1rem] right-0 left-0 p-0 ${active ? "translate-x-0" : "translate-x-[100%] duration-1000"} transition-transform ease-in-out`}>
            <div className={`absolute w-[100%] right-0 bottom-0 h-screen p-0 blur-0 ${active ? "translate-x-0 duration-500" : "translate-x-[100%] duration-1000"} transition-transform  ease-in-out bg-black/90`} />
            <div className={`absolute w-[90%] right-0 bottom-0 h-screen bg-yellow p-0 blur-0 ${active ? "translate-x-0 duration-700" : "translate-x-[100%] duration-700"} transition-transform  ease-in-out`} />
            <div className={`absolute w-[90%] right-0 bottom-0 h-screen bg-white p-0 blur-0 ${active ? "translate-x-0 duration-1000" : "translate-x-[100%] duration-500"} transition-transform  ease-in-out`} >
                <div className="flex flex-col items-center h-full w-full p-5 py-10 gap-5">
                    <ul className="flex flex-col items-center w-full">
                        <li className="border border-transparent hover:bg-yellow w-full p-3 rounded-lg capitalize text-center transition-colors duration-300 ease-in-out delay-200 font-semibold text-2xl">
                            <a href={"/"} className="flex items-center justify-center gap-2"><AiOutlineHome />home</a>
                        </li>
                        <li className="border border-transparent hover:bg-yellow w-full p-3 rounded-lg capitalize text-center transition-colors duration-300 ease-in-out delay-200 font-semibold text-2xl">home</li>
                        <li className="border border-transparent hover:bg-yellow w-full p-3 rounded-lg capitalize text-center transition-colors duration-300 ease-in-out delay-200 font-semibold text-2xl">home</li>
                        <li className="border border-transparent hover:bg-yellow w-full p-3 rounded-lg capitalize text-center transition-colors duration-300 ease-in-out delay-200 font-semibold text-2xl">home</li>
                        <li className="border border-transparent hover:bg-yellow w-full p-3 rounded-lg capitalize text-center transition-colors duration-300 ease-in-out delay-200 font-semibold text-2xl">home</li>
                    </ul>
                    <div className="border-b-2 border-yellow w-full" />
                    <p className="font-thin text-black text-center">Maniskan harimu! Yuk, pesan dessert favoritmu sekarang!</p>
                    <Button>buy</Button>
                </div>
            </div>
        </div>
    )
}

ListMonbile.propTypes = {
    active: PropTypes.bool.isRequired,
};

export default ListMonbile
