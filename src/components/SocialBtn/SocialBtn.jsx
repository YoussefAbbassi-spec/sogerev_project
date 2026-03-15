const SocialBtn = ({ children, href = "#" }) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className="w-9 h-9 rounded-full border-2 border-white/60 flex items-center justify-center text-white hover:border-white transition-colors duration-200"
    style={{
      backgroundColor: "#ffffff",       /* ← fond blanc solide */
      color: "var(--color-primary)",     /* ← icône orange */
      borderRadius: "0px",              /* ← coins légèrement arrondis */
    }}
  >
    {children}
  </a>
);

export default SocialBtn;
