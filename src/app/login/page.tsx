"use client"

import { useState } from 'react'
import { useRouter } from 'next/router'

export default function Login() {
  const router = useRouter()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError('')

    // Simulate a login process (you can replace this with actual login logic)
    setTimeout(() => {
      if (formData.email === 'test@example.com' && formData.password === 'password') {
        router.push('/dashboard') // Redirect to dashboard on successful login
      } else {
        setError('Invalid credentials, please try again.')
        setIsSubmitting(false)
      }
    }, 2000)
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-100 py-16">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Welcome Back</h2>
        <p className="text-center text-gray-600 mb-4">Please log in to your account</p>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4 rounded-md">
              {error}
            </div>
          )}
          
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
            <label htmlFor="password" className="block text-lg font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md mt-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="remember"
                className="h-4 w-4 text-blue-500 rounded focus:ring-blue-500"
              />
              <label htmlFor="remember" className="ml-2 text-sm text-gray-600">Remember Me</label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:text-blue-700">Forgot Password?</a>
          </div>

          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 disabled:bg-gray-300 transition duration-300"
            >
              {isSubmitting ? 'Logging In...' : 'Log In'}
            </button>
          </div>
        </form>

        {/* Sign-up Link */}
        <div className="mt-6 text-center">
          <p className="text-sm text-gray-600">Don’t have an account? <a href="/signup" className="text-blue-600 font-medium hover:underline">Sign up</a></p>
        </div>

        {/* Social Login Section (Optional) */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">Or log in with</p>
          <div className="flex justify-center space-x-4">
            <button className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700">
              <i className="fab fa-facebook-f text-lg"></i>
            </button>
            <button className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700">
              <i className="fab fa-google text-lg"></i>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
