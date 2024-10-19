import order from "../assets/order.png";
import send from "../assets/send.png";
import eat from "../assets/eat.png";
import TagLine from "../components/TagLine";

const Services = () => {
  return (
    <section className="w-full px-[1rem]">
      <TagLine teg="our services" desc="bagaimana cara kerjanya?" />
      <div className="flex flex-col lg:grid grid-cols-3">
        <div className="flex flex-col md:flex-row md:items-center justify-between lg:justify-start w-full lg:flex-col text-center lg:mx-auto lg:w-96 scale-90">
          <img src={order} alt="" className="w-96 object-cover" />
          <div className="flex flex-col -mt-10">
            <p className="font-semibold text-2xl md:text-5xl lg:text-3xl capitalize md:font-bold">
              Pilih dan Pesan
            </p>
            <small className="lg:w-80 mx-auto text-base md:text-lg">
              Pesan makanan favorit Anda hanya dalam beberapa klik, tanpa ribet!
            </small>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between lg:justify-start w-full lg:flex-col text-center lg:mx-auto lg:w-96 scale-90">
          <img
            src={send}
            alt=""
            className="w-96 object-cover md:order-2 lg:order-1 scale-x-[-1]"
          />
          <div className="flex flex-col -mt-10 md:order-1 lg:order-2">
            <p className="font-semibold text-2xl md:text-5xl lg:text-3xl capitalize md:font-bold">
              Pesanan OTW
            </p>
            <small className="lg:w-80 mx-auto text-base md:text-lg">
              Nikmati layanan cepat kami—pilih dan pesan makanan Anda, dan kami
              akan mengantarkannya dengan segera!
            </small>
          </div>
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between lg:justify-start w-full lg:flex-col text-center lg:mx-auto lg:w-96 scale-90">
          <img src={eat} alt="" className="w-96 object-cover" />
          <div className="flex flex-col -mt-10">
            <p className="font-semibold text-2xl md:text-5xl lg:text-3xl capitalize md:font-bold">
              Makanan Berkualitas
            </p>
            <small className="lg:w-80 mx-auto text-base md:text-lg">
              Kami menggunakan bahan segar dan berkualitas tinggi untuk hidangan
              yang memuaskan selera Anda.
            </small>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
