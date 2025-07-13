import { useContext, useEffect, useState } from "react";
import { GlobalStateContext } from "../../GlobalStateContext";
import { FaArrowLeftLong } from "react-icons/fa6";
import Button from "../Button";
import block from "/background/block.svg";

const methodes = [
  {
    method: "cod",
  },
  {
    method: "ovo",
  },
];

const CheckOut = () => {
  const { allMenuOrders, setCheckout } = useContext(GlobalStateContext);
  const [totalPrice, setTotalPrice] = useState(0);
  const [user, setUser] = useState({
    name: null,
    location: null,
    note: null,
    method: "",
  });

  const message = `siang, min saya ingin order: \n ${allMenuOrders.map(
    (menu) => "-" + menu.name + " " + menu.count + " " + "pcs" + `\n`,
  )} dengan total ${Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
  }).format(totalPrice)} \n\n 

    Nama : ${user.name} \n 
    Nethod : ${user.method} \n
    lokasi : ${user.location} \n
    Note : ${user.note} \n
    `;
  const encodedMessage = encodeURIComponent(message);
  const url = `https://wa.me/${import.meta.env.VITE_PHONE}?text=${encodedMessage}`;

  const handleSend = (data) => {
    const { name, method, location, note } = data;
    if (name && method && location && note) {
      window.open(url, "_blank");
    }
  };

  useEffect(() => {
    const total = allMenuOrders?.map((item) => item.price) || [];
    const sum = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0,
    );
    setTotalPrice(sum);
  }, [allMenuOrders]);

  return (
    <section className="absolute w-screen h-screen bg-white left-0 top-0 z-[100] text-black/80 md:overflow-hidden">
      <div className="lg:grid grid-cols-3 w-full h-full">
        <div className="lg:h-full w-full col-span-2 p-10 lg:p-24 flex flex-col gap-5 overflow-y-auto">
          <h1 className="text-4xl capitalize font-semibold">shopping cart.</h1>
          <div className="md:flex justify-between border-b-2 pb-2 hidden">
            <p className="font-bold capitalize text-lg">pruducts</p>
            <p className="font-bold capitalize text-lg">quntity</p>
            <p className="font-bold capitalize text-lg">total price</p>
          </div>
          <div className="border-b-2">
            {allMenuOrders?.map((item, index) => (
              <div
                key={index + 1}
                className="flex flex-col md:flex-row md:items-center justify-between p-2 gap-10 py-3"
              >
                <div className="flex gap-5 flex-row md:items-center justify-start w-full md:gap-14">
                  <img src={item.img} className="w-16 h-16" alt="" />
                  <h3 className="font-bold text-xl text-center md:text-start">
                    {item.name}
                  </h3>
                </div>
                <div className="w-full flex items-start md:items-center justify-between h-full">
                  <p className="uppercase text-xl font-semibold">
                    {item.count} pcs
                  </p>
                  <p className="uppercase text-xl ">
                    {Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                    }).format(item.price)}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <button
              className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group border group/arrow shadow order-2 md:order-1"
              type="button"
              onClick={() => {
                setCheckout(false);
              }}
            >
              <div className="bg-yellow rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                <FaArrowLeftLong className="w-20  group-hover/arrow:scale-x-[2.5] transition-transform duration-1000 ease-in-out" />
              </div>
              <p className="translate-x-2">Go Back</p>
            </button>

            <p className="font-bold uppercase opacity-90 order-1">
              total :{" "}
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(totalPrice)}
            </p>
          </div>
        </div>
        <div
          className="lg:h-full w-full bg-black text-white py-20 px-10 lg:p-24"
          style={{
            backgroundImage: `url(${block})`,
            backgroundPosition: "top",
          }}
        >
          <h1 className="text-4xl capitalize font-semibold">payment info.</h1>
          <div className="flex flex-col gap-20 lg:gap-10 mt-10">
            <div>
              <p className="text-center mb-10 text-lg capitalize font-semibold">
                metode pembayaran
              </p>
              <div className="grid grid-cols-2 gap-5 w-full">
                {methodes.map((via, index) => (
                  <div key={index + 1} className="w-full">
                    <button
                      className={`rounded-full w-full py-[.6rem] border text-xl uppercase transition-colors duration-500 ease-in-out delay-200 ${user.method == via.method ? "bg-yellow text-black border-transparent" : "border-yellow text-yellow"}`}
                      onClick={() => setUser({ ...user, method: via.method })}
                    >
                      {via.method}
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col w-full gap-1 rounded-2xl overflow-hidden text-black/80">
              <input
                type="text"
                className="p-2 w-full border-b placeholder:capitalize text-xl px-5 focus:outline-none"
                placeholder="name"
                onChange={(e) => setUser({ ...user, name: e.target.value })}
              />
              <textarea
                type="text"
                className="p-2 w-full border-b placeholder:capitalize text-xl px-5 focus:outline-none"
                placeholder="locasi"
                onChange={(e) => setUser({ ...user, location: e.target.value })}
              ></textarea>
              <textarea
                type="text"
                className="p-2 w-full border-b placeholder:capitalize text-xl px-5 focus:outline-none"
                placeholder="catatan"
                onChange={(e) => setUser({ ...user, note: e.target.value })}
              ></textarea>
            </div>
            <Button
              className={"w-full h-14 border-2 border-yellow"}
              onClick={() => handleSend(user)}
            >
              pesan
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CheckOut;
