import { AiFillInstagram } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa6";
const IconMesdia = () => {
  return (
    <div className="social-links w-full">
      <a
        href={"https://www.instagram.com/___bananachocolate/profilecard/?igsh=aGlxanlocDU0c21n"}
        className="social-btn flex-center justify-center flex"
      >
        <AiFillInstagram size={300} className="fill-pink-700 scale-125" />
        <span>@_bananachocolate</span>
      </a>

      <a
        href={`https://wa.me/${import.meta.env.VITE_PHONE}`}
        className="social-btn flex-center justify-center flex"
      >
        <FaWhatsapp size={300} className="fill-green-700 scale-125" />
        <span>{import.meta.env.VITE_PHONE}</span>
      </a>
    </div>
  );
};

export default IconMesdia;
