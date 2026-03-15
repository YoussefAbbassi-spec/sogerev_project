import { Play } from "lucide-react";
import { ASSETS } from "../../assets";

const AboutSection = () => {
  return (
    <section className="relative bg-white px-5 pt-8 pb-10 md:px-16 md:pt-12 md:pb-16 overflow-hidden md:mb-5">

      {/* ── TOP-RIGHT CUBE (desktop only) ── */}
      <div className="hidden md:block absolute top-[-2px] right-10 w-[230px] overflow-hidden">
        <img
          src={ASSETS.cubeImg}
          alt=""
          className="w-full h-auto"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* ── TOP LABEL ── */}
      <div className="pl-3 relative flex flex-row items-stretch gap-3 " >


        <div className="hidden md:block" style={{
          width: "2.5px",
          height: "101px",
          backgroundColor: "var(--color-primary)",
          borderRadius: "2px",
          transform: "translate(-11px,27px)"
        }} />
        <div>
          <p className="text-[18px] md:text-[35px] uppercase tracking-widest font-bold" style={{ letterSpacing: "0.2px" }}>
            <span style={{ color: "#134A87" }}>
              QUI SOMMES
              <span className=" text-[25px] md:text-[50px]">-</span>
            </span>
            <span style={{ color: "var(--color-primary)" }}>NOUS ?</span>
          </p>
          <p
            className="text-[15px] md:text-[28px] uppercase tracking-wider   font-light "
            style={{ color: "var(--color-text-gray)", fontFamily: "Roboto" }}
          >
            L'ÉLÉGANCE FAÇONNÉE PAR LA PASSION.
          </p>
          <div
            className="mt-1 hidden md:block"
            style={{
              width: "330px",
              height: "2.5px",
              backgroundColor: "var(--color-primary)",
              transform: "translate(-25px,5px)"
            }}
          />
        </div>
      </div>

      {/* ── MAIN HEADING ── */}
      <h2
        className="text-[22px] md:text-[90px] font-[600]  leading-tight mt-5 md:mt-8 mb-6 md:mb-10 ml-3 md:ml-10 md:max-w-[100%]"
        style={{ color: "rgba(5, 15, 39, 1)", fontFamily: "Roboto" }}
      >
        Nous façonnons l'art de l'aménagement de demain.
      </h2>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="flex flex-col md:flex-row md:gap-10 md:items-start">

        {/* LEFT COLUMN — text */}
        <div className="w-full md:w-[400px] mb-6 md:mb-0 md:ml-10 p-10 "
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0px 4px 24px rgba(0, 0, 0, 0.10)",
            border: "1px solid rgba(0, 0, 0, 0.06)",
            borderRadius: "4px"
          }}
        >
          <p
            className="text-[17px] md:text-[18px] uppercase  "
            style={{ color: "#050F27" }}
          >
            DÉCOUVREZ SOGEREV
          </p>
          <p
            className="text-[17px] md:text-[20px] font-[800] mb-4"
            style={{ color: "#050F27" }}
          >
            Votre Partenaire pour des Revêtements d'Exception
          </p>
          <p
            className="text-[15px ] font-[500] leading-relaxed text-justify mb-4 "
            style={{ color: "var(--color-text-gray)" }}
          >
            Nous importons des matériaux de qualité supérieure du monde entier
            pour vous offrir une sélection variée de carrelages, marbres,
            granites et pierres naturelles. Faites confiance à notre expertise
            pour transformer votre espace en un lieu d'élégance intemporel
            <br></br>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* RIGHT COLUMN — image + play button */}
        <div className="w-full md:w-[64%]  relative">
          <img
            src={ASSETS.buildingImg}
            alt="Sogerev building"
            className="w-full h-[220px] md:h-[596px] object-cover"
          />

          {/* Play button overlay */}
          <button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
            style={{ border: "2px solid white" }}
            aria-label="Play video"
          >
            <Play
              size={18}
              fill="var(--color-primary)"
              style={{ color: "var(--color-primary)" }}
            />
          </button>
        </div>
      </div>

      {/* ── BOTTOM-LEFT CUBE (desktop only) ── */}
      <div className="hidden md:block absolute bottom-[-40px] left-0 w-[190px] overflow-hidden">
        <img
          src={ASSETS.cubeImg2}
          alt=""
          className="w-full h-auto"
          style={{
            mixBlendMode: "multiply",
          }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
