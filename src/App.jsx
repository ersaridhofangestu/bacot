import Headers from "./tamplats/Headers"
import Services from "./tamplats/Services"
import Navbar from "./components/Navbar"
import { Element } from "react-scroll"
import Menu from "./tamplats/Menu"

const App = () => {
  return (
    <div className="flex flex-col gap-36">
      <Navbar />
      <Element name="home">
        <Headers />
      </Element>
      <Element name="service">
        <Services />
      </Element>
      <Menu />
    </div>
  )
}

export default App
