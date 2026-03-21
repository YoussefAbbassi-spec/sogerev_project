import { useState } from "react";
import { ASSETS } from "../../assets";
import { CONTACT_INFO, SOCIAL_LINKS, CONTACT_ICONS, FORM_FIELDS, SOCIAL_ICONS } from "../../constants/Hero_data";
import { Phone, Line, Up, LogoSVG, LogoSVG_M } from "../Icons/Icons";

/* ═══════════════════════ COMPONENT ═══════════════════════ */
const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const PhoneIcon = CONTACT_ICONS.phone;
  const EmailIcon = CONTACT_ICONS.email;
  const AddressIcon = CONTACT_ICONS.address;

  return (
    <section>

      {/* ═══════════════════════ PART 1 — DESKTOP ═══════════════════════ */}
      <div className="hidden md:block relative pl-26 pt-16 pb-0">

        {/* ── A. LARGE HEADING ── */}
        <h2
          className="text-[88px] mb-30 leading-tight tracking-tight pr-20"
          style={{ fontWeight: 500, color: "#050F27", fontFamily: "var(--font-poppins)" }}
        >
          Nous élevons l'aménagement au rang d'art.
        </h2>

        {/* ── CUBE DECORATION ── */}
        <img
          src={ASSETS.IMAGES.cubeImg4}
          alt=""
          className="absolute"
          style={{ left: "40px", bottom: "240px", width: "230px", mixBlendMode: "multiply", zIndex: 20 }}
        />

        {/* ── WHITE CARD ── */}
        <div
          className="bg-white relative z-10 flex flex-row mx-auto w-[990px] h-[390px] py-8"
          style={{ marginBottom: "-200px", boxShadow: "0 4px 40px rgba(0,0,0,0.10)" }}
        >
          {/* CARD LEFT — CONTACT FORM */}
          <div className="w-[40%] pl-20">
            <h3 className="mb-6 text-[25px]" style={{ fontWeight: 600, fontFamily: "var(--font-poppins)" }}>
              Contactez-Nous
            </h3>
            {FORM_FIELDS.map((field) => (
              <input
                key={field.key}
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key]}
                onChange={(e) => setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))}
                onFocus={() => setFocusedField(field.key)}
                onBlur={() => setFocusedField(null)}
                className="w-[75%] bg-transparent outline-none mb-6"
                style={{
                  border: "none",
                  borderBottomWidth: "1px",
                  borderBottomStyle: "solid",
                  borderBottomColor: focusedField === field.key ? "#000000" : "#6C6C6C",
                  padding: "1px 0",
                  fontSize: "13px",
                  fontWeight: 600,
                  color: focusedField === field.key ? "#000000" : "#6C6C6C",
                  fontFamily: "var(--font-poppins)",
                  transition: "border-color 0.2s ease",
                }}
              />
            ))}
            <button
              className="w-[75%] mt-4 uppercase tracking-widest cursor-pointer hover:opacity-90 transition-opacity"
              style={{ backgroundColor: "black", color: "white", fontSize: "18px", fontWeight: 600, fontFamily: "var(--font-poppins)", padding: "6px 0", border: "none" }}
            >
              ENVOYER
            </button>
          </div>

          {/* VERTICAL DIVIDER */}
          <div style={{ width: "1px", backgroundColor: "#BEBEBE", margin: "17px 0", flexShrink: 0, transform: "translatex(-30px)" }} />

          {/* CARD RIGHT — CONTACT INFO */}
          <div className="w-[60%] px-8 pt-8">
            <h3 className="uppercase mb-6 text-[25px]" style={{ fontWeight: 600, fontFamily: "var(--font-poppins)" }}>
              POUR NOUS JOINDRE
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-8">
              <div className="flex items-center gap-2">
                <div style={{ width: "47px", height: "47px", flexShrink: 0, overflow: "hidden" }}>
                  <div style={{ transform: "scale(0.35)", transformOrigin: "top left", width: "132px", height: "132px" }}><PhoneIcon /></div>
                </div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)", marginBottom: "2px" }}>Numéro de téléphone</p>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "#808080", fontFamily: "var(--font-poppins)" }}>(+212) 6 60 34 35 55</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <div style={{ width: "47px", height: "47px", flexShrink: 0, overflow: "hidden" }}>
                  <div style={{ transform: "scale(0.38)", transformOrigin: "top left", width: "122px", height: "122px" }}><EmailIcon /></div>
                </div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)", marginBottom: "2px" }}>E-mail ici</p>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "#808080", fontFamily: "var(--font-poppins)" }}>contact@sogerev.com</p>
                </div>
              </div>
              <div className="flex items-center gap-2 col-span-2">
                <div style={{ width: "47px", height: "47px", flexShrink: 0, overflow: "hidden" }}>
                  <div style={{ transform: "scale(0.38)", transformOrigin: "top left", width: "122px", height: "122px" }}><AddressIcon /></div>
                </div>
                <div>
                  <p style={{ fontSize: "16px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)", marginBottom: "2px" }}>Adresse</p>
                  <p style={{ fontSize: "14px", fontWeight: 400, color: "#808080", fontFamily: "var(--font-poppins)" }}>km 9 Route Moulay Thami, Casablanca 20250</p>
                </div>
              </div>
            </div>
            <p className="uppercase" style={{ fontSize: "18px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)" }}>SUIVEZ-NOUS :</p>
            <div className="flex flex-row items-center gap-1 w-[420px]">
              <a href="tel:+212660343555" style={{ width: "36px", height: "36px", border: "1px solid var(--color-primary)", backgroundColor: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Phone size={16} color="white" />
              </a>
              <Line width={115} height={68} color="var(--color-primary)" />
              {SOCIAL_LINKS.map((link) => {
                const IconComp = SOCIAL_ICONS[link.id];
                if (!IconComp) return null;
                return (
                  <a key={link.id} href={link.href} style={{ width: "36px", height: "36px", backgroundColor: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <IconComp size={19} color="white" color2="var(--color-primary)" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* ═══════════════════════ PART 1 — MOBILE ═══════════════════════ */}
      <div className="block md:hidden px-5 pt-10 pb-0 bg-white">

        {/* HEADING */}
        <h2
          className="text-[32px] leading-tight tracking-tight mb-8"
          style={{ fontWeight: 500, color: "#050F27", fontFamily: "var(--font-poppins)" }}
        >
          Nous élevons l'aménagement au rang d'art.
        </h2>

        {/* CONTACT FORM */}
        <div className="mb-8">
          <h3 className="mb-5 text-[20px]" style={{ fontWeight: 600, fontFamily: "var(--font-poppins)" }}>
            Contactez-Nous
          </h3>
          {FORM_FIELDS.map((field) => (
            <input
              key={field.key}
              type={field.type}
              placeholder={field.placeholder}
              value={formData[field.key]}
              onChange={(e) => setFormData((prev) => ({ ...prev, [field.key]: e.target.value }))}
              onFocus={() => setFocusedField(field.key)}
              onBlur={() => setFocusedField(null)}
              className="w-full bg-transparent outline-none mb-5"
              style={{
                border: "none",
                borderBottomWidth: "1px",
                borderBottomStyle: "solid",
                borderBottomColor: focusedField === field.key ? "#000000" : "#6C6C6C",
                padding: "6px 0",
                fontSize: "13px",
                fontWeight: 600,
                color: focusedField === field.key ? "#000000" : "#6C6C6C",
                fontFamily: "var(--font-poppins)",
                transition: "border-color 0.2s ease",
              }}
            />
          ))}
          <button
            className="w-full mt-2 uppercase tracking-widest cursor-pointer"
            style={{ backgroundColor: "black", color: "white", fontSize: "14px", fontWeight: 600, fontFamily: "var(--font-poppins)", padding: "10px 0", border: "none" }}
          >
            ENVOYER
          </button>
        </div>

        {/* CONTACT INFO */}
        <div className="mb-8">
          <h3 className="uppercase mb-5 text-[18px]" style={{ fontWeight: 600, fontFamily: "var(--font-poppins)" }}>
            POUR NOUS JOINDRE
          </h3>
          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div style={{ width: "40px", height: "40px", flexShrink: 0, overflow: "hidden" }}>
                <div style={{ transform: "scale(0.33)", transformOrigin: "top left", width: "122px", height: "122px" }}><PhoneIcon /></div>
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)", marginBottom: "2px" }}>Numéro de téléphone</p>
                <p style={{ fontSize: "12px", color: "#808080", fontFamily: "var(--font-poppins)" }}>(+212) 6 60 34 35 55</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div style={{ width: "40px", height: "40px", flexShrink: 0, overflow: "hidden" }}>
                <div style={{ transform: "scale(0.33)", transformOrigin: "top left", width: "122px", height: "122px" }}><EmailIcon /></div>
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)", marginBottom: "2px" }}>E-mail ici</p>
                <p style={{ fontSize: "12px", color: "#808080", fontFamily: "var(--font-poppins)" }}>contact@sogerev.com</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div style={{ width: "40px", height: "40px", flexShrink: 0, overflow: "hidden" }}>
                <div style={{ transform: "scale(0.33)", transformOrigin: "top left", width: "122px", height: "122px" }}><AddressIcon /></div>
              </div>
              <div>
                <p style={{ fontSize: "13px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)", marginBottom: "2px" }}>Adresse</p>
                <p style={{ fontSize: "12px", color: "#808080", fontFamily: "var(--font-poppins)" }}>km 9 Route Moulay Thami, Casablanca 20250</p>
              </div>
            </div>
          </div>

          {/* SOCIAL ROW */}
          <p className="uppercase mb-3" style={{ fontSize: "13px", fontWeight: 500, color: "black", fontFamily: "var(--font-poppins)" }}>
            SUIVEZ-NOUS :
          </p>
          <div className="flex flex-row items-center gap-1">
            <a href="tel:+212660343555" style={{ width: "34px", height: "34px", border: "1px solid var(--color-primary)", backgroundColor: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <Phone size={14} color="white" />
            </a>
            <Line width={80} height={9} color="var(--color-primary)" />
            {SOCIAL_LINKS.map((link) => {
              const IconComp = SOCIAL_ICONS[link.id];
              if (!IconComp) return null;
              return (
                <a key={link.id} href={link.href} style={{ width: "34px", height: "34px", backgroundColor: "var(--color-primary)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconComp size={16} color="white" color2="var(--color-primary)" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* ═══════════════════════ PART 2 — DESKTOP ═══════════════════════ */}
      <div
        className="hidden md:block relative px-31"
        style={{ backgroundColor: "#0A0A0A", paddingTop: "250px", paddingBottom: "48px" }}
      >
        <div className="flex flex-col">
          <h2
            className="text-[45px] mb-8 leading-tight"
            style={{ fontWeight: 500, color: "white", fontFamily: "var(--font-poppins)", maxWidth: "500px" }}
          >
            Vous avez un projet ?{"\n"}
            Mettons-le en œuvre ensemble !
          </h2>

          {/* ═══════════════════════ UP BUTTON ═══════════════════════ */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="absolute cursor-pointer hover:opacity-80 transition-opacity z-50"
            style={{ top: "260px", right: "130px", background: "none", border: "none", padding: 0 }}
            aria-label="Back to top"
          >
            <div style={{ width: "70px" }}><Up /></div>
          </button>

          {/* CTA BUTTONS */}
          <div className="flex flex-row gap-3">
            <button
              className="uppercase cursor-pointer"
              style={{ border: "1px solid white", backgroundColor: "transparent", color: "white", padding: "8px 16px", fontSize: "15px", fontFamily: "var(--font-poppins)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "white"; }}
              onClick={() => {
                document.getElementById("catalogues").scrollIntoView({ behavior: "smooth" });
              }}
            >
              DÉCOUVREZ NOS CATALOGUES
            </button>
            <button
              className="uppercase tracking-widest cursor-pointer"
              style={{ border: "1px solid white", backgroundColor: "transparent", color: "white", padding: "8px 16px", fontSize: "15px", fontFamily: "var(--font-poppins)", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black"; }}
              onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "white"; }}

            >
              APPELEZ-NOUS
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════════════ PART 2 — MOBILE ═══════════════════════ */}
      <div
        className="block md:hidden px-5 py-10"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        <h2
          className="text-[26px] mb-6 leading-tight"
          style={{ fontWeight: 500, color: "white", fontFamily: "var(--font-poppins)" }}
        >
          Vous avez un projet ?{"\n"}
          Mettons-le en œuvre ensemble !
        </h2>
        <div className="flex flex-col gap-3">
          <button
            className="uppercase cursor-pointer w-full"
            style={{ border: "1px solid white", backgroundColor: "transparent", color: "white", padding: "10px 16px", fontSize: "12px", fontFamily: "var(--font-poppins)" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "white"; }}
            onClick={() => {
              document.getElementById("catalogues").scrollIntoView({ behavior: "smooth" });
            }}

          >
            DÉCOUVREZ NOS CATALOGUES
          </button>
          <button
            className="uppercase cursor-pointer w-full"
            style={{ border: "1px solid white", backgroundColor: "transparent", color: "white", padding: "10px 16px", fontSize: "12px", fontFamily: "var(--font-poppins)" }}
            onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "white"; e.currentTarget.style.color = "black"; }}
            onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "transparent"; e.currentTarget.style.color = "white"; }}
          >
            APPELEZ-NOUS
          </button>
        </div>


      </div>

      {/* ═══════════════════════ PART 3 — FOOTER BAR  ═══════════════════════ */}
      <div style={{ backgroundColor: "#0A0A0A" }}>
        <div style={{ width: "85%", height: "1px", backgroundColor: "#ffffffff", margin: "0 auto" }} />
      </div>

      <div
        className="flex flex-row items-center justify-between px-5 md:px-29 py-5 gap-3 hidden md:block relative"
        style={{ backgroundColor: "#0A0A0A" }}
      >
        {/* LOGO */}
        <div style={{ width: "100px" }}>
          <LogoSVG />
        </div>
        {/* COPYRIGHT */}
        <p
          className="absolute   top-11 right-28"
          style={{ fontSize: "15px", color: "rgba(255, 255, 255, 1)", fontFamily: "var(--font-poppins)" }}
        >
          © 2025 Tous les droits sont réservés pour SOFT CACTUS
        </p>
      </div>
      {/* ═══════════════════════ PART 3 — FOOTER BAR (mobile) ═══════════════════════ */}
      <div style={{ backgroundColor: "#0A0A0A" }}>
        <div style={{ width: "85%", height: "1px", backgroundColor: "#ffffffff", margin: "0 auto" }} />
      </div>

      <div
        className="flex flex-row   justify-center items-center px-5 md:px-29 py-5 gap-3 md:hidden mb-5 "
        style={{ backgroundColor: "#0A0A0A" }}
      >
        {/* LOGO */}
        <div style={{ width: "100px" }}>
          <LogoSVG_M />
        </div>
        {/* COPYRIGHT */}
        <p
          className="text-right"
          style={{ fontSize: "8px", color: "rgba(255, 255, 255, 1)", fontFamily: "var(--font-poppins)" }}
        >
          © 2025 Tous les droits sont réservés pour SOFT CACTUS
        </p>
      </div>

    </section>
  );
};

export default Contact;