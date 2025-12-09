"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ZoomIn } from "lucide-react"

const galleryImages = [
  { src: "/gallery-1.jpg", title: "Romeo & Juliet" },
  { src: "/gallery-2.jpg", title: "The Tempest" },
  { src: "/gallery-3.jpg", title: "Hamlet Act I" },
  { src: "/gallery-4.jpg", title: "A Midsummer Night" },
  { src: "/gallery-5.jpg", title: "Macbeth" },
  { src: "/gallery-6.jpg", title: "Othello" },
  { src: "/gallery-7.jpg", title: "King Lear" },
  { src: "/gallery-8.jpg", title: "The Merchant" },
]

export function GallerySection() {
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
    <section ref={sectionRef} id="galeri" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Gold divider */}
        <div className="flex items-center justify-center gap-4 mb-8" aria-hidden="true">
          <div className="h-px w-16 bg-gold" />
          <div className="w-2 h-2 rotate-45 bg-gold" />
          <div className="h-px w-16 bg-gold" />
        </div>

        {/* Header */}
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl lg:text-4xl font-bold text-maroon mb-3 font-serif">Galeri Pertunjukan</h2>
          <p className="text-muted-foreground text-base lg:text-lg">
            Melihat momen-momen spesial dari pertunjukan kami
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto mb-12">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative aspect-square rounded-md overflow-hidden shadow-md cursor-pointer ${
                isVisible ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 50 + 100}ms` }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={`Foto pertunjukan ${image.title}`}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
                loading="lazy"
              />

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-3">
                <ZoomIn className="w-8 h-8 text-background" aria-hidden="true" />
                <span className="text-background font-medium text-sm text-center px-2">{image.title}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className={`text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}
          style={{ animationDelay: "500ms" }}
        >
          <Button
            variant="outline"
            className="border-maroon text-maroon hover:bg-maroon hover:text-background transition-all duration-200 bg-transparent hover:shadow-md hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
          >
            LIHAT SEMUA GALERI
          </Button>
        </div>

        {/* Bottom decorative elements */}
        <div className="flex items-center justify-center gap-4 mt-12" aria-hidden="true">
          <div className="h-px w-8 bg-gold" />
          <div className="w-1.5 h-1.5 rotate-45 bg-gold" />
          <div className="h-px w-8 bg-gold" />
        </div>
      </div>
    </section>
  )
}
