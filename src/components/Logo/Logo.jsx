import { ASSETS } from "../assets";

// The logo PNG has a white version — it works on both orange (desktop topbar) and orange (mobile nav)
const Logo = () => (
  <img
    src={ASSETS.LOGO}
    alt="Sogerev Inter"
    className="h-10 w-auto object-contain"
  />
);

export default Logo;
