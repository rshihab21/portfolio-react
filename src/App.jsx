import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Services from "./Components/Services/Services";
import Mywork from "./Components/Mywork/Mywork";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Mywork />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
