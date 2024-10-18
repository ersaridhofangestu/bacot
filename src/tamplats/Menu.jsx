import TagLine from "../components/TagLine"
import original from "../assets/menu/original.jpg"
import { MdOutlineStarPurple500 } from "react-icons/md";
import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa6";

const Menu = () => {
    const [count, setCount] = useState(0)
    return (
        <main className="px-[1rem] pb-[100rem]">
            <TagLine teg="our menu" desc="Hidangan Spesial, Seperti Kamu" />
            <div className="grid grid-cols-4">
                <div className="rounded-3xl overflow-hidden border flex flex-col gap-5">
                    <div className="relative w-full h-48">
                        <img src={original} alt="" className="w-full h-full object-cover" />
                    </div>
                    <div className="p-5 flex flex-col gap-2">
                        <span className="flex items-center gap-1">
                            <MdOutlineStarPurple500 size={25} className="fill-yellow" />
                            <MdOutlineStarPurple500 size={25} className="fill-yellow" />
                            <MdOutlineStarPurple500 size={25} className="fill-yellow" />
                            <MdOutlineStarPurple500 size={25} className="fill-yellow" />
                            <MdOutlineStarPurple500 size={25} className="fill-yellow" />
                        </span>
                        <h2 className="capitalize font-semibold">Original Pisang Coklat</h2>
                        <small className="px-3">Selain cinta kita yang original, ada nih rasa original pisang coklat yang siap menggoda lidahmu! Manisnya bikin hari-hari jadi lebih cerah!</small>
                        <div className="flex justify-between">
                            <div className="flex items-center justify-around border w-[10rem] h-[2rem] rounded-full overflow-hidden">
                                <button className="h-full w-full flex justify-center items-center group-hover/plus:bg-yellow group/plus:">
                                    <FaPlus className="group-hover/plus:scale-110" />
                                </button>
                                <p className="border-x px-2">{count}</p>
                                <button className="h-full w-full"><FaMinus /></button>
                            </div>
                            Rp. 20.0000\-
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Menu
