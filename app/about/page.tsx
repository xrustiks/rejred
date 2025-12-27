export default function AuthorPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">Author</h1>

      <div className="prose prose-lg max-w-none">
        {/* Author Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About the Author</h2>
          <div className="md:overflow-hidden">
            <div
              className="w-40 h-40 sm:w-88 sm:h-88 rounded-full shadow-lg mx-auto mb-6 md:float-left md:mr-8 md:mb-4"
              style={{ background: 'url(/images/valeria-rusnak.png) center/cover' }}
            ></div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-3">Valeria Rusnak</h3>
              <p className="text-gray-700 leading-relaxed">
                Valeria Rusnak is a passionate mental health advocate and speaker with a degree in Neuroscience. Motivated by her own experience facing medical school rejection—and witnessing similar struggles among her peers—Valeria created The Rejected Pre-Med Podcast: For Anyone Who’s Faced Rejection. This platform fosters mental wellness by blending Valeria’s personal stories with those of her guests, alongside research-backed strategies that emphasize healthy emotional regulation and self-compassion. Together, these stories and insights help promote resilience, confidence and a sense of community in the face of failure or rejection. Through her podcast, speaking engagements in both non-profit and corporate sectors, and one-on-one consulting, Valeria empowers young people to normalize conversations about rejection and the mental health challenges that may arise from it. Her mission is to provide peer support and inspire hope by showing that rejection and failure are not endpoints but transformative steps toward growth and well-being—if embraced with patience and compassion. Valeria has spoken at the University of Calgary and other platforms, championing the importance of compassion, mental wellness, and community. She is currently a Top 3 Finalist for Youth Mental Health Champion across Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="rounded-2xl p-10 sm:p-14 text-center shadow-lg text-white"
          style={{ background: 'linear-gradient(135deg, var(--primary), #0284c7)' }}
        >
          <h2 className="text-3xl font-bold mb-4">Connect with Valeria</h2>
          <p className="text-gray-100 mb-8 mx-auto">
            Have a story to share, want to be a guest, or need support? Reach out through any of the channels below.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl mx-auto mb-6">
            <a
              href="mailto:valerusu55@gmail.com"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Email
            </a>
            <a
              href="https://instagram.com/the_rejectedpremed_podcast"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://www.linkedin.com/in/valeria-rusnak"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://calendly.com/valerusu55"
              className="bg-white text-gray-900 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Book a Meeting
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}