
import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import Catalogues from "../components/Catalogues/Catalogues";
import Services from "../components/Services/Services";
import Produits from "../components/Produits/Produits";
import Contact from "../components/Contact/Contact";

const Home = () => {
    return (
        <div className=" min-h-screen">
            <Navbar />
            <HeroSlider />
            <AboutSection />
            <Catalogues />
            <Services />
            <Produits />
            <Contact />
        </div>
    );
};

export default Home;