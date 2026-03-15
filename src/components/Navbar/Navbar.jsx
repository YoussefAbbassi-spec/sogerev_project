import { useState } from "react";
import { Phone0, Email, Address } from "../Icons/Icons";
import { Menu, X, ChevronDown, MoveRight, ChevronRight } from "lucide-react";
import ContactItem from "../ContactItem/ContactItem";
import { ASSETS } from "../../assets";
import { NAV_LINKS, CATALOGUES, CONTACT_INFO } from "../../constants/Hero_data";
import "./Navbar.css";

const CONTACT_ICONS = { phone: Phone0, email: Email, address: Address };

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [catalogOpen, setCatalogOpen] = useState(false);

  const chevronStyle = (open) => ({
    transform: open ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.2s",
  });

  return (
    <header style={{ position: 'relative', zIndex: 9999 }}>

      {/* ── DESKTOP TOP BAR — Tailwind: hidden on mobile, flex on md+ ── */}
      <div className="nb-topbar hidden md:flex">
        <div className="nb-logo-zone">
          <img src={ASSETS.LOGO} alt="Sogerev Inter" className="logo" />
        </div>
        <div className="nb-contacts">
          {CONTACT_INFO.map((item) => (
            <ContactItem key={item.id} Icon={CONTACT_ICONS[item.id]} title={item.label} value={item.value} href={item.href} />
          ))}
        </div>
      </div>

      {/* ── MOBILE TOP BAR — Tailwind: grid on mobile, hidden on md+ ── */}
      <div className="md:hidden bg-white border-b border-gray-100 grid grid-cols-2 gap-2 px-4 py-3" >
        {CONTACT_INFO.map((item, i) => (
          <div key={item.id} className={i === 2 ? "col-span-2" : ""} >
            <ContactItem key={item.id} Icon={CONTACT_ICONS[item.id]} title={item.label} value={item.value} href={item.href} />
          </div>
        ))}
      </div>

      <nav>

        {/* ── Mobile logo bar — Tailwind: flex on mobile, hidden on md+ ── */}
        <div className="nb-mobile-bar flex md:hidden">
          <img src={ASSETS.LOGO} alt="Sogerev Inter" />
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* ── Mobile action buttons — Tailwind: flex on mobile, hidden on md+ ── */}
        <div className="nb-mobile-actions flex md:hidden">
          <button className="nb-mobile-btn" onClick={() => setCatalogOpen(!catalogOpen)}>
            CATALOGUES <ChevronDown size={14} style={chevronStyle(catalogOpen)} />
          </button>
          <a href="#devis" className="nb-mobile-btn">
            DEMANDER UN DEVIS <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile catalogue dropdown */}
        {catalogOpen && (
          <div className="nb-mobile-dropdown md:hidden">
            {CATALOGUES.map((cat) => (
              <a key={cat.id} href={cat.pdf || "#"} download={cat.pdf ? `${cat.label}.pdf` : undefined} target={cat.pdf ? "_blank" : undefined} rel="noreferrer">
                {cat.label} <MoveRight size={14} style={{ color: "#9ca3af" }} />
              </a>
            ))}
          </div>
        )}

        {/* Mobile full menu */}
        {menuOpen && (
          <div className="nb-mobile-menu md:hidden">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </div>
        )}

        {/* ── Desktop nav — Tailwind: hidden on mobile, flex on md+ ── */}
        <div className="nb-nav hidden md:flex">
          <div className="nb-links">
            {NAV_LINKS.map((link) => (
              <a key={link.id} href={link.href} className={`nb-link${link.id === "home" ? " active" : ""}`}>
                <span className="nb-link-text">{link.label}</span>
              </a>
            ))}
          </div>

          <div style={{ display: "flex" }}>
            <div style={{ position: "relative", display: "flex" }}>
              <button className="nb-btn" onClick={() => setCatalogOpen(!catalogOpen)}>
                CATALOGUES <ChevronDown size={15} style={chevronStyle(catalogOpen)} />
              </button>
              {/*Drop down*/}
              {catalogOpen && (
                <div className="nb-dropdown">
                  {CATALOGUES.map((cat) => (
                    <a key={cat.id} href={cat.pdf || "#"} download={cat.pdf ? `${cat.label}.pdf` : undefined} target={cat.pdf ? "_blank" : undefined} rel="noreferrer">
                      {cat.label} <MoveRight size={14} style={{ color: "#9ca3af", marginRight: "8px" }} />
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a href="#devis" className="nb-btn">
              DEMANDER UN DEVIS <ChevronRight size={15} />
            </a>
          </div>
        </div>

      </nav>
    </header >
  );
};

export default Navbar;
