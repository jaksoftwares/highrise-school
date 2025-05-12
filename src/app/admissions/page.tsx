import { Paperclip, Calendar, FileText } from 'lucide-react'
import Image from 'next/image'

export default function Admissions() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Title Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800">Admissions at Highrise School</h1>
          <p className="text-lg text-gray-600 mt-4">
            Join a community of learners dedicated to excellence, creativity, and personal growth.
          </p>
        </div>

        {/* Admissions Overview */}
        <div className="flex flex-col md:flex-row gap-12 mb-16">
          <div className="md:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Highrise School?</h2>
            <p className="text-gray-700">
              Highrise School offers a nurturing and academically rigorous environment that encourages students to reach their full potential. 
              Our holistic approach to education prepares students for success in both their academic and personal lives. With excellent 
              faculty, modern facilities, and a focus on extracurricular activities, we ensure every student thrives.
            </p>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <Image
              src="/images/school-building.jpg"
              alt="Highrise School"
              width={100}
              height={50}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Application Process */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Application Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Paperclip className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 1: Submit Application</h3>
              <p className="text-gray-700">
                Complete the online application form and submit all required documents. Ensure that all details are accurate before submission.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <Calendar className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 2: Interview</h3>
              <p className="text-gray-700">
                After reviewing your application, selected candidates will be invited for an interview. The interview process is designed 
                to understand your goals and assess your fit for Highrise School.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <FileText className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Step 3: Offer & Enrollment</h3>
              <p className="text-gray-700">
                Successful candidates will receive an offer letter. Once accepted, you will complete the enrollment process and secure your place at the school.
              </p>
            </div>
          </div>
        </div>

        {/* Required Documents */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Required Documents</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-4">
            <li>
              <strong>Birth Certificate</strong> – A copy of the student&apos;s birth certificate.
            </li>
            <li>
              <strong>Academic Transcripts</strong> – Transcripts from the previous school attended (if applicable).
            </li>
            <li>
              <strong>Passport-Size Photographs</strong> – Two recent passport-sized photographs of the student.
            </li>
            <li>
              <strong>Proof of Address</strong> – A utility bill or bank statement as proof of residence.
            </li>
            <li>
              <strong>Health Records</strong> – Medical records or a health certificate from a licensed doctor.
            </li>
          </ul>
        </div>

        {/* Important Dates */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-6">Important Dates</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex justify-between">
              <span className="font-semibold">Application Deadline:</span>
              <span>June 30, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Interview Dates:</span>
              <span>July 5–7, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Offer Letter Sent:</span>
              <span>July 10, 2025</span>
            </div>
            <div className="flex justify-between">
              <span className="font-semibold">Enrollment Deadline:</span>
              <span>July 15, 2025</span>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Contact Us</h2>
          <p className="text-lg text-gray-600 mb-4">
            If you have any questions or need assistance with the admissions process, please reach out to our Admissions Office.
          </p>
          <p className="text-lg text-gray-700">Phone: +123 456 7890</p>
          <p className="text-lg text-gray-700">Email: admissions@highrise.edu</p>
        </div>

      </div>
    </section>
  )
}
