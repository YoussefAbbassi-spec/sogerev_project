
import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";
import Catalogues from "../components/Catalogues/Catalogues";


const Hero = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSlider />
            <AboutSection />
            <Catalogues />
        </div>
    );
};

export default Hero;