"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { heroSlides } from "@/data/banners";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide, autoPlay]);

  const slide = heroSlides[current];

  return (
    <section className="relative w-full overflow-hidden">
      <div className="h-[50vh] sm:h-[60vh] md:h-[75vh] lg:h-[80vh]">
        {/* Animated Background */}
        <div
          className={`absolute inset-0 bg-linear-to-r ${slide.bgGradient} transition-all duration-1000 ease-in-out`}
        />

        {/* Animated overlay pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>

        {/* Content */}
        <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center w-full">
            {/* Text Section */}
            <div className="text-white z-10 space-y-6">
              {slide.badge && (
                <div className="inline-block">
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold tracking-wider border border-white/40 hover:bg-white/30 transition">
                    <span className="w-2 h-2 bg-yellow-300 rounded-full animate-pulse" />
                    {slide.badge}
                  </span>
                </div>
              )}
              
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight">
                {slide.title}
              </h2>
              
              <p className="text-base sm:text-lg md:text-xl text-white/95 max-w-lg leading-relaxed font-medium">
                {slide.subtitle}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Link
                  href={slide.ctaLink}
                  className="px-8 py-4 bg-white text-gray-900 font-bold rounded-lg hover:bg-gray-50 transition-all shadow-2xl text-base sm:text-lg flex items-center justify-center gap-2 hover:gap-3 group"
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                >
                  {slide.cta}
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
                <Link
                  href="/products"
                  className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition-all backdrop-blur-sm text-base sm:text-lg flex items-center justify-center"
                  onMouseEnter={() => setAutoPlay(false)}
                  onMouseLeave={() => setAutoPlay(true)}
                >
                  View All
                </Link>
              </div>
            </div>

            {/* Image Section */}
            <div className="hidden md:flex justify-center items-center relative h-full">
              <div className="relative w-full max-w-sm lg:max-w-md aspect-square">
                {/* Glowing background effect */}
                <div className="absolute -inset-4 bg-linear-to-r from-white/20 to-transparent rounded-3xl blur-2xl opacity-50 hover:opacity-100 transition" />
                
                {/* Main image */}
                <div className="relative rounded-3xl overflow-hidden shadow-2xl ring-4 ring-white/20 hover:ring-white/40 transition-all">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Discount badge */}
                <div className="absolute -bottom-2 -right-2 bg-linear-to-r from-orange-500 to-red-600 rounded-2xl p-4 shadow-2xl transform hover:scale-110 transition-transform">
                  <div className="text-white text-center">
                    <p className="text-xs font-bold uppercase tracking-widest">UP TO</p>
                    <p className="text-3xl font-extrabold leading-tight">40%</p>
                    <p className="text-xs font-bold uppercase tracking-widest">OFF</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => {
            prevSlide();
            setAutoPlay(false);
          }}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all z-20 border border-white/30 hover:scale-110 group"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={() => {
            nextSlide();
            setAutoPlay(false);
          }}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/40 transition-all z-20 border border-white/30 hover:scale-110 group"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrent(idx);
                setAutoPlay(false);
              }}
              className={`transition-all duration-300 rounded-full ${
                idx === current
                  ? "w-8 h-2.5 bg-white"
                  : "w-2.5 h-2.5 bg-white/50 hover:bg-white/75"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
