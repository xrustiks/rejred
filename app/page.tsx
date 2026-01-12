import Link from "next/link";

export default function Home() {
  return (
  <div className="min-h-screen bg-gradient-to-b from-sky-100 via-white to-sky-50">
    <div className="container mx-auto px-4 py-10 sm:py-16 md:py-20">
      {/* Hero Section - Enhanced */}
      <section className="text-center mb-16 sm:mb-20 md:mb-24">
        <div className="mb-8">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 sm:mb-6 text-gray-900 leading-tight">
            Rejection is
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">
              Redirection
            </span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-8 mx-auto max-w-2xl leading-relaxed">
            Join conversations about resilience, mental wellness, and growth through rejection
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/podcasts"
            className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Listen Now
          </Link>
          <Link
            href="/media"
            className="bg-white border-2 border-blue-400 hover:bg-blue-50 text-blue-600 px-8 sm:px-10 py-4 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-1"
          >
            Watch & Explore
          </Link>
        </div>
      </section>

      {/* About Valeria Section - Enhanced Layout */}
      <section className="mb-16 sm:mb-20 md:mb-24 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-stretch">
          {/* Image */}
          <div className="order-2 md:order-1 flex items-center">
            <div 
              className="rounded-2xl shadow-2xl overflow-hidden w-full aspect-square hover:shadow-3xl transition-shadow"
              style={{ background: `url(/images/main-photo.jpg) center/cover` }}
            />
          </div>
          
          {/* Text Content */}
          <div className="order-1 md:order-2 flex flex-col justify-center">
            <div className="inline-block mb-4">
              <span className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                Meet Valeria Rusnak
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-bold mb-8 text-gray-900 leading-tight">
              Speaker, Consultant & Mental Health Advocate
            </h2>
            
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Valeria is available to collaborate as a Rejections and Resilience Speaker and a Rejections/Pre-Med Consultant, with a bachelor's degree in neuroscience from the University of Lethbridge and a foundational certificate in Narrative-Based Medicine from the University of Toronto.
            </p>
            
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              She hosts 1:1 consultations to support pre-med students and individuals processing rejection, offering actionable strategies to help them move forward. She is also currently working towards receiving a Master of Management (Business Degree) from the Haskayne School of Business at the University of Calgary. 

            </p>

            <div className="bg-sky-50 rounded-xl p-6 sm:p-8 mb-8 border-l-4 border-blue-500">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Recent Speaking Venues</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="text-sm text-gray-700 flex items-start"><span className="text-blue-500 font-bold mr-2">•</span> University of Calgary</div>
                <div className="text-sm text-gray-700 flex items-start"><span className="text-blue-500 font-bold mr-2">•</span> University of Lethbridge</div>
                <div className="text-sm text-gray-700 flex items-start"><span className="text-blue-500 font-bold mr-2">•</span> North Trail High School</div>
                <div className="text-sm text-gray-700 flex items-start"><span className="text-blue-500 font-bold mr-2">•</span> General Mills</div>
              </div>
            </div>

            <Link
              href="/about"
              className="inline-block bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-400 hover:to-cyan-400 text-white px-8 py-3 rounded-xl font-semibold transition-all hover:shadow-lg hover:-translate-y-1 w-fit"
            >
              More about the author
            </Link>
          </div>
        </div>
      </section>

      {/* Featured In Section */}
      <section className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-sky-100 mb-16 sm:mb-20">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">Featured In</h3>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">The Western Wheel Newspaper</span> • 
          <span className="font-semibold"> The Okotoks Radio 100.9</span> • 
          <span className="font-semibold"> The Tactical Empathy Podcast</span> • 
          <span className="font-semibold"> North Okotoks Living Magazine</span> • 
          <span className="font-semibold"> Everything Storytelling & Mental Health Podcast</span> • 
          <span className="font-semibold"> University of Toronto CPD</span> • 
          <span className="font-semibold"> Golden Key Academy</span>
        </p>
      </section>

      {/* Quick Access Grid - Moved to Bottom */}
      <section>
        <h2 className="text-3xl sm:text-4xl font-bold mb-10 text-gray-900">Explore More</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link
            href="/podcasts"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div
              className="h-48 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, var(--primary), #0284c7)` }}
            >
              <svg
                className="w-16 h-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4a6 6 0 1 1 0 12A6 6 0 0 1 12 6zm-1 3v6l5-3-5-3z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Podcast</h3>
              <p className="text-gray-600">Listen to episodes and subscribe via RSS</p>
            </div>
          </Link>
          
          <Link
            href="/media"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div
              className="h-48 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, var(--primary), #0284c7)` }}
            >
              <svg
                className="w-16 h-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 2C7.58 2 4 5.58 4 10v4c0 4.42 3.58 8 8 8s8-3.58 8-8v-4C20 5.58 16.42 2 12 2zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Media</h3>
              <p className="text-gray-600">Photos and videos on Instagram</p>
            </div>
          </Link>
          
          <Link
            href="/support"
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
          >
            <div
              className="h-48 flex items-center justify-center"
              style={{ background: `linear-gradient(135deg, var(--primary), #0284c7)` }}
            >
              <svg
                className="w-16 h-16 text-white"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M3 8h14a4 4 0 1 1 0 8H3V8zm14 6a2 2 0 1 0 0-4H5v4h12zM3 18h14v2H3v-2z" />
              </svg>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Support</h3>
              <p className="text-gray-600">Help support the mission</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  </div>
  );
}
