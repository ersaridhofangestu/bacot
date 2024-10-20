import happy from "../assets/happy.png";
import abstak from "../assets/background/abstrak.svg";
import TagLine from "../components/TagLine";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { RiDoubleQuotesL, RiDoubleQuotesR } from "react-icons/ri";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FirebaseService } from "../database/services.js";
import { useEffect, useMemo, useState } from "react";
import { FaPlus, FaMinus, FaArrowLeftLong } from "react-icons/fa6";
import Button from "../components/Button";

const Testimonial = () => {
  const [datas, setDatas] = useState(null);
  const [stars, setStars] = useState(1);
  const [creataTestimonial, setCreateTestimonial] = useState(false);
  const [dataTestimonial, setDataTestimonial] = useState({
    name: null,
    star: 1,
    desc: "",
  });

  const service = useMemo(() => new FirebaseService(), []);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const testimonials = await service.FetchDataTetimonial();
      setDatas(testimonials);
    };
    fetchTestimonials();
  }, [service]);

  const handleSend = async (datas) => {
    const { name, star, desc } = datas;

    if (name && star && desc) {
      try {
        const send = await service.Created(datas);
        return send;
      } catch (error) {
        throw new error
      }
    }
  };

  return (
    <section className="relative mx-[1rem]">
      <TagLine
        teg="our seviews"
        desc="Ayo, ceritakan kesan serumu bareng kami!"
      />
      <div className="lg:grid grid-cols-3 gap-10 md:py-10">
        <div
          style={{
            backgroundImage: `url(${abstak})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundPositionX: "-100px",
          }}
          className="lg:flex items-center justify-center hidden"
        >
          <img src={happy} alt="" className="scale-x-[-1] w-[30rem] " />
        </div>
        <div className="col-span-2 w-full">
          <div className="w-full relative flex lg:pt-10">
            {creataTestimonial ? (
              <div className="h-full w-full flex flex-col gap-3 md:gap-5 p-10">
                <div className="md:flex items-center justify-between">
                  <h2 className="text-3xl font-semibold">Testimonial</h2>
                  <button
                    className="bg-white text-center w-48 rounded-2xl h-14 relative text-black text-xl font-semibold group border group/arrow shadow z-10 float-right md:float-none scale-75"
                    type="button"
                    onClick={() => setCreateTestimonial(!creataTestimonial)}
                  >
                    <div className="bg-yellow rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                      <FaArrowLeftLong className="w-20  group-hover/arrow:scale-x-[2.5] transition-transform duration-1000 ease-in-out" />
                    </div>
                    <p className="translate-x-2">Go Back</p>
                  </button>
                </div>
                <input
                  type="text"
                  placeholder="nama"
                  className="py-2 px-5 shadow border rounded-3xl focus:outline-none placeholder:capitalize"
                  onChange={(e) =>
                    setDataTestimonial({
                      ...dataTestimonial,
                      name: e.target.value,
                    })
                  }
                />
                <div className="flex items-center gap-5">
                  <div className="grid  grid-cols-3 items-center border w-[10rem] h-[2rem] rounded-full overflow-hidden shadow">
                    <button
                      className="h-full flex justify-center items-center"
                      onClick={() => {
                        stars < 5 ? setStars(stars + 1) : null,
                          stars < 5 &&
                          setDataTestimonial({
                            ...dataTestimonial,
                            star: dataTestimonial.star + 1,
                          });
                      }}
                    >
                      <FaPlus />
                    </button>

                    <p className="border-x px-[1rem] h-full flex items-center justify-center">
                      {stars}
                    </p>
                    <button
                      className="h-full flex justify-center items-center"
                      onClick={() => {
                        stars > 1 ? setStars(stars - 1) : null,
                          stars > 1 &&
                          setDataTestimonial({
                            ...dataTestimonial,
                            star: dataTestimonial.star - 1,
                          });
                      }}
                    >
                      <FaMinus />
                    </button>
                  </div>
                  <div className="flex items-center">
                    {Array.from({ length: stars }).map((_, index) => (
                      <div key={index + 1}>
                        <MdOutlineStarPurple500
                          size={25}
                          className="fill-yellow scale-125"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <textarea
                  rows={4}
                  placeholder="nama"
                  className="py-2 px-5 shadow border rounded-3xl focus:outline-none placeholder:capitalize"
                  onChange={(e) =>
                    setDataTestimonial({
                      ...dataTestimonial,
                      desc: e.target.value,
                    })
                  }
                ></textarea>
                <Button
                  className={"capitalize"}
                  onClick={() => {
                    handleSend(dataTestimonial),
                      setTimeout(() => {
                        setCreateTestimonial(false);
                      }, [3000]);
                  }}
                >
                  send
                </Button>
              </div>
            ) : (
              <div className="w-full relative">
                {!creataTestimonial && (
                  <div className="flex w-full md:p-5 lg:w-[70%] justify-end items-center">
                    <button
                      className="bg-white text-center w-48 relative rounded-2xl h-14 text-black text-xl font-semibold group border group/arrow shadow flex scale-75 md:scale-100"
                      type="button"
                      onClick={() => setCreateTestimonial(true)}
                    >
                      <div className="bg-yellow rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[184px] z-10 duration-500">
                        <FaArrowLeftLong className="w-20  group-hover/arrow:scale-x-[2.5] transition-transform duration-1000 ease-in-out" />
                      </div>
                      <p className="w-full h-full flex justify-center items-center">
                        create
                      </p>
                    </button>
                  </div>
                )}
                <Carousel
                  autoFocus={true}
                  infiniteLoop={true}
                  autoPlay={true}
                  showThumbs={false}
                  showStatus={false}
                  showArrows={false}
                  className="md:p-5 lg:w-[70%]"
                  renderIndicator={(clickHandler, isSelected, index, label) => (
                    <button
                      className={`${isSelected ? "bg-black w-[48px]" : "bg-[#ccc]"} transition-all duration-500 ease-in-out rounded-full border-hidden mx-[8px] w-[20px] h-[20px] cursor-pointer outline-none shadow`}
                      onClick={clickHandler}
                      onKeyDown={clickHandler}
                      aria-label={`Slide ${index + 1} ${label}`}
                    />
                  )}
                >
                  {datas?.map((data, index) => (
                    <div
                      key={index + 1}
                      className="flex lg:block items-center justify-center flex-col"
                    >
                      <div className="flex items-center gap-4">
                        <div className="border w-20 h-20 flex items-center justify-center rounded-full p-3 shadow">
                          <FaUserAlt size={30} />
                        </div>
                        <div className="flex flex-col">
                          <h2 className="font-bold capitalize">{data.name}</h2>
                          <div className="flex items-center">
                            {Array.from({ length: data.star }).map(
                              (_, index) => (
                                <div key={index + 1}>
                                  <MdOutlineStarPurple500
                                    size={25}
                                    className="fill-yellow"
                                  />
                                </div>
                              ),
                            )}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-start md:gap-10 relative mt-10 w-1/2 lg:w-full">
                        <div className="w-20 h-20 flex items-center justify-center">
                          <RiDoubleQuotesL
                            size={60}
                            className="fill-yellow size-10"
                          />
                        </div>
                        <p className="w-full">{data.desc}</p>
                        <div className="w-20 h-20 flex items-center justify-center">
                          <RiDoubleQuotesR
                            size={60}
                            className="fill-yellow size-10"
                          />
                        </div>
                      </div>
                      <div className="py-10" />
                    </div>
                  ))}
                </Carousel>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
