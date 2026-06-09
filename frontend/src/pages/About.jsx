import AboutHero from "../components/AboutHero/AboutHero";
import Genesis from "../components/Genesis/Genesis";
import Navbar from "../components/Navbar/Navbar";
import WhoWeServe from "../components/WhoWeServe/WhoWeServe";
const About = () => {
  return (
     <>
      <Navbar />
      <AboutHero  />
      <Genesis />
      <WhoWeServe />
    {/* <div style={{ paddingTop: "120px" }}>
      <h1>About Page</h1>
    </div> */}
    </> 
  );
};

export default About;