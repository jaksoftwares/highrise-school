import Link from 'next/link'

const newsItems = [
  {
    title: 'New School Year Starts!',
    description:
      'Join us in welcoming our new batch of students to an exciting year ahead at Highrise School.',
    link: '/news-events/new-school-year',
  },
  {
    title: 'Sports Day Highlights',
    description:
      'Our annual sports day was a huge success with exciting competitions and amazing performances.',
    link: '/news-events/sports-day-2025',
  },
  {
    title: 'Community Service Project',
    description:
      'Our students actively participated in a community outreach program, giving back to the local community.',
    link: '/news-events/community-service',
  },
]

export default function NewsEvents() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Latest News & Events</h2>
        <div className="space-y-6">
          {newsItems.slice(0, 2).map((item, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{item.description}</p>
              <Link href={item.link} className="text-primary hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8">
          <Link
            href="/news-events"
            className="text-primary font-semibold hover:underline"
          >
            View All News & Events
          </Link>
        </div>
      </div>
    </section>
  )
}
