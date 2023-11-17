import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Offerings from "../components/Offerings";
import AboutUs from "../components/AboutUs";
import ContactUs from "../components/ContactUs";
import Footer from "../components/Footer";
import "./BakerysStore.css";

const BakerysStore = () => {
  return (
    <div className="bakerys-store">
      <Navbar />

      <Hero />

      <Offerings />

      <AboutUs />

      <ContactUs />


      <Footer />

    </div>
  );
};

export default BakerysStore;
