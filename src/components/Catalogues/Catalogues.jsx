import { FlechRight } from "../Icons/Icons";
import { ASSETS } from "../../assets";
import { CATALOGUES } from "../../constants/Hero_data";





const DownloadBtn = ({ pdf, label }) => (

  <a href={pdf || "#"}
    download={pdf ? label : undefined}
    className="flex items-center gap-2 px-4 py-2 text-white text-[11px] md:text-[18px] uppercase  transition-all hover:bg-white/10"
    style={{ border: "1px solid white", width: "fit-content", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
  >
    TELECHARGER < FlechRight />
  </a >
);

const CardContent = ({ cat, position }) => (
  <div className={`absolute  ${position} p-5`}>
    <p className="text-white text-[11px] md:text-[21px] uppercase  mb-1 " style={{ fontFamily: "var(--font-poppins)", fontWeight: 300 }}>
      DÉCOUVREZ
    </p>
    <p className={`text-white font-[700] uppercase mb-3 text-[18px] md:text-[23px]`} style={{ fontFamily: "var(--font-poppins)", fontWeight: 700 }}>
      {cat.label}
    </p>
    <DownloadBtn pdf={cat.pdf} label={cat.label} />
  </div>
);

const Catalogues = () => {
  return (
    <section className="relative bg-white px-5 md:px-23 pt-7 md:pt-9 pb-10 md:pb-16 overflow-hidden">

      {/* ── TOP-RIGHT CUBE (desktop only) ── */}
      <div className="hidden md:block absolute top-[-35px] right-18 w-[280px] ">
        <img
          src={ASSETS.IMAGES.cubeImg3}
          alt=""
          className="wfull h-auto"
          style={{ mixBlendMode: "multiply" }}
        />
      </div>

      {/* ── TOP LABEL ── */}
      <div className="flex flex-row items-stretch gap-3">
        {/* Left orange line */}
        <div class='hidden md:block' style={{
          width: "2.5px",
          backgroundColor: "var(--color-primary)",
          borderRadius: "2px",
          transform: "translate(-10px,8px)",
          height: '106px'
        }} />

        {/* Label content */}
        <div>
          <p className="text-[20px] md:text-[36px] uppercase tracking-tight font-semibold">
            <span style={{ color: "rgba(19, 74, 135, 1)", fontFamily: "var(--font-poppins)" }}>NOS </span>
            <span style={{ color: "var(--color-primary)", fontFamily: "var(--font-poppins)" }}>CATALOGUES</span>
          </p>
          <p className="text-[15px] md:text-[32px] uppercase tracking-wider font-extralight"
            style={{ color: "var(--color-text-gray)", fontFamily: "var(--font-poppins)" }}>
            L'EXCELLENCE DU SUR-MESURE
          </p>
          {/* Orange underline */}
          <div className="mt-2 hidden md:block" style={{
            width: "380px",
            height: "2.5px",
            backgroundColor: "var(--color-primary)",
            transform: "translate(-23px,1px)"
          }} />
        </div>
      </div>

      {/* ── TAGLINE ── */}
      <p
        className="text-[11px] md:text-[19px] uppercase tracking-wider md:mt-8 mt-4 mb-10"
        style={{ color: "var(--color-text-gray)", fontFamily: "var(--font-poppins)", fontWeight: 400 }}
      >
        ADMIREZ NOS RÉALISATIONS ET IMAGINEZ CE QUE NOUS POUVONS CRÉER POUR VOUS.
      </p>

      {/* ── CARDS GRID — DESKTOP ── */}
      {/* Layout: [BIG LEFT] [TALL CENTER] [TWO STACKED RIGHT] */}
      <div className="hidden md:flex flex-row gap-7 items-stretch" style={{ height: "495px" }}>


        <div className="relative overflow-hidden flex-[1.4] width-[250px]">
          <img
            src={CATALOGUES[0].image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <CardContent cat={CATALOGUES[0]} position="bottom-4 left-4" />
        </div>

        {/* CENTER — 1 tall card same height */}
        <div className="relative overflow-hidden flex-[0.8]">
          <img
            src={CATALOGUES[1].image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/45" />
          <CardContent cat={CATALOGUES[1]} position="top-4 left-4" />
        </div>

        {/* RIGHT — 2 stacked cards */}
        <div className="flex flex-col gap-4 flex-[1.1]">
          {/* Top right card */}
          <div className="relative overflow-hidden flex-1">
            <img
              src={CATALOGUES[2].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <CardContent cat={CATALOGUES[2]} position="bottom-2 left-2" />
          </div>

          {/* Bottom right card */}
          <div className="relative overflow-hidden flex-1">
            <img
              src={CATALOGUES[4].image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <CardContent cat={CATALOGUES[4]} position="bottom-2 left-2" />
          </div>
        </div>

      </div>

      {/* ── CARDS GRID — MOBILE ── */}
      {/* All 4 cards stacked vertically */}
      <div className="flex md:hidden flex-col gap-4">
        {CATALOGUES.filter((cat) => cat.id !== "new-mdf").map((cat) => (
          <div
            key={cat.id}
            className="relative overflow-hidden w-full"
            style={{ height: "220px" }}
          >
            <img
              src={cat.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/45" />
            <CardContent cat={cat} size="sm" />
          </div>
        ))}
      </div>

    </section>
  );
};

export default Catalogues;