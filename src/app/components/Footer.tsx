import Link from 'next/link'
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-primary text-white mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Highrise School</h2>
          <p className="text-sm">Empowering learners. Shaping futures.</p>
          <div className="flex gap-4 mt-4">
            <a href="#" aria-label="Facebook" className="hover:text-secondary transition">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-secondary transition">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-secondary transition">
              <Instagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="/about" className="hover:text-secondary">About Us</Link></li>
            <li><Link href="/academics" className="hover:text-secondary">Academics</Link></li>
            <li><Link href="/admissions" className="hover:text-secondary">Admissions</Link></li>
            <li><Link href="/co-curricular" className="hover:text-secondary">Co-curricular</Link></li>
            <li><Link href="/news-events" className="hover:text-secondary">News & Events</Link></li>
            <li><Link href="/gallery" className="hover:text-secondary">Gallery</Link></li>
            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
          <ul className="text-sm space-y-2">
            <li><Mail className="inline mr-2" /> info@highriseschool.ac.ke</li>
            <li>📞 +254 700 123456</li>
            <li>🏫 Nairobi, Kenya</li>
          </ul>
        </div>
      </div>

      <div className="bg-primary-dark text-center py-4 text-sm">
        &copy; {new Date().getFullYear()} Highrise School. All rights reserved.
      </div>
    </footer>
  )
}
