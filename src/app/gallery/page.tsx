import Image from 'next/image'

export default function Gallery() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Gallery</h1>
          <p className="text-lg text-gray-600 mt-4">
            A glimpse into the vibrant moments from our events, daily activities, and more at Highrise School.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Image Card 1 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="/image1.jpg"
              alt="Gallery Image 1"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-semibold">Sports Day 2025</span>
            </div>
          </div>

          {/* Image Card 2 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="/image2.jpg"
              alt="Gallery Image 2"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-semibold">Annual Science Fair</span>
            </div>
          </div>

          {/* Image Card 3 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="/image3.jpg"
              alt="Gallery Image 3"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-semibold">Cultural Festival</span>
            </div>
          </div>

          {/* Image Card 4 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="/image4.jpg"
              alt="Gallery Image 4"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-semibold">Graduation Ceremony</span>
            </div>
          </div>

          {/* Image Card 5 */}
          <div className="relative overflow-hidden rounded-xl shadow-lg group">
            <Image
              src="/image5.jpg"
              alt="Gallery Image 5"
              width={600}
              height={400}
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <span className="text-white text-2xl font-semibold">Teacher Appreciation Day</span>
            </div>
          </div>

        </div>

        {/* Load More Section */}
        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white py-2 px-6 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            Load More Images
          </a>
        </div>

      </div>
    </section>
  )
}
