"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/banners";

// ─── Types ────────────────────────────────────────────────────────────────────
interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  speed: number;
}

// ─── Slide data enrichment ────────────────────────────────────────────────────
const slideExtras = [
  {
    accentColor: "#6366f1",       // indigo
    glowColor: "rgba(99,102,241,0.35)",
    tag: "MEGA SALE",
    tagIcon: "🔥",
    stats: [
      { value: "25%", label: "Max Off" },
      { value: "500+", label: "Phones" },
      { value: "48h", label: "Only" },
    ],
    countdownEnabled: true,
  },
  {
    accentColor: "#10b981",       // emerald
    glowColor: "rgba(16,185,129,0.35)",
    tag: "STARTING ₹9,999",
    tagIcon: "⚡",
    stats: [
      { value: "5G", label: "Ready" },
      { value: "100+", label: "Models" },
      { value: "0%", label: "EMI" },
    ],
    countdownEnabled: false,
  },
  {
    accentColor: "#f59e0b",       // amber
    glowColor: "rgba(245,158,11,0.35)",
    tag: "BANK OFFERS",
    tagIcon: "🏦",
    stats: [
      { value: "₹5K", label: "Flat Off" },
      { value: "No Cost", label: "EMI" },
      { value: "15+", label: "Banks" },
    ],
    countdownEnabled: false,
  },
  {
    accentColor: "#a855f7",       // purple
    glowColor: "rgba(168,85,247,0.35)",
    tag: "JUST LAUNCHED",
    tagIcon: "🚀",
    stats: [
      { value: "2026", label: "Models" },
      { value: "120Hz", label: "Display" },
      { value: "5000", label: "mAh" },
    ],
    countdownEnabled: false,
  },
  {
    accentColor: "#ef4444",       // red
    glowColor: "rgba(239,68,68,0.35)",
    tag: "GAMING FEST",
    tagIcon: "🎮",
    stats: [
      { value: "165Hz", label: "Screen" },
      { value: "20%", label: "Off" },
      { value: "Turbo", label: "Charging" },
    ],
    countdownEnabled: false,
  },
  {
    accentColor: "#f97316",       // orange
    glowColor: "rgba(249,115,22,0.35)",
    tag: "FESTIVE SALE",
    tagIcon: "🎉",
    stats: [
      { value: "₹3K", label: "Exchange" },
      { value: "Free", label: "Protector" },
      { value: "1Yr", label: "Warranty" },
    ],
    countdownEnabled: false,
  },
];

// ─── Countdown hook ───────────────────────────────────────────────────────────
function useCountdown(hours = 23, minutes = 59, seconds = 59) {
  const [time, setTime] = useState({ h: hours, m: minutes, s: seconds });
  useEffect(() => {
    const t = setInterval(() => {
      setTime((prev) => {
        let { h, m, s } = prev;
        if (s > 0) return { h, m, s: s - 1 };
        if (m > 0) return { h, m: m - 1, s: 59 };
        if (h > 0) return { h: h - 1, m: 59, s: 59 };
        return { h: 0, m: 0, s: 0 };
      });
    }, 1000);
    return () => clearInterval(t);
  }, []);
  return time;
}

// ─── AnimatedNumber component ─────────────────────────────────────────────────
function AnimatedNumber({ value }: { value: string }) {
  return (
    <span className="tabular-nums font-extrabold text-white text-xl md:text-2xl leading-none">
      {value}
    </span>
  );
}

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [transitioning, setTransitioning] = useState(false);
  const [autoPlay, setAutoPlay] = useState(true);
  const [particles] = useState<Particle[]>(() =>
    Array.from({ length: 18 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      opacity: Math.random() * 0.4 + 0.1,
      speed: Math.random() * 20 + 15,
    }))
  );

  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdown = useCountdown(11, 30, 0);

  const goTo = useCallback(
    (idx: number, dir: "left" | "right") => {
      if (transitioning) return;
      setTransitioning(true);
      setDirection(dir);
      setPrev(current);
      setCurrent(idx);
      setTimeout(() => {
        setPrev(null);
        setTransitioning(false);
      }, 700);
    },
    [current, transitioning]
  );

  const next = useCallback(() => {
    goTo((current + 1) % heroSlides.length, "right");
  }, [current, goTo]);

  const prev_ = useCallback(() => {
    goTo((current - 1 + heroSlides.length) % heroSlides.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    if (!autoPlay) return;
    timerRef.current = setTimeout(next, 5500);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [autoPlay, current, next]);

  const slide = heroSlides[current];
  const extras = slideExtras[current];

  return (
    <>
      {/* ── Inject keyframe animations ── */}
      <style>{`
        @keyframes heroFadeInUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroFadeInRight {
          from { opacity: 0; transform: translateX(-32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroFadeInLeft {
          from { opacity: 0; transform: translateX(32px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes heroPulse {
          0%, 100% { transform: scale(1); }
          50%       { transform: scale(1.06); }
        }
        @keyframes heroFloat {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33%       { transform: translateY(-12px) rotate(1deg); }
          66%       { transform: translateY(-6px) rotate(-1deg); }
        }
        @keyframes heroGlow {
          0%, 100% { opacity: 0.5; }
          50%       { opacity: 1; }
        }
        @keyframes particleFloat {
          0%   { transform: translateY(0px) translateX(0px); }
          25%  { transform: translateY(-15px) translateX(8px); }
          50%  { transform: translateY(-8px) translateX(-5px); }
          75%  { transform: translateY(-20px) translateX(3px); }
          100% { transform: translateY(0px) translateX(0px); }
        }
        @keyframes slideInFromRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInFromLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideOutToLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-60px); }
        }
        @keyframes slideOutToRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(60px); }
        }
        @keyframes countdownTick {
          0%, 80%  { transform: scale(1); }
          10%, 70% { transform: scale(1.12); }
        }
        @keyframes shimmer {
          0%   { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes orbitSpin {
          from { transform: rotate(0deg) translateX(48px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(48px) rotate(-360deg); }
        }
        @keyframes borderGlow {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255,255,255,0.2); }
          50%       { box-shadow: 0 0 24px 8px rgba(255,255,255,0.15); }
        }
        .hero-text-enter {
          animation: heroFadeInUp 0.6s ease both;
        }
        .hero-tag-enter {
          animation: heroFadeInRight 0.5s ease both;
        }
        .hero-img-enter {
          animation: heroFloat 6s ease-in-out infinite;
        }
        .hero-slide-in-r { animation: slideInFromRight 0.7s cubic-bezier(.22,.61,.36,1) both; }
        .hero-slide-in-l { animation: slideInFromLeft  0.7s cubic-bezier(.22,.61,.36,1) both; }
        .hero-slide-out-l { animation: slideOutToLeft  0.7s cubic-bezier(.22,.61,.36,1) both; }
        .hero-slide-out-r { animation: slideOutToRight 0.7s cubic-bezier(.22,.61,.36,1) both; }
        .shimmer-text {
          background: linear-gradient(90deg, #fff 0%, #c7d2fe 40%, #fff 60%, #e0e7ff 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 4s linear infinite;
        }
        .countdown-digit {
          animation: countdownTick 1s ease infinite;
        }
        .badge-pulse {
          animation: heroPulse 2s ease-in-out infinite;
        }
        .glow-ring {
          animation: borderGlow 2.5s ease-in-out infinite;
        }
      `}</style>

      <section
        className="relative w-full overflow-hidden"
        onMouseEnter={() => setAutoPlay(false)}
        onMouseLeave={() => setAutoPlay(true)}
      >
        {/* ─── Hero Container ─────────────────────────────────────────────── */}
        <div className="relative h-[58vh] sm:h-[68vh] md:h-[85vh] lg:h-[92vh] min-h-[520px]">

          {/* ── Dynamic Background with depth layers ── */}
          <div
            className="absolute inset-0 transition-all duration-1000"
            style={{
              background: `
                radial-gradient(ellipse 80% 60% at 20% 50%, ${extras.glowColor}, transparent 60%),
                radial-gradient(ellipse 60% 80% at 80% 20%, ${extras.glowColor.replace("0.35", "0.15")}, transparent 50%),
                linear-gradient(135deg, #0a0a1a 0%, #0f0f2e 40%, #12123a 70%, #0a0a1a 100%)
              `,
            }}
          />

          {/* ── Animated Grid Pattern ── */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
              `,
              backgroundSize: "60px 60px",
            }}
          />

          {/* ── Floating Particles ── */}
          {particles.map((p) => (
            <div
              key={p.id}
              className="absolute rounded-full pointer-events-none"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                width: p.size,
                height: p.size,
                background: extras.accentColor,
                opacity: p.opacity,
                animation: `particleFloat ${p.speed}s ease-in-out infinite`,
                animationDelay: `${p.id * 0.7}s`,
              }}
            />
          ))}

          {/* ── Decorative Orbs ── */}
          <div
            className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-20 transition-all duration-1000"
            style={{ background: extras.accentColor }}
          />
          <div
            className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-15 transition-all duration-1000"
            style={{ background: extras.accentColor }}
          />

          {/* ── Main Content ── */}
          <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
            <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center w-full">

              {/* ── LEFT: Text Content ── */}
              <div
                key={`text-${current}`}
                className={`text-white z-10 space-y-5 md:space-y-6 ${transitioning
                  ? direction === "right"
                    ? "hero-slide-in-r"
                    : "hero-slide-in-l"
                  : ""
                  }`}
              >
                {/* Tag Badge */}
                <div className="hero-tag-enter" style={{ animationDelay: "0.1s" }}>
                  <span
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-black tracking-[0.15em] uppercase border backdrop-blur-md"
                    style={{
                      background: `${extras.accentColor}22`,
                      borderColor: `${extras.accentColor}55`,
                      color: extras.accentColor === "#6366f1" ? "#a5b4fc" :
                        extras.accentColor === "#10b981" ? "#6ee7b7" :
                          extras.accentColor === "#f59e0b" ? "#fcd34d" :
                            extras.accentColor === "#a855f7" ? "#d8b4fe" :
                              extras.accentColor === "#ef4444" ? "#fca5a5" : "#fdba74",
                    }}
                  >
                    <span className="text-base">{extras.tagIcon}</span>
                    {extras.tag}
                  </span>
                </div>

                {/* Headline */}
                <div
                  className="hero-text-enter"
                  style={{ animationDelay: "0.2s" }}
                >
                  <h1 className="shimmer-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.05] tracking-tight">
                    {slide.title}
                  </h1>
                </div>

                {/* Subtitle */}
                <p
                  className="hero-text-enter text-base sm:text-lg md:text-xl text-white/70 max-w-xl leading-relaxed font-medium"
                  style={{ animationDelay: "0.3s" }}
                >
                  {slide.subtitle}
                </p>

                {/* Stats Row */}
                <div
                  className="hero-text-enter flex items-center gap-5 md:gap-8"
                  style={{ animationDelay: "0.4s" }}
                >
                  {extras.stats.map((stat, i) => (
                    <div key={i} className="flex flex-col">
                      <AnimatedNumber value={stat.value} />
                      <span className="text-white/50 text-xs font-semibold uppercase tracking-wider mt-0.5">
                        {stat.label}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Countdown (if enabled) */}
                {extras.countdownEnabled && (
                  <div
                    className="hero-text-enter flex items-center gap-3"
                    style={{ animationDelay: "0.45s" }}
                  >
                    <span className="text-white/50 text-xs font-bold uppercase tracking-widest">
                      Ends in
                    </span>
                    {[
                      { val: String(countdown.h).padStart(2, "0"), label: "Hrs" },
                      { val: String(countdown.m).padStart(2, "0"), label: "Min" },
                      { val: String(countdown.s).padStart(2, "0"), label: "Sec" },
                    ].map((t, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <div
                          className="countdown-digit flex flex-col items-center justify-center w-12 h-12 rounded-xl font-black text-lg text-white border border-white/10"
                          style={{
                            background: `${extras.accentColor}33`,
                            backdropFilter: "blur(8px)",
                          }}
                        >
                          {t.val}
                          <span className="text-[8px] text-white/50 font-normal -mt-0.5">
                            {t.label}
                          </span>
                        </div>
                        {i < 2 && (
                          <span className="text-white/40 text-base font-bold -mt-1">
                            :
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {/* CTA Buttons */}
                <div
                  className="hero-text-enter flex flex-col sm:flex-row gap-3 pt-2"
                  style={{ animationDelay: "0.5s" }}
                >
                  <Link
                    href={slide.ctaLink}
                    className="group relative inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-2xl font-black text-sm sm:text-base overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                    style={{
                      background: `linear-gradient(135deg, ${extras.accentColor}, ${extras.accentColor}cc)`,
                      boxShadow: `0 8px 32px ${extras.glowColor}`,
                      color: "#fff",
                    }}
                  >
                    {/* Shimmer overlay */}
                    <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12" />
                    <span className="relative">{slide.cta}</span>
                    <svg
                      className="relative w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>

                  <Link
                    href="/products"
                    className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold text-sm sm:text-base border border-white/20 text-white/80 hover:text-white hover:border-white/40 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 active:scale-95"
                  >
                    View All
                    <svg
                      className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Trust Badges */}
                <div
                  className="hero-text-enter flex items-center gap-4 pt-1"
                  style={{ animationDelay: "0.6s" }}
                >
                  {["✓ Free Delivery", "✓ No Cost EMI", "✓ Genuine Products"].map(
                    (badge, i) => (
                      <span
                        key={i}
                        className="text-white/45 text-xs font-semibold"
                      >
                        {badge}
                      </span>
                    )
                  )}
                </div>
              </div>

              {/* ── RIGHT: Image Section ── */}
              <div
                key={`img-${current}`}
                className={`hidden lg:flex justify-center items-center relative ${transitioning
                  ? direction === "right"
                    ? "hero-slide-in-l"
                    : "hero-slide-in-r"
                  : ""
                  }`}
              >
                <div className="relative w-full max-w-lg">
                  {/* Outer glow ring */}
                  <div
                    className="absolute -inset-8 rounded-full blur-3xl opacity-40 transition-all duration-1000"
                    style={{ background: extras.accentColor }}
                  />

                  {/* Image card */}
                  <div
                    className="relative rounded-3xl overflow-hidden glow-ring"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      backdropFilter: "blur(24px)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    {/* Top bar decoration */}
                    <div
                      className="absolute top-0 left-0 right-0 h-0.5"
                      style={{
                        background: `linear-gradient(90deg, transparent, ${extras.accentColor}, transparent)`,
                      }}
                    />

                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="hero-img-enter w-full aspect-[4/3] object-cover"
                    />

                    {/* Discount badge — bottom-right */}
                    <div
                      className="absolute -bottom-3 -right-3 rounded-2xl p-4 shadow-2xl badge-pulse"
                      style={{
                        background: `linear-gradient(135deg, ${extras.accentColor}, ${extras.accentColor}99)`,
                        border: "2px solid rgba(255,255,255,0.2)",
                      }}
                    >
                      <div className="text-white text-center">
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">
                          UP TO
                        </p>
                        <p className="text-3xl font-black leading-none">40%</p>
                        <p className="text-[9px] font-black uppercase tracking-[0.2em] opacity-80">
                          OFF
                        </p>
                      </div>
                    </div>

                    {/* Floating label — top-left */}
                    <div
                      className="absolute top-4 left-4 flex items-center gap-2 px-3 py-2 rounded-xl backdrop-blur-md text-white"
                      style={{
                        background: "rgba(0,0,0,0.5)",
                        border: "1px solid rgba(255,255,255,0.12)",
                      }}
                    >
                      <span className="text-lg">{extras.tagIcon}</span>
                      <div>
                        <p className="text-xs font-black leading-none">{extras.tag}</p>
                        <p className="text-[10px] text-white/50 leading-none mt-0.5">
                          Limited Time
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Floating orbiting dot */}
                  <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full"
                    style={{
                      background: extras.accentColor,
                      animation: "orbitSpin 3s linear infinite",
                      boxShadow: `0 0 8px 3px ${extras.accentColor}`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ── Navigation Arrows ── */}
          <button
            onClick={prev_}
            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 group w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md z-20"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            aria-label="Previous slide"
          >
            <svg
              className="w-5 h-5 text-white group-hover:-translate-x-0.5 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={next}
            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 group w-11 h-11 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95 backdrop-blur-md z-20"
            style={{
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.15)",
            }}
            aria-label="Next slide"
          >
            <svg
              className="w-5 h-5 text-white group-hover:translate-x-0.5 transition-transform"
              fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* ── Slide Indicators (bottom strip) ── */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx, idx > current ? "right" : "left")}
                className="transition-all duration-500 rounded-full"
                style={{
                  width: idx === current ? 32 : 8,
                  height: 8,
                  background:
                    idx === current
                      ? extras.accentColor
                      : "rgba(255,255,255,0.3)",
                  boxShadow:
                    idx === current
                      ? `0 0 12px 3px ${extras.glowColor}`
                      : "none",
                }}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

          {/* ── Progress Bar ── */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/10 z-20">
            <div
              key={`progress-${current}`}
              className="h-full transition-none"
              style={{
                background: extras.accentColor,
                animation: autoPlay ? "shimmer 5.5s linear" : "none",
                backgroundSize: "200% auto",
              }}
            />
          </div>
        </div>

        {/* ── Bottom Feature Strip ── */}
        <div
          className="relative py-4 px-4 border-t border-white/5"
          style={{
            background:
              "linear-gradient(135deg, #0d0d24, #0f0f2e)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🚚", title: "Free Delivery", desc: "On orders ₹999+", color: "#6366f1" },
                { icon: "🏦", title: "No Cost EMI", desc: "0% interest, easy pay", color: "#10b981" },
                { icon: "🔄", title: "Easy Returns", desc: "7-day hassle-free", color: "#f59e0b" },
                { icon: "🛡️", title: "Secure Payment", desc: "256-bit SSL", color: "#a855f7" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl backdrop-blur-sm border border-white/5 hover:border-white/15 transition-all duration-300 group cursor-pointer"
                  style={{ background: "rgba(255,255,255,0.03)" }}
                >
                  <span
                    className="text-2xl w-10 h-10 flex items-center justify-center rounded-xl flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${item.color}22` }}
                  >
                    {item.icon}
                  </span>
                  <div>
                    <p className="text-white text-xs font-bold leading-tight">
                      {item.title}
                    </p>
                    <p className="text-white/40 text-[11px] leading-tight mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
