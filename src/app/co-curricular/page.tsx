import { Users, Music, Activity, Paintbrush, BookOpen } from 'lucide-react'

export default function CoCurricular() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Co-Curricular Activities at Highrise School</h1>
          <p className="text-lg text-gray-600 mt-4">
            We believe in nurturing well-rounded individuals by offering a range of extracurricular activities that enhance personal growth, creativity, and teamwork.
          </p>
        </div>

        {/* Overview Section */}
        <div className="mb-16 text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Participate in Co-Curricular Activities?</h2>
          <p className="text-gray-700 mx-auto md:w-2/3">
            At Highrise School, we understand that learning goes beyond academics. Co-curricular activities offer students a chance to explore their passions, build lifelong skills, and foster friendships. Whether it’s sports, music, drama, or leadership, we provide a variety of options for students to engage in and grow.
          </p>
        </div>

        {/* Co-Curricular Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
          {/* Sports Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Activity className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Sports</h3>
            <p className="text-gray-700">
              Our sports programs are designed to encourage teamwork, discipline, and healthy competition. We offer a variety of sports including football, basketball, athletics, swimming, and more.
            </p>
          </div>

          {/* Music Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Music className="w-12 h-12 text-red-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Music & Performing Arts</h3>
            <p className="text-gray-700">
              Whether you’re into choir, band, or drama, we provide a platform for students to showcase their artistic talents. Our music and performing arts programs foster creativity and confidence.
            </p>
          </div>

          {/* Arts & Craft Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Paintbrush className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Arts & Crafts</h3>
            <p className="text-gray-700">
              Our arts and crafts programs allow students to explore their creative sides through painting, sculpture, and other forms of visual art. The focus is on self-expression and skill development.
            </p>
          </div>

          {/* Academic Clubs Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <BookOpen className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Academic Clubs</h3>
            <p className="text-gray-700">
              From robotics to debate, our academic clubs give students the opportunity to engage in intellectual pursuits and enhance their critical thinking, problem-solving, and public speaking skills.
            </p>
          </div>

          {/* Leadership Section */}
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Leadership Development</h3>
            <p className="text-gray-700">
              We offer leadership programs and student councils that encourage young leaders to develop essential leadership skills such as decision-making, communication, and teamwork.
            </p>
          </div>

        </div>

        {/* Special Programs Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Special Programs</h2>
          <p className="text-lg text-gray-700 mb-4 text-center">
            In addition to the traditional activities, we also offer several special programs designed to cater to diverse interests and talents.
          </p>

          <ul className="list-disc list-inside text-gray-700 space-y-4 mx-auto md:w-2/3">
            <li>
              <strong>Community Service:</strong> Develop empathy and social responsibility through various community service projects.
            </li>
            <li>
              <strong>Outdoor Adventures:</strong> Participate in outdoor activities like camping, hiking, and adventure challenges that foster teamwork and resilience.
            </li>
            <li>
              <strong>Environmental Awareness:</strong> Join our sustainability programs and contribute to environmental conservation efforts.
            </li>
            <li>
              <strong>Public Speaking & Debate:</strong> Build confidence and eloquence in speaking and debate, preparing for competitions and public presentations.
            </li>
          </ul>
        </div>

        {/* Testimonials Section */}
        <div className="bg-gray-100 py-16 mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">What Our Students Say</h2>
          <div className="flex justify-center gap-8">
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs text-center">
              <p className="text-gray-700 italic mb-4">
                 &quot;Joining the drama club was the best decision I made. It helped me become more confident and expressive.&quot;
              </p>
              <p className="font-semibold text-gray-800">Sarah W.</p>
              <p className="text-gray-600">Drama Club Member</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg max-w-xs text-center">
              <p className="text-gray-700 italic mb-4">
              &quot;I love playing basketball! The team spirit and the thrill of competition have made me a better player and teammate.&quot;
              </p>
              <p className="font-semibold text-gray-800">James T.</p>
              <p className="text-gray-600">Basketball Team Captain</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
