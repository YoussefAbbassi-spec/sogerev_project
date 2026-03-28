import { ChevronLeft, ChevronRight, MoveRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { ASSETS } from "../../assets";
import { SERVICES } from "../../constants/Hero_data";

const Services = () => {
    const [current, setCurrent] = useState(0);
    const [cardWidth, setCardWidth] = useState(0);
    const containerRef = useRef(null);
    const touchStartX = useRef(null);

    const CARD_GAP = 20;


    useEffect(() => {
        const measure = () => {
            if (containerRef.current) {
                const containerWidth = containerRef.current.offsetWidth;
                setCardWidth(Math.floor((containerWidth - CARD_GAP * 2) / 2.4));
            }
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    const STEP = cardWidth + CARD_GAP;

    const prev = () => setCurrent((i) => Math.max(0, i - 1));
    const next = () => setCurrent((i) => Math.min(SERVICES.length - 1, i + 1));

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
        if (touchStartX.current === null) return;
        const diff = touchStartX.current - e.changedTouches[0].clientX;
        if (diff > 40) next();
        if (diff < -40) prev();
        touchStartX.current = null;
    };

    return (
        <section id="services" className="max-w-[1536px] mx-auto bg-white px-5 pt-8 pb-10 lg:px-16 lg:pt-12 lg:pb-16 overflow-hidden lg:pl-23">


            {/* ── TOP LABEL ── */}
            <div className="flex flex-row items-stretch gap-3">
                {/* Left orange line */}
                <div class='hidden lg:block' style={{
                    width: "2.5px",
                    backgroundColor: "var(--color-primary)",
                    borderRadius: "2px",
                    transform: "translate(-10px,8px)",
                    height: '91.5px'
                }} />

                {/* Label content */}
                <div>
                    <p className="text-[20px] lg:text-[34px] uppercase tracking-tight font-semibold mb-[-8px]">
                        <span style={{ color: "rgba(19, 74, 135, 1)", fontFamily: "var(--font-poppins)" }}>NOS </span>
                        <span style={{ color: "var(--color-primary)", fontFamily: "var(--font-poppins)" }}>SERVICES</span>
                    </p>
                    <p className="text-[15px] lg:text-[30px] uppercase tracking-wider font-extralight"
                        style={{ color: "var(--color-text-gray)", fontFamily: "var(--font-poppins)" }}>
                        NOS RÉALISATIONS SUR MESURE
                    </p>
                    {/* Orange underline */}
                    <div className="mt-2 hidden lg:block" style={{
                        width: "380px",
                        height: "2.5px",
                        backgroundColor: "var(--color-primary)",
                        transform: "translate(-23px,1px)"
                    }} />
                </div>
            </div>

            {/* ── DESCRIPTION ── */}
            <p
                className="text-[11px] lg:text-[19px]  tracking-wider lg:mt-4 mt-4 mb-10 max-w-[880px]"
                style={{ color: "var(--color-text-gray)", fontFamily: "var(--font-poppins)", fontWeight: 300 }}
            >
                Nous concevons et réalisons vos projets en marbre, granit et pierre
                naturelle. du plan de travail à l'aménagement complet, chaque création
                sur mesure allie esthétisme, qualité et savoir-faire artisanal.
            </p>


            {/* ── IMAGE SLIDER — DESKTOP ── */}
            <div className="hidden lg:block relative">

                {/* FADE OVERLAY — right edge */}
                <div
                    className="absolute top-0 right-0 h-full pointer-events-none z-10"
                    style={{
                        width: "200px",
                        background: "linear-gradient(to right, transparent, white)",
                    }}
                />

                {/* OVERFLOW CONTAINER — ref here to measure real width */}
                <div
                    ref={containerRef}
                    className="overflow-hidden w-full"
                >
                    {/* TRACK — translateX uses dynamic cardWidth so always correct */}
                    <div
                        className="flex flex-row"
                        style={{
                            gap: `${CARD_GAP}px`,
                            transform: `translateX(-${current * STEP}px)`,
                            transition: "transform 0.4s ease",
                        }}
                    >
                        {/* width: `${cardWidth}px`,  */}
                        {SERVICES.map((service) => (
                            <div
                                key={service.id}
                                className="flex-shrink-0"
                                style={{
                                    width: `450px`,
                                    height: "250px",
                                }}

                            >

                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            {/* ── IMAGE SLIDER — MOBILE ── */}
            <div
                className="block lg:hidden overflow-hidden w-full"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <div
                    className="flex flex-row"
                    style={{
                        transform: `translateX(-${current * 100}%)`,
                        transition: "transform 0.4s ease",
                    }}
                >
                    {SERVICES.map((service) => (
                        <div
                            key={service.id}
                            className="flex-shrink-0 w-full"
                            style={{ height: "200px" }}
                        >
                            <img
                                src={service.image}
                                alt={service.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* ── SERVICE INFO BLOCK ── */}
            <div className="mt-6 max-w-[790px] lg:ml-20">
                {/* Title row with orange circle */}
                <div className="flex items-center gap-3">
                    <img src={ASSETS.IMAGES.vector} alt="" className="w-[45px] h-[20px]" />
                    <p
                        className="text-[16px] lg:text-[26px] font-[600] uppercase"
                        style={{ color: "#134A87", fontFamily: "var(--font-poppins)" }}
                    >
                        {SERVICES[current].title}
                    </p>
                </div>

                {/* Description with left orange border */}
                <p
                    className="text-[12px] lg:text-[18px] leading-relaxed mt-3 p-0 pl-4 "
                    style={{
                        color: "var(--color-text-gray)",
                        fontFamily: "var(--font-poppins)",
                        fontWeight: 300,
                        borderLeft: "4.5px solid var(--color-primary)",
                    }}
                >
                    {SERVICES[current].description}
                </p>
            </div>

            {/* ── DOTS — MOBILE ── */}
            <div className="flex lg:hidden justify-center gap-2 mt-4">
                {SERVICES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        style={{
                            width: i === current ? "24px" : "10px",
                            height: "4px",
                            backgroundColor: i === current ? "var(--color-primary)" : "#CCCCCC",
                            border: "none",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>

            {/* ── CUSTOM SCROLLBAR — DESKTOP ── */}
            <div className="hidden lg:flex items-center justify-center gap-3 mt-6">

                {/* LEFT ARROW */}
                <button
                    onClick={prev}
                    aria-label="Previous service"
                    className="flex-shrink-0 hover:opacity-70 transition-opacity"
                >
                    <ChevronLeft
                        size={21}
                        style={{ color: "#D0D5DD" }}
                    />
                </button>

                {/* PROGRESS TRACK WRAPPER */}
                <div
                    className="relative cursor-pointer"
                    style={{ width: "300px", height: "20px" }}
                    onMouseDown={(e) => {
                        e.preventDefault();
                        const rect = e.currentTarget.getBoundingClientRect();
                        const clickX = e.clientX - rect.left;
                        const percent = Math.min(1, Math.max(0, clickX / rect.width));
                        const newIndex = Math.round(percent * (SERVICES.length - 1));
                        setCurrent(newIndex);

                        const onMouseMove = (moveEvent) => {
                            const moveX = moveEvent.clientX - rect.left;
                            const movePct = Math.min(1, Math.max(0, moveX / rect.width));
                            const dragIndex = Math.round(movePct * (SERVICES.length - 1));
                            setCurrent(dragIndex);
                        };

                        const onMouseUp = () => {
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
                        style={{ height: "1.5px", backgroundColor: "#667185" }}
                    />

                    {/* ✅ ORANGE THUMB — fixed width, moves via left position */}
                    <div
                        className="absolute top-1/2 -translate-y-1/2 rounded-full pointer-events-none"
                        style={{
                            height: "4px",
                            width: "65px",

                            left: `calc(${(current / (SERVICES.length - 1)) * 100}% - ${(current / (SERVICES.length - 1)) * 60}px)`,
                            backgroundColor: "var(--color-primary)",
                            transition: "left 0.3s ease",
                        }}
                    />
                </div>

                {/* RIGHT ARROW */}
                <button
                    onClick={next}
                    aria-label="Next service"
                    className="flex-shrink-0 hover:opacity-70 transition-opacity"
                >
                    <ChevronRight
                        size={21}
                        style={{ color: "#424242" }}
                    />
                </button>
            </div>

        </section>
    );
};

export default Services;