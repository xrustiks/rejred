export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 max-w-4xl">
      <h1 className="text-4xl sm:text-5xl font-bold text-center mb-12">
        About Rejection is Redirection Podcast
      </h1>

      <div className="prose prose-lg max-w-none">
        {/* Author Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">About the Author</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div
              className="w-40 h-40 sm:w-48 sm:h-48 rounded-full flex-shrink-0 shadow-lg"
              style={{
                background: `linear-gradient(135deg, var(--primary), #7c3aed)`,
              }}
            ></div>
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-3">Valeria Rusnak</h3>
              <p className="text-gray-700 leading-relaxed">
                I'm a passionate podcaster with a background in medicine. 
                University rejection made me pivot toward my true calling—sharing 
                stories that matter. Through <strong>Rejection is Redirection Podcast</strong>, 
                I aim to inspire others to embrace their journeys and find strength in vulnerability.
              </p>
            </div>
          </div>
        </section>

        {/* Podcast Story Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-center">Podcast Story</h2>
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p>
              Welcome to <strong>Rejection is Redirection Podcast!</strong> 
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