import "./App.css"
import Animate from "./components/Animate";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import NavigationBar from "./components/NavigationBar"
import SuperHero from "./components/SuperHero";
import Trending from "./components/Trending";
import "./style/landingpage.css"
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const App = () => {
  const boxVariant = {
    visible: { opacity: 1, scale: 2 },
    hidden: { opacity: 0, scale: 0 },
  }
  return (
    <div>
      {/* Intro section */}
      <div className="myBG">
      <NavigationBar />
      <Intro />
      </div>
       {/* End Of Intro section */}
       <div className="trending">
        <Trending />
       </div>
       <div className="superhero">
        <SuperHero />
       </div>
       <div className="footer">
        <Footer />
       </div>
    </div>
  );
  }
  // console.log({popularMovies: popularMovies})



export default App;
