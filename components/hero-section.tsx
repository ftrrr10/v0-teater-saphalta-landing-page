"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { TheatreMasks } from "@/components/theatre-masks"
import { DecorativeStars } from "@/components/decorative-stars"

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="tiket" className="relative bg-background overflow-hidden">
      {/* Decorative dots pattern */}
      <div className="absolute top-20 left-[45%] grid grid-cols-8 gap-1.5 opacity-60" aria-hidden="true">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-maroon/40" />
        ))}
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className={`relative z-10 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Decorative Stars */}
            <DecorativeStars />

            {/* Small Label */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-sm font-semibold tracking-widest text-gold uppercase">Pertunjukan Baru</span>
              <div className="h-0.5 w-16 bg-gold" />
            </div>

            {/* Main Headline */}
            <div className="relative mb-2">
              <div className="inline-block bg-maroon px-4 py-2 mb-2">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-background tracking-tight font-serif">
                  TEATER
                </h1>
              </div>
              {/* Decorative dots beside headline */}
              <div
                className="absolute -right-4 top-1/2 -translate-y-1/2 hidden md:grid grid-cols-6 gap-1"
                aria-hidden="true"
              >
                {Array.from({ length: 18 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-gold" />
                ))}
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold text-maroon tracking-tight mb-6 font-serif">
              SAPHALTA
            </h2>

            {/* Subheading */}
            <p className="text-lg lg:text-xl font-medium text-gold mb-4">Performance Art Theatre</p>

            {/* Description */}
            <p className="text-foreground/80 leading-relaxed max-w-md mb-8 text-base lg:text-lg">
              Bergabunglah dengan kami dalam perjalanan seni pertunjukan yang luar biasa. Kami menghadirkan karya seni
              berkualitas tinggi yang menggabungkan budaya, cerita, dan passion.
            </p>

            {/* CTA Button */}
            <Button
              size="lg"
              className="bg-maroon text-background hover:bg-maroon/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
            >
              PESAN TIKET SEKARANG
            </Button>
          </div>

          {/* Right Content - Image & Decorative Elements */}
          <div
            className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "200ms" }}
          >
            {/* Decorative Bento Grid */}
            <div className="absolute -top-4 right-0 lg:right-8 z-10">
              <div className="grid grid-cols-4 gap-2">
                {/* Ticket Price Card */}
                <div className="col-span-2 bg-background border-2 border-foreground/20 rounded-lg px-4 py-3 shadow-md hover:shadow-lg transition-shadow duration-200">
                  <span className="text-maroon font-bold text-sm">TIKET</span>
                  <span className="text-foreground font-bold text-xl ml-2">Rp 150K</span>
                </div>
                {/* Mask Icon */}
                <div className="bg-maroon rounded-lg p-2 flex items-center justify-center">
                  <TheatreMasks className="w-8 h-8 text-background" />
                </div>
                {/* Decorative Wave Pattern */}
                <div className="bg-foreground/10 rounded-lg p-2 flex items-center justify-center">
                  <div className="w-full h-full flex flex-col justify-center gap-0.5">
                    {Array.from({ length: 4 }).map((_, i) => (
                      <div key={i} className="h-0.5 w-full bg-foreground/40 rounded" />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Theatre Masks Row */}
            <div className="absolute top-16 right-0 lg:right-8 z-10">
              <div className="flex gap-2">
                <div className="w-8 h-8 bg-maroon/20 rounded-lg" />
                <div className="bg-maroon rounded-lg p-1.5">
                  <TheatreMasks className="w-6 h-6 text-background" />
                </div>
                <div className="bg-gold rounded-lg p-1.5">
                  <TheatreMasks className="w-6 h-6 text-maroon" />
                </div>
                <div className="bg-maroon rounded-lg p-1.5">
                  <TheatreMasks className="w-6 h-6 text-background" />
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative mt-24 lg:mt-20">
              <div className="relative rounded-lg overflow-hidden shadow-2xl">
                <img
                  src="/theatre-performer-mime-artist-on-stage-dramatic-li.jpg"
                  alt="Pertunjukan Teater Saphalta - Aktor mime di panggung dengan pencahayaan dramatis"
                  className="w-full h-[400px] lg:h-[500px] object-cover"
                  loading="eager"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-maroon/20 to-transparent" />
              </div>

              {/* Bottom Left Decorative Mask */}
              <div className="absolute -bottom-4 -left-4 bg-foreground rounded-lg p-3 shadow-lg">
                <TheatreMasks className="w-8 h-8 text-background" />
              </div>

              {/* Dots decoration */}
              <div className="absolute -bottom-8 left-16 grid grid-cols-6 gap-1" aria-hidden="true">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-maroon" />
                ))}
              </div>
            </div>

            {/* Decorative Star */}
            <div className="absolute top-32 left-0 text-foreground/20 text-2xl" aria-hidden="true">
              ★
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Bar */}
      <div className="flex items-center justify-center gap-2 py-4 bg-maroon/5" aria-hidden="true">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-maroon/60" />
        ))}
      </div>
    </section>
  )
}
