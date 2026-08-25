import Navbar from "../components/Navbar";
import AboutUs from "../components/AboutUs";
import AboutFeatures from "../components/AboutFeatures";
import AboutWhy from "../components/AboutWhy";
import Footer from "../components/Footer";

function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <AboutUs />
      <AboutFeatures />
      <AboutWhy />
      <Footer />
    </div>
  );
}

export default About;