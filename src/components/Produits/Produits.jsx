import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ASSETS } from "../../assets";
import { ArrowLeft, ArrowRight } from "../Icons/Icons";
import { CATEGORIES } from "../../constants/Hero_data";

const Produits = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const [sliderIndex, setSliderIndex] = useState(0);
    const containerRef = useRef(null);
    const touchStartX = useRef(null);
    const [cardWidth, setCardWidth] = useState(0);
    const isDragging = useRef(false); //  track drag state
    const mobileContainerRef = useRef(null); //  separate ref for mobile container

    const CARD_GAP = 16;

    useEffect(() => {
        const measure = () => {
            if (containerRef.current) {
                const w = containerRef.current.offsetWidth;
                setCardWidth(Math.floor((w - CARD_GAP * 3) / 4));
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const STEP = cardWidth + CARD_GAP;
    const currentProducts = CATEGORIES[activeCategory].products;
    const maxIndex = currentProducts.length - 4;
    const maxIndexMobile = currentProducts.length - 2;

    // ✅ arrows use transition — disable drag flag
    const prev = () => {
        isDragging.current = false;
        setSliderIndex((i) => Math.max(0, Math.round(i) - 1));
    };
    const next = () => {
        isDragging.current = false;
        setSliderIndex((i) => Math.min(maxIndex, Math.round(i) + 1));
    };

    // reset slider to 0 when category changes
    const handleCategoryChange = (index) => {
        setActiveCategory(index);
        setSliderIndex(0);
    };

    // touch handlers for mobile swipe
    const touchCurrentX = useRef(null);
    const touchBaseIndex = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
        touchCurrentX.current = e.touches[0].clientX;
        touchBaseIndex.current = Math.round(sliderIndex);
    };

    const handleTouchMove = (e) => {
        if (touchStartX.current === null) return;
        if (!mobileContainerRef.current) return;
        const containerWidth = mobileContainerRef.current.offsetWidth;
        const cardWidthMobile = (containerWidth - CARD_GAP) / 2;
        const diff = touchStartX.current - e.touches[0].clientX;
        const indexDiff = diff / (cardWidthMobile + CARD_GAP);
        // ✅ use maxIndexMobile — stops at correct last card
        const newIndex = Math.max(0, Math.min(maxIndexMobile, touchBaseIndex.current + indexDiff));
        setSliderIndex(newIndex);
    };

    const handleTouchEnd = () => {
        // ✅ snap within mobile bounds
        setSliderIndex((i) => Math.min(maxIndexMobile, Math.max(0, Math.round(i))));
        touchStartX.current = null;
        touchCurrentX.current = null;
    };

    return (
        <section className="mb-15" id="products">

            {/* ═══════════════════════ WHITE TOP AREA ═══════════════════════ */}
            <div className="bg-white px-5 pt-8 pb-4 md:px-16 md:pt-12 md:pb-6 md:pl-23">

                {/* ── TOP LABEL ── */}
                <div className="flex flex-row items-stretch gap-3">
                    {/* Left orange line */}
                    <div className="hidden md:block" style={{
                        width: "2.5px",
                        backgroundColor: "var(--color-primary)",
                        borderRadius: "2px",
                        transform: "translate(-10px,8px)",
                        height: "106px"
                    }} />

                    {/* Label content */}
                    <div>
                        <p className="text-[20px] md:text-[36px] uppercase tracking-tight font-semibold">
                            <span style={{ color: "rgba(19, 74, 135, 1)", fontFamily: "var(--font-poppins)" }}>NOS </span>
                            <span style={{ color: "var(--color-primary)", fontFamily: "var(--font-poppins)" }}>PRODUITS</span>
                        </p>
                        <p className="text-[15px] md:text-[32px] uppercase tracking-wider font-extralight"
                            style={{ color: "var(--color-text-gray)", fontFamily: "var(--font-poppins)" }}>
                            NOS RÉALISATIONS SUR MESURE
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

                {/* ── DESCRIPTION ── */}
                <p
                    className="text-[12px] md:text-[19px] mt-6 mb-0 max-w-[800px] font-normal"
                    style={{
                        color: "var(--color-text-gray)",
                        fontFamily: "var(--font-poppins)",
                    }}
                >
                    Nous concevons et réalisons vos projets en marbre, granit et pierre
                    naturelle.
                </p>
            </div>

            {/* ═══════════════════════ DARK BACKGROUND SECTION ═══════════════════════ */}
            <div
                className="relative md:py-9 md:px-9"
                style={{
                    backgroundImage: `url(${ASSETS.IMAGES.produit_bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 py-8 px-4 md:py-10 md:px-16">

                    {/* ── CATEGORY TABS ── */}
                    <div className="flex flex-row flex-wrap gap-2 mb-8 justify-center mb-15">
                        {CATEGORIES.map((cat, index) => (
                            <button
                                key={cat.id}
                                onClick={() => handleCategoryChange(index)}
                                className="flex items-center gap-1.5 cursor-pointer transition-colors duration-200"
                                style={{
                                    padding: "9px 16px",
                                    fontWeight: index === activeCategory ? "bold" : 500,
                                    fontFamily: "var(--font-poppins)",
                                    color: index === activeCategory ? "white" : "black",
                                    backgroundColor: index === activeCategory ? "var(--color-primary)" : "#FFFFFFE5",
                                    border: index === activeCategory ? "1px solid var(--color-primary)" : "1px solid white",
                                }}
                                onMouseEnter={(e) => {
                                    if (index !== activeCategory) {
                                        e.currentTarget.style.backgroundColor = "#dadadaff";
                                        e.currentTarget.style.border = "1px solid #dadadaff";
                                    }
                                }}
                                onMouseLeave={(e) => {
                                    if (index !== activeCategory) {
                                        e.currentTarget.style.backgroundColor = "#FFFFFFE5";
                                        e.currentTarget.style.border = "1px solid white";
                                    }
                                }}
                            >
                                <span className="text-[12px] md:text-[13px]">{cat.label}</span>
                                {index === activeCategory && <ChevronDown size={14} />}
                            </button>
                        ))}
                    </div>

                    {/* ── SLIDER AREA ── */}
                    <div className="relative flex items-center">

                        {/* LEFT ARROW — desktop only */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity hidden md:block cursor-pointer"
                            aria-label="Previous product"
                        >
                            <ArrowLeft />
                        </button>

                        {/* RIGHT ARROW — desktop only */}
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 hover:opacity-80 transition-opacity hidden md:block cursor-pointer"
                            aria-label="Next product"
                        >
                            <ArrowRight />
                        </button>

                        {/* OVERFLOW CONTAINER — DESKTOP */}
                        <div
                            ref={containerRef}
                            className="overflow-hidden w-full mx-0 md:mx-16 hidden md:block"
                        >
                            {/* TRACK — DESKTOP */}
                            <div
                                className="flex flex-row"
                                style={{
                                    gap: `${CARD_GAP}px`,
                                    transform: `translateX(-${sliderIndex * STEP}px)`,
                                    // ✅ instant when dragging, fast smooth when clicking arrows
                                    transition: isDragging.current ? "none" : "transform 0.15s ease",
                                }}
                            >
                                {/* ── PRODUCT CARDS — DESKTOP ── */}
                                {currentProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex-shrink-0 bg-white overflow-hidden p-2.5"
                                        style={{
                                            width: cardWidth > 0 ? `${cardWidth}px` : "25%",
                                        }}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full object-cover mb-2"
                                            style={{ height: "210px" }}
                                        />
                                        <p
                                            className="text-center leading-tight"
                                            style={{
                                                fontSize: "20px",
                                                fontWeight: 500,
                                                color: "black",
                                                fontFamily: "var(--font-poppins)",
                                                padding: "12px 20px",
                                            }}
                                        >
                                            {product.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* OVERFLOW CONTAINER — MOBILE */}
                        <div
                            ref={mobileContainerRef}
                            className="overflow-hidden w-full block md:hidden"
                            onTouchStart={handleTouchStart}
                            onTouchMove={handleTouchMove}
                            onTouchEnd={handleTouchEnd}
                        >
                            {/* TRACK — MOBILE */}
                            <div
                                className="flex flex-row"
                                style={{
                                    gap: `${CARD_GAP}px`,
                                    transform: `translateX(-${sliderIndex * (50 + CARD_GAP / 2)}%)`,
                                    transition: touchCurrentX.current !== null ? "none" : "transform 0.3s ease",
                                }}
                            >
                                {/* ── PRODUCT CARDS — MOBILE ── */}
                                {currentProducts.map((product) => (
                                    <div
                                        key={product.id}
                                        className="flex-shrink-0 bg-white overflow-hidden"
                                        style={{ width: "calc(50% - 8px)" }}
                                    >
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full object-cover"
                                            style={{ height: "140px" }}
                                        />
                                        <p
                                            className="text-center leading-tight"
                                            style={{
                                                fontSize: "16px",
                                                fontWeight: 500,
                                                color: "black",
                                                fontFamily: "var(--font-poppins)",
                                                padding: "10px 10px",
                                            }}
                                        >
                                            {product.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* ── ORANGE SCROLLBAR — DESKTOP ONLY ── */}
                    <div className="hidden md:flex items-center justify-center gap-3 mt-15">

                        {/* PROGRESS TRACK WRAPPER */}
                        <div
                            className="relative cursor-pointer"
                            style={{ width: "90.5%", height: "15px" }}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                isDragging.current = true; // ✅ disable transition while dragging
                                const rect = e.currentTarget.getBoundingClientRect();
                                const totalScroll = maxIndex * STEP;

                                const applyScroll = (clientX) => {
                                    const clickX = clientX - rect.left;
                                    const percent = Math.min(1, Math.max(0, clickX / rect.width));
                                    const pixelOffset = percent * totalScroll;
                                    setSliderIndex(pixelOffset / STEP);
                                };

                                applyScroll(e.clientX);

                                const onMouseMove = (moveEvent) => {
                                    applyScroll(moveEvent.clientX);
                                };

                                const onMouseUp = () => {
                                    isDragging.current = false; // ✅ re-enable transition after release
                                    window.removeEventListener("mousemove", onMouseMove);
                                    window.removeEventListener("mouseup", onMouseUp);
                                };

                                window.addEventListener("mousemove", onMouseMove);
                                window.addEventListener("mouseup", onMouseUp);
                            }}
                        >
                            {/* GRAY FULL TRACK */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 w-full rounded-full pointer-events-none"
                                style={{ height: "2px", backgroundColor: "#edededb0" }}
                            />

                            {/* ORANGE THUMB — fixed width, moves via left position */}
                            <div
                                className="absolute top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                                style={{
                                    height: "3.5px",
                                    width: "60px",
                                    left: `calc(${(sliderIndex / Math.max(1, maxIndex)) * 100}% - ${(sliderIndex / Math.max(1, maxIndex)) * 60}px)`,
                                    backgroundColor: "var(--color-primary)",
                                    transition: "none",
                                }}
                            />
                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Produits;