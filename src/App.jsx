import Brand from "./components/Brand";
import Communtity from "./components/Communtity";
import Footer from "./components/Footer";
import Hero3 from "./components/Her03";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Marketing from "./components/Marketing";
import Nav from "./components/Nav"
import { BrowserRouter } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <div className="mx-auto  max-w-6xl">
        <Nav />
        <Hero/>
        <Brand/>
        <Communtity/>
        <Hero2/>
        <Hero3/>
        <Marketing/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;
