const ContactItem = ({ Icon, title, value, href }) => (
  <div className="flex items-center  gap-2">
    <div
      className="w-9 h-9  flex items-center justify-center flex-shrink-0"
      style={{ borderColor: "var(--color-primary)" }}
    >
      <Icon size={14} style={{ color: "var(--color-primary)" }} />
    </div>
    <div>
      <div className="font-bold md:text-[15px] text-[10px] " style={{ color: "var(--color-navy)" }}>{title}</div>
      <a className="md:text-[12px] text-[9px]" style={{ color: "#808080" }} href={href} >{value}</a>
    </div>
  </div>
);

export default ContactItem;
