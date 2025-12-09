import Image from "next/image"
import Link from "next/link"
import { Instagram, Facebook, Youtube } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Tiket", href: "#tiket" },
  { label: "Sejarah", href: "#sejarah" },
  { label: "Galeri", href: "#galeri" },
  { label: "Teater", href: "#teater" },
  { label: "Kontak", href: "#kontak" },
]

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms & Conditions", href: "#" },
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
]

// TikTok icon component since lucide doesn't have it
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="bg-background border-t-4 border-t-gold">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Left - Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded-lg"
            >
              <Image
                src="/images/screenshot-202025-12-10-20012120.png"
                alt="Teater Saphalta Logo"
                width={60}
                height={60}
                className="rounded-full"
              />
              <div>
                <span className="text-xl font-bold text-maroon">Teater Saphalta</span>
                <p className="text-sm text-foreground/60">Performance Art Theatre</p>
              </div>
            </Link>
            <p className="text-foreground/70 text-sm text-center md:text-left">
              Bagian dari komunitas <span className="text-gold font-semibold">@sanggarsapta</span>
            </p>
          </div>

          {/* Center - Navigation */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-maroon font-bold mb-4 uppercase tracking-wide">Navigasi</h4>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2 mb-6">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-gold transition-colors duration-200 text-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="text-maroon font-bold mb-4 uppercase tracking-wide">Legal</h4>
            <ul className="flex flex-wrap justify-center md:justify-start gap-x-4 gap-y-2">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-foreground/70 hover:text-gold transition-colors duration-200 text-sm underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Social & Newsletter */}
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-maroon font-bold mb-4 uppercase tracking-wide">Ikuti Kami</h4>
            <div className="flex gap-4 mb-6">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center text-maroon hover:bg-gold hover:text-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
              <Link
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-maroon/10 flex items-center justify-center text-maroon hover:bg-gold hover:text-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
                aria-label="TikTok"
              >
                <TikTokIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Newsletter */}
            <h4 className="text-maroon font-bold mb-3 uppercase tracking-wide text-sm">Newsletter</h4>
            <form className="flex w-full max-w-xs gap-2">
              <Input
                type="email"
                placeholder="Email Anda"
                className="border-gold/30 focus-visible:ring-gold focus-visible:border-gold"
                aria-label="Alamat email untuk newsletter"
              />
              <Button
                type="submit"
                className="bg-maroon hover:bg-maroon/90 text-background shrink-0 transition-all duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gold/30">
        <div className="container mx-auto px-4 py-4">
          <p className="text-center text-foreground/50 text-sm">
            © 2025 Teater Saphalta. Bagian dari <span className="text-gold">@sanggarsapta</span>. Semua hak dilindungi.
          </p>
        </div>
      </div>
    </footer>
  )
}
