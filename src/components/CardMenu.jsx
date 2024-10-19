import { useContext, useState } from "react";
import { GlobalStateContext } from "../GlobalStateContext";
import PropTypes from "prop-types";

// icons
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";

const CardMenu = ({ name, price, desc, img }) => {
  const [countOrder, setCountOrder] = useState(0);
  const {
    setAllMenuOrders,
    allMenuOrders,
    totalCountOrder,
    setTotalCountOrder,
  } = useContext(GlobalStateContext);

  const handleAddOrder = (nameItem, price, img) => {
    if (!nameItem) return;

    const existingItem = allMenuOrders.find((item) => item.name === nameItem);

    if (existingItem) {
      setAllMenuOrders(
        allMenuOrders.map((item) =>
          item.name === nameItem
            ? {
                ...item,
                count: item.count + 1,
                price: price * (item.count + 1),
                img: img,
              }
            : item,
        ),
      );
      setCountOrder(countOrder + 1);
    } else {
      setAllMenuOrders([
        ...allMenuOrders,
        { name: nameItem, count: 1, price: price },
      ]);
      setCountOrder(countOrder + 1);
    }
  };

  const handleDeletedOrder = (nameItem, price) => {
    if (!nameItem) return;

    const existingItem = allMenuOrders.find((item) => item.name === nameItem);

    if (existingItem) {
      if (existingItem.count > 1) {
        setAllMenuOrders(
          allMenuOrders.map((item) =>
            item.name === nameItem
              ? { ...item, count: item.count - 1, price: item.price - price }
              : item,
          ),
        );
        setCountOrder(countOrder - 1);
      } else {
        setAllMenuOrders(
          allMenuOrders.filter((item) => item.name !== nameItem),
        );
        setCountOrder(countOrder - 1);
      }
    }
  };

  return (
    <div className="card p-2 rounded-3xl shadow">
      <div className="bg-white content rounded-3xl flex flex-col gap-5">
        <div className="relative w-full h-72  rounded-t-3xl border overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover" />
        </div>
        <div className="p-5 flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index + 1}>
                  <MdOutlineStarPurple500 size={25} className="fill-yellow" />
                </div>
              ))}
            </div>
            <p className="">
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(price)}
            </p>
          </div>
          <h2 className="capitalize font-bold">{name}</h2>
          <small className="px-3 font-mono text-sm">{desc}</small>
          <div className="flex justify-between mt-10">
            <div className="grid  grid-cols-3 items-center border w-[10rem] h-[2rem] rounded-full overflow-hidden shadow">
              <button
                className="h-full flex justify-center items-center"
                onClick={() => {
                  handleAddOrder(name, price, img),
                    setTotalCountOrder(totalCountOrder + 1);
                }}
              >
                <FaPlus />
              </button>
              <p className="border-x px-[1rem] h-full flex items-center justify-center">
                {countOrder}
              </p>
              {totalCountOrder > 0 && (
                <button
                  className="h-full flex justify-center items-center"
                  onClick={() => {
                    handleDeletedOrder(name, price),
                      setTotalCountOrder(totalCountOrder - 1);
                  }}
                >
                  <FaMinus />
                </button>
              )}
            </div>
            <p>
              Total :{" "}
              {Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(countOrder * price)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CardMenu.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  desc: PropTypes.string.isRequired,
  img: PropTypes.string,
};

export default CardMenu;
