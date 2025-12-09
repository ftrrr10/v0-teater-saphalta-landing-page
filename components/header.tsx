"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { label: "Home", href: "#" },
  { label: "Tiket", href: "#tiket" },
  { label: "Sejarah", href: "#sejarah" },
  { label: "Galeri", href: "#galeri" },
  { label: "Teater", href: "#teater" },
  { label: "Kontak", href: "#kontak" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false)
    }
    document.addEventListener("keydown", handleEscape)
    return () => document.removeEventListener("keydown", handleEscape)
  }, [])

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [mobileMenuOpen])

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-background border-b-2 border-gold transition-shadow duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
            >
              <Image
                src="/images/screenshot-202025-12-10-20012120.png"
                alt="Teater Saphalta Logo"
                width={48}
                height={48}
                className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
              />
              <span className="hidden sm:block text-lg lg:text-xl font-bold text-maroon">Teater Saphalta</span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-4 py-2 text-sm font-medium text-foreground hover:text-maroon focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-md transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Auth Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Button
                variant="outline"
                className="border-maroon text-maroon hover:bg-maroon hover:text-background bg-transparent transition-all duration-200 hover:shadow-md"
              >
                Login
              </Button>
              <Button className="bg-gold text-maroon hover:bg-gold/90 font-semibold transition-all duration-200 hover:shadow-md">
                Daftar
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-maroon hover:bg-maroon/10 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </header>

      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-foreground/50 z-40 lg:hidden animate-fade-in"
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Sidebar */}
          <div className="fixed top-0 right-0 h-full w-72 bg-background z-50 lg:hidden shadow-2xl animate-slide-in-right">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <span className="text-lg font-bold text-maroon">Menu</span>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-maroon hover:bg-maroon/10 rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="Tutup menu"
              >
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col p-4">
              {navItems.map((item, index) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-4 py-3 text-base font-medium text-foreground hover:text-maroon hover:bg-muted rounded-md transition-all duration-200 animate-fade-in-up`}
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div
                className="flex flex-col gap-3 mt-6 pt-6 border-t border-border animate-fade-in-up"
                style={{ animationDelay: "300ms" }}
              >
                <Button
                  variant="outline"
                  className="w-full border-maroon text-maroon bg-transparent hover:bg-maroon hover:text-background transition-all duration-200"
                >
                  Login
                </Button>
                <Button className="w-full bg-gold text-maroon font-semibold hover:bg-gold/90 transition-all duration-200">
                  Daftar
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  )
}
