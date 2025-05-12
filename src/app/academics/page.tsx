import Image from 'next/image'
import { Book, Users, Layers } from 'lucide-react'

export default function Academics() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Academics at Highrise School</h1>
          <p className="text-lg text-gray-600 mt-4">
            Providing a world-class education that prepares students for success.
          </p>
        </div>

        {/* Curriculum Overview */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Curriculum</h2>
            <p className="text-gray-700">
              Highrise School offers a comprehensive curriculum that focuses on intellectual development, critical thinking, 
              and personal growth. We strive to provide an education that fosters a well-rounded individual capable of excelling 
              in various fields. Our curriculum includes core subjects, electives, and extracurricular activities designed to 
              encourage creativity and leadership.
            </p>
          </div>

          {/* Curriculum Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/images/curriculum.jpg"
              alt="Curriculum Overview"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Departments */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Departments</h2>
          <div className="md:flex justify-around gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Book className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Literature & Languages</h3>
              <p className="text-gray-700">
                Offering English, French, and Literature, we aim to develop strong communication and literary skills.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Social Sciences</h3>
              <p className="text-gray-700">
                Courses in History, Geography, and Sociology equip students with a global perspective and social awareness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Layers className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">STEM (Science, Technology, Engineering & Math)</h3>
              <p className="text-gray-700">
                Fostering innovation and critical thinking through advanced courses in Physics, Chemistry, Math, and IT.
              </p>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Subjects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mathematics</h3>
              <p className="text-gray-700">
                A strong foundation in mathematics, preparing students for problem-solving and analytical thinking.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Physics</h3>
              <p className="text-gray-700">
                Students explore the fundamental laws of nature and develop a deeper understanding of the physical world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Chemistry</h3>
              <p className="text-gray-700">
                Our chemistry courses delve into the molecular world, helping students understand the building blocks of matter.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Biology</h3>
              <p className="text-gray-700">
                Biology courses help students explore the complexities of living organisms, from cells to ecosystems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Literature</h3>
              <p className="text-gray-700">
                Engaging students with world literature, encouraging critical analysis, and expanding cultural awareness.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">History</h3>
              <p className="text-gray-700">
                A comprehensive study of global history, helping students develop a deep understanding of historical events and their impact.
              </p>
            </div>
          </div>
        </div>

        {/* Faculty */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet Our Faculty</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Faculty Member 1 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Image
                src="/images/faculty1.jpg"
                alt="Faculty Member 1"
                width={120}
                height={120}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mr. John Smith</h3>
              <p className="text-gray-700">Head of Mathematics Department</p>
            </div>
            {/* Faculty Member 2 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Image
                src="/images/faculty2.jpg"
                alt="Faculty Member 2"
                width={120}
                height={120}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Dr. Jane Doe</h3>
              <p className="text-gray-700">Science Department Chair</p>
            </div>
            {/* Faculty Member 3 */}
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Image
                src="/images/faculty3.jpg"
                alt="Faculty Member 3"
                width={120}
                height={120}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Ms. Emily Clarke</h3>
              <p className="text-gray-700">History & Social Sciences Teacher</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
