import { Pause } from "lucide-react";
import { Play, ArrowLeft, ArrowRight } from "../Icons/Icons";
import { ASSETS } from "../../assets";
import { useRef, useState } from "react";
import { SLIDER_CARDS } from "../../constants/Hero_data";





const AboutSection = () => {

  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  // Slider state
  const SLIDER_CARDS_LOOP = [...SLIDER_CARDS, SLIDER_CARDS[0]];

  const [sliderIndex, setSliderIndex] = useState(0);
  const trackRef = useRef(null);
  const touchStartX = useRef(null);

  const sliderNext = () => setSliderIndex((i) => (i + 1) % SLIDER_CARDS.length);
  const sliderPrev = () => setSliderIndex((i) => (i - 1 + SLIDER_CARDS.length) % SLIDER_CARDS.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 40) sliderNext();
    if (diff < -40) sliderPrev();
    touchStartX.current = null;
  };


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
            style={{ color: "var(--color-text-gray)", fontFamily: "Poppins" }}
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
        className="text-[22px] md:text-[90px] font-[500]  leading-tight mt-5 md:mt-8 mb-6 md:mb-10 ml-3 md:ml-10 md:max-w-[100%]"
        style={{ color: "rgba(5, 15, 39, 1)", fontFamily: "Poppins" }}
      >
        Nous façonnons l'art de l'aménagement de demain.
      </h2>

      {/* ── TWO-COLUMN LAYOUT ── */}
      <div className="flex flex-col md:flex-row md:gap-10 md:items-start">

        {/* LEFT COLUMN — text */}
        <div className="w-full md:w-[400px] mb-6 md:mb-0 md:ml-10 p-10 "
          style={{
            backgroundColor: "rgba(255, 255, 255, 1)",
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.1)",
            border: 'none',
            borderRadius: "4px"
          }}
        >
          <p
            className="text-[17px] md:text-[18px] uppercase  "
            style={{ color: "#050F27", fontFamily: "Poppins" }}
          >
            DÉCOUVREZ SOGEREV
          </p>
          <p
            className="text-[17px] md:text-[20px] font-[800] mb-4"
            style={{ color: "#050F27", fontFamily: "Poppins" }}
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


        {/* RIGHT COLUMN — video + play button */}
        <div className="w-full md:w-[64%] relative">
          <video
            ref={videoRef}
            src="/videos/test.mp4"
            className="w-full h-[220px] md:h-[596px] object-cover"
            poster={ASSETS.buildingImg}
            playsInline
          />



          {/* Play/Pause button overlay — hides when playing */}
          {!playing && (
            <button
              onClick={handlePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12  flex items-center justify-center hover:scale-105 transition-transform z-10"
              aria-label="Play video"
            >
              <Play />
            </button>
          )}

          {/* Pause button when video is playing */}
          {playing && (
            <button
              onClick={handlePlay}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white/70 rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform z-10"
              aria-label="Pause video"
            >
              <Pause
                size={18}
                fill="black"
                style={{ color: "black" }}
              />
            </button>
          )}
        </div>
      </div>


      {/* ── BOTTOM-LEFT CUBE (desktop only) ── */}
      <div className="relative mb-25">
        <div className="hidden md:block absolute bottom-[-110px] left-[-60px] w-[190px] overflow-hidden">
          <img
            src={ASSETS.cubeImg2}
            alt=""
            className="w-full h-auto"
            style={{
              mixBlendMode: "multiply",
            }}
          />
        </div>
      </div>


      {/* ── VIDEO SLIDER SECTION ── */}

      {/* ✅ DESKTOP VERSION — untouched */}
      <div
        className="hidden md:block relative w-screen left-1/2 -translate-x-1/2 mt-10 md:mt-16 overflow-hidden p-7"
        style={{
          backgroundImage: `url(${ASSETS.IMAGES.aboutBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "520px",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0" />

        {/* CONTENT ROW */}
        <div className="relative z-10 flex flex-row items-center justify-center h-full py-12 md:py-16 px-16 md:px-20 gap-8 md:gap-12">

          {/* LEFT ARROW */}
          <button
            onClick={sliderPrev}
            className="absolute left-4 md:left-32 top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Previous"
          >
            <ArrowLeft />
          </button>

          {/* WHITE FRAME + SLIDING TRACK */}
          <div
            className="flex-shrink-0 p-6 pr-0 bg-white relative"
            style={{ boxShadow: "0 0 0 1px rgba(255,255,255,0.2)" }}
          >
            {/* TRACK VIEWPORT — clips overflow, shows 1 full + 0.5 peeking */}
            {/* ✅ viewport = card(270) + gap(35) + peek(255) = 560px exact, no gap */}
            <div
              className="relative overflow-hidden"
              style={{ width: "450px" }}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* TRACK — slides by exactly one card width + gap per click */}
              <div
                ref={trackRef}
                className="flex flex-row"
                style={{
                  transform: `translateX(-${sliderIndex * 305}px)`,
                  transition: "transform 0.4s ease",
                  gap: "35px",
                }}
              >
                {/* ✅ use SLIDER_CARDS not SLIDER_CARDS_LOOP */}
                {/* → last card shows empty space on right, not first card peeking */}
                {SLIDER_CARDS.map((card, i) => (
                  <div
                    key={i}
                    className="relative flex-shrink-0"
                    style={{
                      width: "270px",
                      height: "435px",
                    }}
                  >
                    <video
                      src={card.src}
                      poster={card.poster}
                      className="w-full h-full object-cover"
                      playsInline
                    />
                    {/* Play button only on active card */}
                    {i === sliderIndex && (
                      <button
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-105 transition-transform"
                        aria-label="Play"
                      >
                        <Play />
                      </button>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* VERTICAL DIVIDER LINE — static on right edge of white box, bleeds out top and bottom */}
            <div
              className="absolute pointer-events-none"
              style={{
                top: "-23px",
                bottom: "0px",
                right: "-1px",
                width: "2px",
                backgroundColor: "white",
                zIndex: 10,
                height: "528px"
              }}
            />
          </div>

          {/* TEXT BLOCK */}
          <div className="flex flex-col justify-center flex-1 min-w-0 max-w-[430px]">
            <h3
              className="text-white font-[700] text-[20px] md:text-[43px] leading-tight mb-4 uppercase whitespace-pre-line"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {SLIDER_CARDS[sliderIndex].title}
            </h3>
            <p
              className="text-white font-[400] text-[14px] md:text-[22px] mb-4 leading-snug"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {SLIDER_CARDS[sliderIndex].subtitle}
            </p>
            <p
              className="text-gray-200 text-[12px] md:text-[18px] leading-relaxed text-justify"
              style={{ fontFamily: "var(--font-poppins)", fontWeight: 400, lineHeight: "1.4" }}
            >
              {SLIDER_CARDS[sliderIndex].description}
            </p>
          </div>

          {/* RIGHT ARROW */}
          <button
            onClick={sliderNext}
            className="absolute right-4 md:right-28 top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Next"
          >
            <ArrowRight />
          </button>

        </div>
      </div>

      {/* ✅ MOBILE VERSION — sliding track, one card at a time */}
      <div className="block md:hidden mt-10 overflow-hidden">

        {/* SLIDING TRACK — all cards in a row, slides by 100% per click */}
        <div
          className="flex flex-row"
          style={{
            transform: `translateX(-${sliderIndex * 100}%)`,
            transition: "transform 0.4s ease",
          }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {SLIDER_CARDS.map((card, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full px-5"
            >
              {/* CARD */}
              <div className="relative w-full">
                <video
                  src={card.src}
                  poster={card.poster}
                  className="w-full h-[280px] object-cover"
                  playsInline
                />
                {/* Play button only on active card */}
                {i === sliderIndex && (
                  <button
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 hover:scale-105 transition-transform"
                    aria-label="Play"
                  >
                    <Play />
                  </button>
                )}
              </div>

              {/* CONTENT BELOW CARD */}
              <div className="pt-5 pb-8">
                <h3
                  className=" text-[22px] font-[700] leading-tight mb-3 uppercase whitespace-pre-line"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--color-navy)" }}
                >
                  {card.title}
                </h3>
                <p
                  className="text-[15px] font-[500] mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-poppins)", color: "var(--color-navy)" }}
                >
                  {card.subtitle}
                </p>
                <p
                  className="test-grey-200 text-[13px] leading-relaxed text-justify"
                  style={{ fontFamily: "var(--font-poppins)", fontWeight: 400 }}
                >
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS — mobile navigation */}
        <div className="flex items-center justify-center gap-2 pb-6">
          {SLIDER_CARDS.map((_, i) => (
            <button
              key={i}
              onClick={() => setSliderIndex(i)}
              style={{
                width: i === sliderIndex ? "24px" : "10px",
                height: "4px",
                backgroundColor: i === sliderIndex ? "black" : "#CCCCCC",
                border: "none",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
