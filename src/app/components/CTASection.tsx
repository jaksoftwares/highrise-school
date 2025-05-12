'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-primary text-white py-16 px-4 text-center">
      <h2 className="text-3xl sm:text-4xl font-bold mb-4">
        Ready to Join Highrise School?
      </h2>
      <p className="text-lg mb-8">
        We are excited to welcome new students into our community. Apply now to begin your journey!
      </p>
      <div className="flex justify-center gap-6">
        <Link
          href="/admissions"
          className="bg-white text-primary px-6 py-3 rounded-lg shadow-md hover:bg-gray-100 transition"
        >
          Apply Now
        </Link>
        <Link
          href="/contact"
          className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg shadow-md hover:bg-white hover:text-primary transition"
        >
          Contact Us
        </Link>
      </div>
    </section>
  )
}
