// components
import TagLine from "../components/TagLine";
import CardMenu from "../components/CardMenu";

// images
import original from "../assets/menu/original.jpg";
import matcha from "../assets/menu/matcha.jpg";
import strawberry from "../assets/menu/strawberry.jpg";
import oreo from "../assets/menu/oreo.jpg";

const menus = [
  {
    image: original,
    name: "Original Pisang Coklat",
    count: 1,
    price: 3000,
    desc: "Selain cinta kita yang original, ada nih rasa original pisang coklat yang siap menggoda lidahmu! Manisnya bikin hari-hari jadi lebih cerah!",
  },
  {
    image: matcha,
    name: "Pisang dan Matcha",
    count: 1,
    price: 3000,
    desc: "Kalau kamu suka kesegaran, ada nih pisang matcha! Selain kehadiranmu yang menyegarkan, rasanya bisa bikin semangatmu bangkit kembali!",
  },
  {
    image: strawberry,
    name: "Pisang dan Strawberry",
    count: 1,
    price: 3000,
    desc: "Selain senyummu yang manis, ada nih pisang stroberi yang bisa bikin harimu lebih ceria! Rasanya yang pas, bikin siapa pun ingin mencobanya!",
  },
  {
    image: oreo,
    name: "Pisang dan Coklat Oreo",
    count: 1,
    price: 3000,
    desc: "Kalau kamu suka coklat, kamu harus coba pisang coklat Oreo ini! Seperti kita, perpaduan yang sempurna dan selalu membuatmu terpesona!",
  },
  // {
  //   image: null,
  //   name: "Pisang dan Keju",
  //   count: 1,
  //   price: 3000,
  //   desc: "Selain kasih sayang kita yang creamy, ada juga pisang keju ini! Rasanya yang lezat bikin kamu pengen terus mencicipi setiap gigitannya!",
  // },
];

const Menu = () => {
  return (
    <main className="px-[1rem] xl:px-[5rem]">
      <TagLine teg="our menu" desc="Hidangan Spesial, Seperti Kamu" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {menus.map((menu, index) => (
          <div key={index + 1}>
            <CardMenu
              price={menu.price}
              name={menu.name}
              desc={menu.desc}
              img={menu.image}
            />
          </div>
        ))}
      </div>
    </main>
  );
};

export default Menu;
