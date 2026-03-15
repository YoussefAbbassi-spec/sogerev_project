
import Navbar from "../components/Navbar/Navbar";
import HeroSlider from "../components/HeroSlider/HeroSlider";
import AboutSection from "../components/AboutSection/AboutSection";


const Hero = () => {
    return (
        <div className="min-h-screen">
            <Navbar />
            <HeroSlider />
            <AboutSection />
        </div>
    );
};

export default Hero;