import { BookOpen, Users, Medal, HeartHandshake } from 'lucide-react'

const highlights = [
  {
    title: 'Academic Excellence',
    description:
      'Committed to delivering a strong academic foundation and nurturing future leaders.',
    icon: BookOpen,
  },
  {
    title: 'Discipline & Values',
    description:
      'Instilling discipline, integrity, and responsibility in every student.',
    icon: Users,
  },
  {
    title: 'Co-Curricular Strength',
    description:
      'Vibrant arts, sports, and clubs that develop well-rounded learners.',
    icon: Medal,
  },
  {
    title: 'Supportive Environment',
    description:
      'Safe, inclusive, and supportive environment that fosters student growth.',
    icon: HeartHandshake,
  },
]
export default function HighlightCards() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">Why Choose Highrise School?</h2>
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition duration-300"
            >
              <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
