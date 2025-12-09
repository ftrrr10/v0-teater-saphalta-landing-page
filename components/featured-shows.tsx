"use client"

import { useEffect, useRef, useState } from "react"
import { Calendar, MapPin, Clock } from "lucide-react"

const shows = [
  {
    id: 1,
    title: "Romeo & Juliet",
    date: "15 Desember 2025",
    time: "19:30 WIB",
    location: "Auditorium Utama",
    price: "Rp 150K",
    description: "Kisah cinta abadi yang mengharukan dalam balutan drama klasik Shakespeare.",
    image: "/romantic-theatre-performance-romeo-juliet.jpg",
    badge: "POPULER",
    badgeColor: "bg-primary",
  },
  {
    id: 2,
    title: "The Tempest",
    date: "20 Desember 2025",
    time: "19:30 WIB",
    location: "Auditorium Utama",
    price: "Rp 150K",
    description: "Petualangan magis di pulau misterius dengan efek visual yang memukau.",
    image: "/magical-theatre-storm-tempest-stage-performance.jpg",
    badge: "TERBARU",
    badgeColor: "bg-accent",
  },
  {
    id: 3,
    title: "Hamlet Act I",
    date: "25 Desember 2025",
    time: "19:30 WIB",
    location: "Auditorium Utama",
    price: "Rp 150K",
    description: "Drama tragis tentang pengkhianatan dan balas dendam yang memukau.",
    image: "/dramatic-hamlet-theatre-performance-dark-stage.jpg",
    badge: "POPULER",
    badgeColor: "bg-primary",
  },
]

function GoldDivider() {
  return (
    <div className="flex items-center justify-center gap-4 py-4" aria-hidden="true">
      <div className="h-px w-24 bg-gradient-to-r from-transparent to-accent" />
      <div className="flex gap-2">
        <span className="text-accent text-lg">✦</span>
        <span className="text-primary text-lg">✦</span>
        <span className="text-accent text-lg">✦</span>
      </div>
      <div className="h-px w-24 bg-gradient-to-l from-transparent to-accent" />
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
    <section ref={sectionRef} className="bg-muted/30 py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <GoldDivider />
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3 font-serif">Pertunjukan Mendatang</h2>
          <p className="text-accent text-lg">Jangan lewatkan penampilan spektakuler kami</p>
        </div>

        {/* Shows Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {shows.map((show, index) => (
            <div
              key={show.id}
              className={`group bg-background rounded-lg shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden border-t-4 border-accent ${
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
              </div>

              {/* Card Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-primary mb-3 font-serif">{show.title}</h3>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Calendar className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span>{show.date}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <Clock className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span>{show.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground text-sm">
                    <MapPin className="w-4 h-4 text-accent" aria-hidden="true" />
                    <span>{show.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{show.description}</p>

                <div className="flex items-center justify-between">
                  <span className="text-accent font-bold text-lg">Dari {show.price}</span>
                  <button className="bg-primary hover:bg-primary/90 text-background px-4 py-2 rounded text-sm font-semibold transition-all duration-200 hover:shadow-md hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold">
                    LIHAT DETAIL
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Stars Between Section */}
        <div className="flex justify-center gap-8 mt-8" aria-hidden="true">
          <span className="text-accent/40 text-2xl">✦</span>
          <span className="text-primary/40 text-2xl">✦</span>
          <span className="text-accent/40 text-2xl">✦</span>
        </div>

        <GoldDivider />
      </div>
    </section>
  )
}
