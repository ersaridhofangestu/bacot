import Logo from "../assets/logo.png";
import ListDekstop from "../components/Navbar/ListDekstop";
import Button from "../components/Button";
import { useState } from "react";
import { FirebaseService } from "../database/services.js";

const Footer = () => {
  const [subscribe, setSubscribe] = useState("");
  const service = new FirebaseService();
  const handleSend = async (datas) => {
    const { name } = datas;

    if (name) {
      try {
        const send = await service.Created(datas);
        return send;
      } catch (error) {
        throw new error();
      }
    }
  };
  return (
    <footer className="px-[1rem] lg:px-[5rem] pt-20 bg-vanila">
      <div className="md:flex justify-between items-start border-b-2 border-black pb-10">
        <div>
          <div className="flex items-center justify-start mb-4">
            <img src={Logo} alt="logo" className="w-20" />
            <h1 className="font-extrabold capitalize text-5xl">bacot</h1>
          </div>
          <ListDekstop className="text-black/50 flex gap-5 flex-wrap" />
        </div>
        <div>
          <h2 className="font-semibold text-2xl capitalize text-black/50 text-center md:text-start">
            ikuti kami
          </h2>
          <div className="flex flex-col md:flex-row items-center md:gap-5">
            <input
              type="email"
              className="p-2 w-full border rounded-lg placeholder:capitalize text-xl px-5 focus:outline-none"
              placeholder="Email"
              value={subscribe.name ? subscribe.name : ""}
              onChange={(e) =>
                setSubscribe({ name: e.target.value, date: new Date() })
              }
            />
            <Button
              onClick={() => {
                handleSend(subscribe), setSubscribe("");
              }}
              className={"w-full md:w-[16rem] h-10"}
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>
      <p className="flex items-center gap-2 py-3 justify-center text-center md:text-start">
        ©2024 Pisang Coklat Store by <a className="font-semibold
         capitalize" href="https://ersaridhofangestu.netlify.app/">ersa ridho fangestu</a>. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
