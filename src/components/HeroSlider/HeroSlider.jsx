import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  MoveRight,
} from "lucide-react";
import SocialBtn from "../SocialBtn/SocialBtn";
import { TikTokIcon, WhatsAppIcon, Facebook, Instagram, Phone, Youtube, Line } from "../Icons/Icons";
import { SLIDES, SOCIAL_LINKS, HERO_CTAS } from '../../constants/Hero_data';

// Map social id to its icon component
const SOCIAL_ICONS = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTokIcon,
  youtube: Youtube,
  whatsapp: WhatsAppIcon,
};

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const prev = () =>
    setCurrent((c) => (c === 0 ? SLIDES.length - 1 : c - 1));
  const next = () =>
    setCurrent((c) => (c === SLIDES.length - 1 ? 0 : c + 1));

  const slide = SLIDES[current];

  return (
    <div>
      <section className="max-w-[1536px] mx-auto hidden lg:block relative w-full lg:h-[830px] overflow-hidden " style={{ marginBottom: '30px' }}>
        {/* BACKGROUND */}
        <div className="absolute inset-0">
          {slide.heroImage ? (
            <img
              src={slide.heroImage}
              alt=""
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
          )}
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* SLIDE CONTENT */}
        <div className="relative z-10 h-full flex flex-col justify-end pb-10 lg:px-16">
          <div className="lg:max-w-[750px]">
            <h1
              className="text-white  lg:text-[52px]  leading-tight mb-4 uppercase"
              style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400, }}
            >
              {slide.heroTitle}
            </h1>
            <p className="text-gray-300 lg:text-base mb-6">
              {slide.heroSubTitle}
            </p>

            <p
              className="text-white font-bold text-sm tracking-widest mb-3"
              style={{ fontFamily: "Roboto, sans-serif", fontWeight: 400 }}
            >
              SUIVEZ-NOUS :
            </p>

            <div className="flex items-center gap-2 lg:mb-18">
              <a
                className="w-9 h-9 flex items-center justify-center flex-shrink-0"
                style={{
                  backgroundColor: "#ffffff",
                  color: "var(--color-primary)",
                  borderRadius: "0px",
                  border: "none",
                }}
                href="tel:+212660343555"
              >
                <Phone size={20} />
              </a>

              <Line width={197} height={9} />

              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.id];
                return (
                  <SocialBtn key={social.id} href={social.href}>
                    <Icon size={20} />
                  </SocialBtn>
                );
              })}
            </div>
          </div>
        </div>

        {/* SIDE CTAs */}
        <div className="hidden lg:flex absolute right-8 bottom-16 flex-col gap-3 z-10 lg:mb-17 lg:mr-10">
          {HERO_CTAS.map((cta) => (

            <a
              key={cta.id}
              href={cta.href}
              className="flex min-w-[220px] items-center gap-3 bg-white text-gray-800 px-5 py-3 rounded text-sm font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              <span
                className="w-2 h-2 rounded-full flex-shrink-0"
                style={{ backgroundColor: "gray" }}
              />
              <span className="flex-1" style={{ color: 'gray' }}>{cta.label}</span>
              <MoveRight size={16} style={{ color: "var(--color-primary)" }} />
            </a>
          ))}
        </div >

        {/* ARROWS */}
        < button
          onClick={prev}
          className="absolute left-8 lg:top-1/7 -translate-y-1/2 z-10 flex items-center justify-center text-white transition-all hover:opacity-70"
          aria-label="Slide précédent"
        >
          <ChevronLeft strokeWidth={0.7} className="lg:w-[110px] lg:h-[110px]" />
        </button >

        <button
          onClick={next}
          className="absolute right-8 lg:top-1/6 -translate-y-1/2 z-10 flex items-center justify-center text-white transition-all hover:opacity-70"
          aria-label="Slide suivant"
        >
          <ChevronRight strokeWidth={0.7} className="lg:w-[110px] lg:h-[110px]" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center">
          <svg
            width="800px"
            height="45px"
            viewBox="0 0 1057 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
          >
            <path
              d="M0 49C109.445 48.9999 81.8591 8.77383e-05 167.017 2.65388e-10L889.983 0C975.141 3.05176e-05 947.555 48.9999 1057 49L0 49Z"
              fill="#ffffffff"
            />
            <rect x="458" y="28" width="19.2542" height="7" fill={current === 0 ? "#1D1D1D" : "#CCCCCC"} style={{ cursor: 'pointer' }} onClick={() => setCurrent(0)} />
            <rect x="483.873" y="28" width="19.2542" height="7" fill={current === 1 ? "#1D1D1D" : "#CCCCCC"} style={{ cursor: 'pointer' }} onClick={() => setCurrent(1)} />
            <rect x="509.746" y="28" width="38.5085" height="7" fill={current === 2 ? "#1D1D1D" : "#CCCCCC"} style={{ cursor: 'pointer' }} onClick={() => setCurrent(2)} />
            <rect x="554.873" y="28" width="19.2542" height="7" fill={current === 3 ? "#1D1D1D" : "#CCCCCC"} style={{ cursor: 'pointer' }} onClick={() => setCurrent(3)} />
            <rect x="580.746" y="28" width="19.2542" height="7" fill={current === 4 ? "#1D1D1D" : "#CCCCCC"} style={{ cursor: 'pointer' }} onClick={() => setCurrent(4)} />
          </svg>
        </div>

      </section >




      {/* ── MOBILE VERSION ── */}
      < section className="block lg:hidden relative w-full h-[400px] overflow-hidden  " >

        {/* BACKGROUND */}
        < div className="absolute inset-0" >
          {
            slide.heroImage ? (
              <img
                src={slide.heroImage}
                alt=""
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700" />
            )
          }
          < div className="absolute inset-0 bg-black/55" />
        </div >

        {/* SLIDE CONTENT */}
        < div className="relative z-10 h-full flex flex-col justify-end pb-10 px-5" >
          <div className="max-w-[100%]">
            <h1
              className="text-white text-[22px] leading-tight mb-3 uppercase"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              {slide.heroTitle}
            </h1>
            <p className="text-white text-[10px] mb-4">
              {slide.heroSubTitle}
            </p>

            <p
              className="text-white font-[800] text-[15px] tracking-widest mb-2"
              style={{ fontFamily: "Roboto, sans-serif" }}
            >
              SUIVEZ-NOUS :
            </p>

            {/* social Icons */}
            <div className="flex items-center gap-1 mb-2">
              <a
                className="w-8 h-8 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#ffffff", color: "var(--color-primary)", border: "none" }}
                href="tel:+212660343555"
              >
                <Phone size={16} />
              </a>

              <Line width={100} height={7} />

              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.id];
                return (
                  <SocialBtn key={social.id} href={social.href}>
                    <Icon size={16} />
                  </SocialBtn>
                );
              })}
            </div>
          </div>
        </div >

        {/* ARROWS */}
        < button
          onClick={prev}
          className="absolute left-3 top-10 -translate-y-1/2 z-10 flex items-center justify-center text-white transition-all hover:opacity-70"
          aria-label="Slide précédent"
        >
          <ChevronLeft strokeWidth={0.7} className="w-10 h-10" />
        </button >

        <button
          onClick={next}
          className="absolute right-3 top-10 -translate-y-1/2 z-10 flex items-center justify-center text-white transition-all hover:opacity-70"
          aria-label="Slide suivant"
        >
          <ChevronRight strokeWidth={0.7} className="w-10 h-10" />
        </button>

        {/* DOTS — same SVG shape scaled for mobile */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10 w-full flex justify-center">
          <svg
            width="100%"
            height="26px"
            viewBox="0 0 1057 49"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"

          >
            <path
              d="M0 49C109.445 48.9999 81.8591 8.77383e-05 167.017 2.65388e-10L889.983 0C975.141 3.05176e-05 947.555 48.9999 1057 49L0 49Z"
              fill="#ffffffff"
            />
          </svg>
          {/* HTML dots — completely independent from SVG scaling */}
          <div className="absolute bottom-3 flex items-center gap-1">
            {[0, 1, 2, 3, 4].map((i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  width: i === current ? '20px' : '12px', // active dot is wider
                  height: '4px',
                  backgroundColor: current === i ? '#1D1D1D' : '#CCCCCC',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

      </section >
    </div >
  );
};

export default HeroSlider;

