export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16 max-w-4xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">About Rejection is Redirection Podcast</h1>

      <div className="prose prose-lg max-w-none">
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">About the author</h2>
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
          <h2 className="text-3xl font-bold mb-4">Podcast story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Welcome to Rejection is Redirection Podcast! I started this journey with a simple mission:
            to create meaningful conversations that inspire, educate, and connect people
            from all walks of life.
          </p>

          <p className="text-gray-700 leading-relaxed">
            The goal is to make something that started as a passion project has grown into a community of listeners who faced the same challenges and triumphs. Through authentic storytelling and thought-provoking discussions, we aim to empower our audience to embrace their own journeys of rejection and redirection.
          </p>
        </section>

        <section className="rounded-lg p-8 sm:p-12 text-center" style={{ background: 'var(--primary)' }}>
          <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
          <p className="text-gray-700 max-w-3xl mx-auto mb-6">
            Have a story to share or want to be a guest on our show?
          </p>
          <a
            href="mailto:hello@Rejection is Redirection.com"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Contact Us
          </a>
        </section>
      </div>
    </div>
  );
}
