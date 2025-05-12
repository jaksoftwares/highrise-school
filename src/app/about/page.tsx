import Image from 'next/image'
import { Award, Users, Shield, Star, Lightbulb } from 'lucide-react'

export default function About() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* About Hero Section with Background Image */}
        <div className="relative mb-16">
          <div className="absolute inset-0 bg-cover bg-center opacity-40" style={{ backgroundImage: 'url(/image2.jpg)' }}></div>
          <div className="relative text-center text-white z-10">
            <h1 className="text-4xl font-bold">About Highrise School</h1>
            <p className="text-lg mt-4">
              Empowering students to excel academically, socially, and emotionally.
            </p>
          </div>
        </div>

        {/* Our Story */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Story</h2>
            <p className="text-gray-700">
              Highrise School was founded in [Year] with a vision to provide exceptional education in a nurturing environment. 
              We have been consistently ranked as one of the top schools in the region, offering a comprehensive curriculum 
              and a wide range of co-curricular activities.
            </p>
            <p className="text-gray-700 mt-6">
              Our journey has been marked by continuous growth, innovation, and a commitment to excellence in all aspects of 
              student life. From our humble beginnings to becoming a leading educational institution, we remain committed to 
              preparing future leaders for the challenges of tomorrow.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/image4.jpg"
              alt="Highrise School History"
              width={500}
              height={300}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Mission & Vision</h2>
          <div className="md:flex justify-around gap-12">
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mission</h3>
              <p className="text-gray-700">
                Our mission is to provide a high-quality, well-rounded education that fosters intellectual curiosity, personal 
                growth, and a sense of responsibility. We aim to cultivate critical thinkers, confident leaders, and compassionate 
                individuals.
              </p>
            </div>
            <div className="md:w-1/3">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Vision</h3>
              <p className="text-gray-700">
                Our vision is to be a center of academic excellence, recognized for its holistic approach to education, 
                inspiring future leaders who will make meaningful contributions to society and drive positive change in the world.
              </p>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Core Values</h2>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Integrity</h3>
              <p className="text-gray-700">
                We value honesty, transparency, and accountability in all aspects of school life.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Star className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Excellence</h3>
              <p className="text-gray-700">
                We are committed to achieving excellence in academics, co-curricular activities, and overall student development.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community</h3>
              <p className="text-gray-700">
                We foster a sense of belonging and encourage collaboration and respect within our diverse community.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Lightbulb className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Innovation</h3>
              <p className="text-gray-700">
                We embrace creativity, critical thinking, and new technologies to prepare students for a rapidly changing world.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Leadership</h3>
              <p className="text-gray-700">
                We empower students to take initiative, make decisions, and lead by example both within and outside the classroom.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Top Rankings</h3>
              <p className="text-gray-700">
                Consistently ranked among the top schools in the region for academic performance.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Sports Achievements</h3>
              <p className="text-gray-700">
                Champions in regional sports competitions and a proud tradition of athletic excellence.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Community Service</h3>
              <p className="text-gray-700">
                Award-winning programs focused on giving back to the community through service projects and volunteering.
              </p>
            </div>
          </div>
        </div>

        {/* Our Faculty */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Meet Our Faculty</h2>
          <p className="text-lg text-gray-600 text-center mb-6">
            Our team of dedicated educators is committed to providing personalized instruction and fostering a love for learning.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {/* Repeat for each faculty member */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Image src="/images/faculty1.jpg" alt="Faculty 1" width={32} height={32}  className="w-32 h-32 rounded-full mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Mr. John Smith</h3>
              <p className="text-gray-700">Head of Science Department</p>
            </div>
            {/* Add more faculty members here */}
          </div>
        </div>

        {/* Principal's Message */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">A Message from Our Principal</h2>
          <p className="text-lg text-gray-600 mb-6">
            &quote;At Highrise School, we believe in fostering a community where every student can reach their full potential. 
            With a focus on academic excellence, personal development, and character building, we aim to prepare our students 
            for the challenges of tomorrow.&quot;
          </p>
          <p className="font-bold text-gray-800">Principal [Name]</p>
        </div>

        {/* Join Us Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Join Highrise School</h2>
          <p className="text-lg text-gray-600 mb-6">
            Become part of our community of learners! Apply today and start your journey towards success.
          </p>
          <a
            href="/admissions"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold"
          >
            Apply Now
          </a>
        </div>

      </div>
    </section>
  )
}
