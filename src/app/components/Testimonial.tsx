import { Star } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    name: 'John Doe',
    role: 'Student',
    quote:
      'Highrise School has provided me with an excellent education and a supportive environment to grow both academically and personally.',
    image: '/images/student1.jpg',
  },
  {
    name: 'Jane Smith',
    role: 'Parent',
    quote:
      'I have seen my child thrive here. The school truly cares about their academic and personal development.',
    image: '/images/parent1.jpg',
  },
  {
    name: 'Michael Johnson',
    role: 'Teacher',
    quote:
      'Teaching at Highrise School has been an incredibly rewarding experience. The students are motivated and passionate.',
    image: '/images/teacher1.jpg',
  },
]

export default function Testimonial() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">What Our Community Says</h2>
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300"
            >
              <div className="flex justify-center mb-4">
                <Image
                    width={20}
                    height={20} 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-20 h-20 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
              <p className="text-gray-600 mb-4 italic">
                <Star className="inline-block text-yellow-400" /> {testimonial.quote}{' '}
                <Star className="inline-block text-yellow-400" />
              </p>
              <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}</h3>
              <p className="text-gray-500">{testimonial.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
