import AboutHero from "../components/AboutHero/AboutHero";
import Genesis from "../components/Genesis/Genesis";
import Navbar from "../components/Navbar/Navbar";
const About = () => {
  return (
     <>
      <Navbar />
      <AboutHero  />
      <Genesis />
    {/* <div style={{ paddingTop: "120px" }}>
      <h1>About Page</h1>
    </div> */}
    </> 
  );
};

export default About;