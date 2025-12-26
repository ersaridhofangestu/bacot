import Button from "../components/Button";
import IconMedia from "../components/IconMedia";
import image from "../assets/hay.png";
import abstrak from "/background/abstrak.svg";
import background from "/background/headerBaground.svg";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import { FaPhoneAlt } from "react-icons/fa";
import { GlobalStateContext } from "../GlobalStateContext";
import { useContext } from "react";

const Headers = () => {
  const { setCheckout } = useContext(GlobalStateContext);

  return (
    <>
      <header
        className="h-[100vh]"
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="px-[1rem] lg:px-[5rem]">
          <div className="grid w-full h-[100vh] lg:grid-cols-2 xl:grid-cols-3 pt-20 lg:pt-0 ">
            <div className="flex items-start justify-center xl:col-span-2 flex-col gap-10 order-2 lg:order-1">
              <div className="flex flex-col gap-5">
                <h2 className="w-[15rem] text-2xl md:text-5xl text-center lg:text-start lg:text-6xl font-semibold md:w-[28rem] lg:w-full mx-auto lg:mx-0 xl:text-8xl">
                  Temukan Senyum di Setiap{" "}
                  <span className="text-transparent text-stroke-2">
                    Gigitan
                  </span>
                  .
                </h2>
                <p className="md:w-[70%] text-center lg:text-start text-xs md:mx-auto lg:mx-0 xl:text-xl">
                  Nikmati Kejutan Manis di Setiap Gigitan, Temukan Kebahagiaan
                  yang Menggoda dan Cerita Baru dalam Setiap Momen Spesial Anda.
                </p>
              </div>
              <Button
                onClick={() => setCheckout(true)}
                className={
                  "w-[12rem] h-[3rem] mx-auto lg:mx-0 scale-70 md:scale-100 capitalize"
                }
              >
                pesan sekarang
              </Button>
              <div className="relative -mt-6 mx-auto lg:mx-0 scale-70 md:scale-100">
                <IconMedia />
              </div>
            </div>
            <div className="flex items-center justify-center overflow-hidden relative order-1 lg:order-2 mp-32 lg:mp-0">
              <div className="flex items-center justify-center scale-95 lg:scale-100">
                <img
                  src={abstrak}
                  alt="monkey"
                  className="w-[59rem] absolute lg:scale-125"
                />
                <img
                  src={image}
                  alt="monkey"
                  className="w-[39rem] relative scale-75 lg:scale-100"
                />
                <div className="flex items-center bg-white shadow px-5 py-2 absolute md:left-8 -left-12 gap-5 rounded-md md:scale-75 lg:scale-100 scale-50">
                  <div className="bg-yellow p-2 rounded-lg">
                    <FaPhoneAlt />
                  </div>
                  <div className="flex items-center flex-col">
                    <p className="font-semibold capitalize">phone number:</p>
                    <p>{import.meta.env.VITE_PHONE || "08966*******"} </p>
                  </div>
                </div>
                <div className="absolute w-[37rem] bg-white bottom-0 scale-50 :p-5 rounded-3xl md:scale-75 md:bottom-16 shadow-md font-mono">
                  <RiDoubleQuotesL className="size-10 fill-yellow" />
                  <p className="px-10">
                    Kamu tahu nggak? Ada yang lebih manis dari kamu, yaitu
                    banana coklat lumer yang siap bikin harimu ceria! 😘 Kapan
                    mau checkout biar langsung baper?
                  </p>
                  <RiDoubleQuotesR className="size-10 fill-yellow float-right" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Headers;
