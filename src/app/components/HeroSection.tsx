'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function HeroSection() {
  return (
    <section className="relative bg-gray-900 text-white h-[75vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/image1.jpg"
        alt="Highrise School Campus"
        layout="fill"
        objectFit="cover"
        className="opacity-40"
        priority
      />

      {/* Overlay content */}
      <div className="relative z-10 text-center px-4 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          Welcome to Highrise School
        </h1>
        <p className="text-lg md:text-xl mb-8">
          Excellence in academics, discipline, and co-curricular achievement.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            href="/admissions"
            className="bg-primary text-white px-6 py-3 rounded shadow hover:bg-primary-dark transition"
          >
            Apply Now
          </Link>
          <Link
            href="/about"
            className="bg-white text-primary px-6 py-3 rounded shadow hover:bg-gray-100 transition"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  )
}
