export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        About The Rejected Pre-Med Podcast
      </h1>

      <div className="prose prose-lg max-w-none">
        {/* Author Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About the Author</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full flex-shrink-0 shadow-lg" style={{ background: 'url(/images/valeria-rusnak.png) center/cover' }}
            ></div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-3">Valeria Rusnak</h3>
              <p className="text-gray-700 leading-relaxed">
                Valeria Rusnak is a passionate mental health advocate and speaker with a degree in Neuroscience. Motivated by her own experience facing medical school rejection—and witnessing similar struggles among her peers—Valeria created The Rejected Pre-Med Podcast: For Anyone Who’s Faced Rejection. This platform fosters mental wellness by blending Valeria’s personal stories with those of her guests, alongside research-backed strategies that emphasize healthy emotional regulation and self-compassion. Together, these stories and insights help promote resilience, confidence and a sense of community in the face of failure or rejection. Through her podcast, speaking engagements in both non-profit and corporate sectors, and one-on-one consulting, Valeria empowers young people to normalize conversations about rejection and the mental health challenges that may arise from it. Her mission is to provide peer support and inspire hope by showing that rejection and failure are not endpoints but transformative steps toward growth and well-being—if embraced with patience and compassion. Valeria has spoken at the University of Calgary and other platforms, championing the importance of compassion, mental wellness, and community. She is currently a Top 3 Finalist for Youth Mental Health Champion across Canada.
              </p>
            </div>
          </div>
        </section>

        {/* Podcast Story Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Podcast Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Welcome to <strong>The Rejected Pre-Med Podcast!</strong> 
              This project began with a simple mission — to create meaningful 
              conversations that inspire, educate, and connect people from all walks of life.
            </p>

            <p>
              What started as a personal passion has grown into a community of listeners 
              who share the same challenges and triumphs. Through authentic storytelling 
              and honest discussions, we aim to empower you to embrace your own journey 
              of rejection and redirection.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section
          className="rounded-2xl p-10 sm:p-14 text-center shadow-lg text-white"
          style={{ background: 'linear-gradient(135deg, var(--primary), #7c3aed)' }}
        >
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-100 mb-8 max-w-2xl mx-auto">
            Have a story to share or want to be a guest on the show?
          </p>
          <a
            href="mailto:hello@rejectionisredirection.com"
            className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}