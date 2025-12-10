"use client"

import { useEffect, useRef, useState } from "react"
import { Palette, Sparkles, Drama } from "lucide-react"

const repertoire = [
  {
    id: 1,
    title: "Kocak Kacik",
    author: "Karya: Arifin C. Noer",
    description: "Refleksi pencarian jati diri dan perjuangan kehidupan masyarakat akar rumput.",
    image: "/romantic-theatre-performance-romeo-juliet.jpg",
    badge: "DRAMA REALIS",
    badgeColor: "bg-maroon",
    icon: Drama,
  },
  {
    id: 2,
    title: "Kapai-Kapai",
    author: "Karya: Arifin C. Noer",
    description: "Drama tentang mimpi yang melambung dan pencarian makna hidup yang puitis.",
    image: "/magical-theatre-storm-tempest-stage-performance.jpg",
    badge: "SURREALIS",
    badgeColor: "bg-gold",
    icon: Sparkles,
  },
  {
    id: 3,
    title: "Kopral Woyzeck",
    author: "Karya: George Buchner",
    description: "Kisah tragis tentang eksploitasi manusia dan sisi gelap kemanusiaan.",
    image: "/dramatic-hamlet-theatre-performance-dark-stage.jpg",
    badge: "TRAGEDI KLASIK",
    badgeColor: "bg-foreground",
    icon: Palette,
  },
]

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-4" aria-hidden="true">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-gold" />
      <div className="flex gap-2">
        <span className="text-gold text-lg">✦</span>
        <span className="text-maroon text-lg">✦</span>
        <span className="text-gold text-lg">✦</span>
      </div>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-gold" />
    </div>
  )
}

export function FeaturedShows() {
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
    <section ref={sectionRef} id="repertoar" className="bg-muted/30 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <GoldDivider />
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-maroon mb-3 font-serif">Repertoar Utama</h2>
          <p className="text-gold text-lg">Karya-karya legendaris yang menjadi identitas komunitas kami</p>
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {repertoire.map((show, index) => (
            <div
              key={show.id}
              className={`group bg-background rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-t-4 border-gold ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={show.image || "/placeholder.svg"}
                  alt={`Pertunjukan ${show.title}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Badge Ribbon */}
                <div
                  className={`absolute top-4 left-0 ${show.badgeColor} text-background text-xs font-bold px-4 py-1 shadow-md`}
                >
                  {show.badge}
                </div>
                {/* Overlay with Icon */}
                <div className="absolute inset-0 bg-maroon/0 group-hover:bg-maroon/20 transition-colors duration-300 flex items-center justify-center">
                  <show.icon className="w-12 h-12 text-background opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>

              {/* Card Content - Simplified without pricing */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-maroon mb-1 font-serif">{show.title}</h3>
                <p className="text-gold text-sm font-medium mb-3">{show.author}</p>
                <p className="text-foreground/70 text-sm leading-relaxed">{show.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Stars Between Section */}
        <div className="flex justify-center gap-8 mt-8" aria-hidden="true">
          <span className="text-gold/40 text-2xl">✦</span>
          <span className="text-maroon/40 text-2xl">✦</span>
          <span className="text-gold/40 text-2xl">✦</span>
        </div>

        <GoldDivider />
      </div>
    </section>
  )
}
