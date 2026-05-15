export const metadata = {
  title: "Press and Interviews",
  description: "Press coverage and guest interviews.",
};

export default function PressPage() {
  return (
    <div className="container mx-auto px-8 sm:px-12 lg:px-16 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Press & Interviews</h1>
      <p className="text-gray-600 mb-12">
        A curated list of press coverage, guest appearances and interviews. You can also find many mentions on our Instagram page.
      </p>

      {/* Recognition Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-gray-900">Recognition & Awards</h2>
        <div className="bg-white rounded-lg shadow-md overflow-hidden p-8">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="flex-1">
              <img
                src="/images/reachouttogether.jpeg"
                alt="Canada's Top Mental Health Advocate Awards Nominee - ReachOutTogether"
                className="w-full max-w-sm rounded-lg shadow-lg"
              />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                Canada's Top Mental Health Advocate Awards
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Nominated as a finalist in recognition of innovation and impact in mental health advocacy. This nomination reflects the work done through the podcast, speaking engagements, and commitment to fostering meaningful conversations around resilience, mental wellness, and navigating life's challenges with intention.
              </p>
              <a
                href="https://www.reachouttogether.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
              >
                Learn more about ReachOutTogether →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Card-styled CTA matching Podcasts page */}
      <a
        href="https://www.instagram.com/the_rejectedpremed_podcast/"
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
            <path d="M12 2C7.58 2 4 5.58 4 10v4c0 4.42 3.58 8 8 8s8-3.58 8-8v-4C20 5.58 16.42 2 12 2zm0 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm6-1a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
        </div>
        <div className="p-6">
          <h2 className="font-semibold text-xl mb-2">Follow on Instagram</h2>
          <p className="text-gray-600">
            Latest mentions and clips: <span className="font-medium">@the_rejectedpremed_podcast</span>
          </p>
        </div>
      </a>
    </div>
  );
}
