export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">About Rejection is Redirection Podcast</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Rejection is Redirection Podcast! We started this journey with a simple mission:
            to create meaningful conversations that inspire, educate, and connect people
            from all walks of life.
          </p>
          <p className="text-gray-700 leading-relaxed">
            What began as a passion project has grown into a community of listeners who
            share our love for authentic storytelling and thought-provoking discussions.
          </p>
        </section>

  <section className="mb-12 rounded-lg p-6 sm:p-8" style={{ background: 'var(--muted)' }}>
          <h2 className="text-3xl font-bold mb-4">What We Do</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-2">🎙️ Audio Podcasts</h3>
              <p className="text-gray-700">
                Weekly episodes featuring in-depth conversations with fascinating guests.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📹 Video Content</h3>
              <p className="text-gray-700">
                Behind-the-scenes videos, interviews, and visual storytelling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">📸 Community</h3>
              <p className="text-gray-700">
                Building a community through events, meetups, and shared experiences.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Meet the Host</h2>
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="w-36 h-36 sm:w-48 sm:h-48 rounded-full flex-shrink-0" style={{ background: `linear-gradient(135deg, var(--primary), #7c3aed)` }}></div>
            <div>
              <h3 className="text-2xl font-semibold mb-2">Valeria Rusnak</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                I'm a passionate podcaster with a background in medicine. University rejection made me pivot towards my true calling—sharing stories that matter. Through Rejection is Redirection Podcast, I aim to inspire others to embrace their journeys and find strength in vulnerability.
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Values</h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">→</span>
              <div>
                <strong>Authenticity:</strong> We believe in genuine, unfiltered conversations.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">→</span>
              <div>
                <strong>Curiosity:</strong> We're always learning and exploring new ideas.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">→</span>
              <div>
                <strong>Community:</strong> Building meaningful connections with our listeners.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 font-bold mr-2">→</span>
              <div>
                <strong>Quality:</strong> Delivering well-researched, thoughtful content.
              </div>
            </li>
          </ul>
        </section>

  <section className="rounded-lg p-8 sm:p-12 text-center" style={{ background: 'var(--primary)' }}>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Have a story to share or want to be a guest on our show?
          </p>
          <a
            href="mailto:hello@Rejection is Redirection.com"
            className="bg-blue-600 hover:bg-blue-400 text-gray-100 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
