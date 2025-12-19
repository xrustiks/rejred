export default function PodcastsPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Podcasts</h1>
      <p className="text-gray-600 mb-4 sm:mb-6">
        Full episode list and show notes are available via RSS
      </p>

      <a
        href="https://rss.com/podcasts/rejected-premed/?_gl=1%2a1sq0dbc%2a_gcl_au%2aMTA3MTAxNjQyLjE3NjE1NzE0NDA"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow block max-w-xl mx-auto"
      >
        <div
          className="h-48 flex items-center justify-center"
          style={{ background: `linear-gradient(135deg, var(--primary), #7c3aed)` }}
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
          <h2 className="font-semibold text-xl mb-2">Subscribe via RSS</h2>
          <p className="text-gray-600">
            Full episode list and show notes are available on our RSS page:
            {' '}
            <span className="font-medium">rss.com/rejected-premed</span>
          </p>
        </div>
      </a>
    </div>
  );
}
