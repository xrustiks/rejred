export const metadata = {
  title: "Press and Interviews",
  description: "Press coverage and guest interviews.",
};

export default function PressPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Press & Interviews</h1>
      <p className="text-gray-600 mb-6">
        A curated list of press coverage, guest appearances and interviews. You can also find many mentions on our Instagram page.
      </p>

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
