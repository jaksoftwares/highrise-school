"use client"
import { useState } from 'react'

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission (e.g., call an API here)
    setTimeout(() => {
      setIsSubmitting(false)
      alert('Your message has been sent!')
      setFormData({ name: '', email: '', message: '' })
    }, 2000)
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Contact Us</h1>
          <p className="text-lg text-gray-600 mt-4">
            We’d love to hear from you! Fill out the form below and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md space-y-6">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-gray-700">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-lg font-medium text-gray-700">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-lg font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 transition duration-300"
                >
                  {isSubmitting ? 'Submitting...' : 'Send Message'}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Our Office</h3>
              <p className="text-lg text-gray-600 mt-2">
                123 Highrise Street, Suite 101, City, Country
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Phone</h3>
              <p className="text-lg text-gray-600 mt-2">
                +1 (234) 567-890
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Email</h3>
              <p className="text-lg text-gray-600 mt-2">
                support@highriseschool.com
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-gray-800">Follow Us</h3>
              <div className="flex space-x-4 mt-4">
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <i className="fab fa-facebook-f text-2xl"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
                <a href="#" className="text-blue-600 hover:text-blue-700">
                  <i className="fab fa-linkedin-in text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="mt-12">
          <h3 className="text-2xl font-semibold text-gray-800 text-center mb-4">Our Location</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.046617470243!2d-122.41941948468174!3d37.77492977975954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808c5a6b3d43%3A0x94d1c5c5488f74ae!2sSan+Francisco%2C+CA%2C+USA!5e0!3m2!1sen!2sin!4v1629841911201!5m2!1sen!2sin"
              className="w-full h-full border-none rounded-lg"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
