"use client"

import { useEffect, useRef, useState } from "react"
import { MapPin, Clock, Phone, Play } from "lucide-react"

const infoCards = [
  {
    icon: MapPin,
    title: "Lokasi",
    details: ["Alamat Teater Saphalta", "Jakarta, Indonesia"],
  },
  {
    icon: Clock,
    title: "Jam Operasional",
    details: ["Senin - Minggu", "18:00 - 23:00 WIB"],
  },
  {
    icon: Phone,
    title: "Hubungi Kami",
    details: ["+62 XXX-XXXX-XXXX", "saphaltateater14@gmail.com"],
  },
  {
    icon: Play,
    title: "Tonton Sekarang",
    details: ["Konten eksklusif", "teater kami"],
  },
]

export function InfoSection() {
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
    <section ref={sectionRef} id="kontak" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-4 font-serif">Informasi Teater</h2>
          <div className="flex items-center justify-center gap-2" aria-hidden="true">
            <div className="h-[2px] w-12 bg-gold" />
            <div className="h-2 w-2 rotate-45 bg-gold" />
            <div className="h-[2px] w-12 bg-gold" />
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {infoCards.map((card, index) => (
            <div
              key={index}
              className={`bg-background border-t-4 border-t-gold rounded-lg p-6 shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 100}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-maroon/10 flex items-center justify-center mb-4">
                  <card.icon className="w-7 h-7 text-maroon" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-maroon mb-3 uppercase tracking-wide">{card.title}</h3>
                {card.details.map((detail, i) => (
                  <p key={i} className="text-foreground/70 text-sm">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
