import Button from "../components/Button";
import model from "../assets/model.png";
import IconMedia from "../components/IconMedia";
import TagLine from "../components/TagLine";

const About = () => {
  return (
    <section className="px-[1rem] xl:px-[5rem]">
      <div className="rounded-3xl bg-vanila flex flex-col md:grid grid-cols-2 xl:grid-cols-3 p-10 py-16 md:gap-10 lg:h-[36rem] overflow-hidden">
        <div className="flex flex-col items-start mt-10 md:mt-0 w-full order-2 md:order-1 xl:col-span-2">
          <TagLine
            className={"md:text-center"}
            teg="our application"
            desc="banan chocolate"
          />
          <p className="-mt-5 max-w-[50rem] xl:text-xl">
            Pisang coklat kami adalah perpaduan sempurna antara manisnya pisang
            yang lembut dan krimnya coklat yang menggoda. Setiap gigitan
            menawarkan sensasi rasa yang memanjakan lidah, memberikan pengalaman
            yang tak terlupakan. Dengan bahan berkualitas tinggi dan sentuhan
            cinta, pisang coklat ini adalah camilan yang tidak hanya memuaskan
            selera, tetapi juga membuat hati bergetar. Cobalah dan rasakan
            kelezatannya!
          </p>
          <div className="flex flex-col mt-5 gap-3 justify-start items-start">
            <Button className={"w-[15rem] h-14 capitalize"}>
              {" "}
              pesan sekarang{" "}
            </Button>
            <IconMedia />
          </div>
        </div>
          <img src={model} alt="" className="-mt-5 rounded-3xl shadow order-1" />
      </div>
    </section>
  );
};

export default About;
