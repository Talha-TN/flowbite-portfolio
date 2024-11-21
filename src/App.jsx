import Navbar from "./assets/components/header/Navbar";
import HeroSection from "./assets/components/hero/HeroSection";
// import Carousel from "./assets/components/projects-crousal/Carousel";
// import AboutMe from "./assets/components/about/AboutMe";
import About from "./assets/components/about/About";
import Projects from "./assets/components/projects/Projects";
import Footer from "./assets/components/footer/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <HeroSection/>
    
      {/* <Carousel/>
      <AboutMe/>  */}
    <About/>
     <Projects/>
     <Footer/>
    
    </>
  );
}

export default App;
