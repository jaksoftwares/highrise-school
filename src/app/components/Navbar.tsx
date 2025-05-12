'use client'

import Link from 'next/link'
// import Image from 'next/image'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Academics', href: '/academics' },
  { name: 'Admissions', href: '/admissions' },
  { name: 'Co-curricular', href: '/co-curricular' },
  { name: 'News & Events', href: '/news-events' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const isActive = (href: string) => pathname === href

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            {/* <Image src="/logo.png" alt="Highrise School Logo" width={40} height={40} /> */}
            <span className="text-xl font-bold text-primary">Highrise School</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`font-medium hover:text-primary transition ${
                  isActive(link.href) ? 'text-primary' : 'text-gray-700'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="ml-4 bg-primary text-white px-4 py-2 rounded hover:bg-primary-dark transition"
            >
              Login
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMenuOpen(prev => !prev)}
            className="md:hidden text-gray-700"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className={`block font-medium px-2 py-1 transition ${
                  isActive(link.href) ? 'text-primary' : 'text-gray-700'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/login"
              className="block bg-primary text-white text-center px-4 py-2 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        )}
      </div>
    </header>
  )
}
