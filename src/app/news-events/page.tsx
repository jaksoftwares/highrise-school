import { Calendar, Newspaper } from 'lucide-react'
import Image from 'next/image'

export default function NewsAndEvents() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">News & Events</h1>
          <p className="text-lg text-gray-600 mt-4">
            Stay updated with the latest news and events at Highrise School.
          </p>
        </div>

        {/* News Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Latest News</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image
                src="/images/news1.jpg"
                alt="News 1"
                width={500}
                height={300}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">New Sports Facilities Opening</h3>
              <p className="text-gray-700">
                We are excited to announce the opening of our new sports complex, which will provide our students with top-tier athletic facilities.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>May 12, 2025</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image
                src="/images/news2.jpg"
                alt="News 2"
                width={500}
                height={300}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Highrise School Wins Regional Debate Competition</h3>
              <p className="text-gray-700">
                Congratulations to our debate team for winning the regional championship! This achievement highlights our commitment to excellence.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>April 30, 2025</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image
                src="/images/news3.jpg"
                alt="News 3"
                width={500}
                height={300}
                className="rounded-lg mb-6"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Annual Science Fair</h3>
              <p className="text-gray-700">
                Our annual science fair was a resounding success, showcasing the innovative projects and research conducted by our students.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>March 15, 2025</span>
              </div>
            </div>
          </div>
        </div>

        {/* Events Section */}
        <div>
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Upcoming Events</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Newspaper className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Inter-School Sports Meet</h3>
              <p className="text-gray-700">
                Join us for an exciting day of athletic competition as we host the annual inter-school sports meet. Students from all over the region will compete.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>June 20, 2025</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Newspaper className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">School Talent Show</h3>
              <p className="text-gray-700">
                Our talent show is a platform for students to showcase their skills, from music to dance, comedy, and more. Don’t miss the fun!
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>July 5, 2025</span>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Newspaper className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Parent-Teacher Conference</h3>
              <p className="text-gray-700">
                Meet with your child’s teachers to discuss progress and goals for the upcoming academic year. We value your partnership in education.
              </p>
              <div className="flex items-center mt-4 text-gray-500">
                <Calendar className="w-5 h-5 mr-2" />
                <span>August 10, 2025</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
