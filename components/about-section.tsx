"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function AboutSection() {
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

  const highlights = [
    "Performer profesional berpengalaman",
    "Produksi berkualitas internasional",
    "Komunitas teater yang aktif",
  ]

  return (
    <section ref={sectionRef} id="sejarah" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-12" aria-hidden="true">
          <div className="h-px w-16 bg-gold" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gold" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left - Text Content */}
          <div className={`relative ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            {/* Gold accent line */}
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gold rounded-full" />

            <div className="pl-8 max-w-[600px]">
              <h2 className="text-3xl lg:text-4xl font-bold text-maroon mb-6 font-serif">Tentang Teater Saphalta</h2>

              <p className="text-muted-foreground leading-relaxed mb-8 text-base lg:text-lg">
                Teater Saphalta adalah institusi seni pertunjukan yang berdedikasi untuk menghadirkan produksi
                berkualitas tinggi. Kami percaya bahwa teater adalah medium yang powerful untuk mengekspresikan budaya,
                cerita, dan emosi manusia. Sejak didirikan, kami telah menghadirkan ratusan pertunjukan yang
                menginspirasi ribuan penonton.
              </p>

              <ul className="space-y-4 mb-8">
                {highlights.map((item, index) => (
                  <li
                    key={index}
                    className={`flex items-center gap-3 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
                    style={{ animationDelay: `${index * 100 + 200}ms` }}
                  >
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-gold/20">
                      <Check className="w-4 h-4 text-gold" aria-hidden="true" />
                    </span>
                    <span className="text-foreground font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="outline"
                className="border-maroon text-maroon hover:bg-maroon hover:text-background transition-all duration-200 bg-transparent hover:shadow-md hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              >
                PELAJARI LEBIH LANJUT
              </Button>
            </div>
          </div>

          {/* Right - Image */}
          <div
            className={`relative ${isVisible ? "animate-fade-in" : "opacity-0"}`}
            style={{ animationDelay: "300ms" }}
          >
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/about-theatre-rehearsal.jpg"
                alt="Latihan aktor Teater Saphalta di panggung"
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>

            {/* Decorative elements */}
            <div
              className="absolute -top-4 -right-4 w-24 h-24 border-2 border-gold rounded-lg -z-10"
              aria-hidden="true"
            />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gold/10 rounded-lg -z-10" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  )
}
