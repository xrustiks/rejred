export const metadata = {
  title: "Support and Resources",
  description: "Support the author and the podcast.",
};

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16 max-w-6xl">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support & Resources</h1>
      <p className="text-gray-600 mb-12">
        Discover valuable resources for resilience, mental wellness, and personal growth.
      </p>

      {/* Recommended Resources Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Recommended Resources</h2>

        {/* Recommended Books */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-sky-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">📚 Recommended Books</h3>
          <ul className="space-y-3">
            <li className="text-gray-700">
              <strong>The Happiness Project</strong> by Gretchen Rubin — 
              <a href="https://gretchenrubin.com/books/the-happiness-project/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 underline ml-1">
                Gretchen Rubin's Website
              </a>
            </li>
            <li className="text-gray-700">
              <strong>The Artist's Way</strong> by Julia Cameron
            </li>
          </ul>
        </div>

        {/* Resources Mentioned */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-sky-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🔗 Resources Mentioned</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://self-compassion.org/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                Dr. Kristin Neff's Website
              </a>
              <span className="text-gray-600"> — Self-compassion research and practices</span>
            </li>
            <li>
              <a href="https://youtu.be/IvtZBUSplr4?si=rhayApWmEBvKEX-A" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                Dr. Kristin Neff TED Talk
              </a>
              <span className="text-gray-600"> — The space between self-esteem and self-compassion</span>
            </li>
            <li className="text-gray-700">
              <strong>The Gifts of Imperfection</strong> by Brené Brown (Available on Amazon)
            </li>
            <li className="text-gray-700">
              <strong>The Happiness Project</strong> by Gretchen Rubin (Available on Amazon)
            </li>
          </ul>
        </div>

        {/* More on Rejection Sensitivity */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-sky-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">💡 More on Rejection Sensitivity</h3>
          <ul className="space-y-3">
            <li>
              <a href="https://youtu.be/ACI7xDjajPg?si=7AATjAwNWJlCQmZi" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                HealthyGamerGG YouTube Video
              </a>
              <span className="text-gray-600"> — Understanding rejection sensitivity</span>
            </li>
            <li>
              <a href="https://youtu.be/-vZXgApsPCQ?si=rqfxje0ncQQ5HLkf" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                Jia Jiang's TED Talk – 100 Days of Rejection
              </a>
              <span className="text-gray-600"> — How facing rejection can transform your life</span>
            </li>
            <li>
              <a href="https://www.amazon.ca/Gap-Gain-Achievers-Happiness-Confidence/dp/1401964362" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 font-medium">
                The Gap and The Gain
              </a>
              <span className="text-gray-600"> — Available on Amazon</span>
            </li>
          </ul>
        </div>

        {/* Our Guests' Resources */}
        <div className="bg-white rounded-xl p-6 sm:p-8 shadow-md border border-sky-100 mb-8">
          <h3 className="text-xl font-bold text-gray-900 mb-4">🎙️ Our Guests' Resources</h3>
          
          <div className="space-y-6">
            <div>
              <p className="font-semibold text-gray-900 mb-2">Richard Lee Thai (TEDx Speaker)</p>
              <a href="https://excusestoconnect.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                Excuses to Connect Website
              </a>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Sachi's Newsletter</p>
              <a href="https://invitehealth.beehiiv.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                Invite Health Newsletter
              </a>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Dave, MOT & Coach</p>
              <p className="text-gray-600 text-sm mb-2">Free first session for Rejected Pre-Med Podcast listeners</p>
              <div className="space-y-1">
                <div>
                  <span className="text-gray-700">Website: </span>
                  <a href="https://daverobens.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    daverobens.com
                  </a>
                </div>
                <div>
                  <span className="text-gray-700">Instagram: </span>
                  <a href="https://instagram.com/daverobens" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    @daverobens
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Dr. Michael Ungar's Books & Resources</p>
              <ul className="space-y-2 ml-4">
                <li className="text-gray-700">• <strong>The Limits of Resilience:</strong> Knowing When to Persevere, When to Change, and When to Quit</li>
                <li className="text-gray-700">• <strong>Change Your World:</strong> The Science of Resilience and the True Path to Success</li>
                <li className="text-gray-700">• <strong>Multisystemic Resilience:</strong> Adaptation and Transformation in Contexts of Change (Open Access)</li>
              </ul>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Rebecca's Resources</p>
              <div className="space-y-1">
                <div>
                  <span className="text-gray-700">Podcast: </span>
                  <a href="https://luminawriting.com/the-joyful-scholar-podcast/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    The Joyful Scholar
                  </a>
                </div>
                <div>
                  <span className="text-gray-700">Services: </span>
                  <a href="https://luminawriting.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">
                    luminawriting.com
                  </a>
                </div>
              </div>
            </div>

            <div>
              <p className="font-semibold text-gray-900 mb-2">Karan Wadhwani</p>
              <p className="text-gray-700">
                <strong>So You Want To Be A...</strong> — Available on Amazon
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Support CTA - Moved to Bottom */}
      <section className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-gray-900">Support the Podcast</h2>
        <p className="text-gray-600 mb-8">
          If you'd like to support Valeria and the podcast, consider buying a coffee. Your support helps keep the mission going!
        </p>
        <a
          href="https://www.buymeacoffee.com/valeriarusnak"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block max-w-xl mx-auto"
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
            <h3 className="font-semibold text-xl mb-2">Buy Me a Coffee</h3>
            <p className="text-gray-600">
              <span className="font-medium">buymeacoffee.com/valeriarusnak</span>
            </p>
          </div>
        </a>
      </section>
    </div>
  );
}
