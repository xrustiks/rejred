export const metadata = {
  title: "Photos and Videos",
  description: "Find our photos and videos on Instagram.",
};

export default function MediaPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4">Photos and Videos</h1>
      <p className="text-gray-600 mb-8 sm:mb-12">
        You can find photos and videos on Instagram at{' '}
        <a
          href="https://www.instagram.com/the_rejectedpremed_podcast/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-700 underline"
        >
          @the_rejectedpremed_podcast
        </a>
      </p>

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
            <path d="M7 2C4.239 2 2 4.239 2 7v10c0 2.761 2.239 5 5 5h10c2.761 0 5-2.239 5-5V7c0-2.761-2.239-5-5-5H7zm0 2h10c1.668 0 3 1.332 3 3v10c0 1.668-1.332 3-3 3H7c-1.668 0-3-1.332-3-3V7c0-1.668 1.332-3 3-3zm5 3.5A5.5 5.5 0 1 0 17.5 13 5.507 5.507 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.504 3.504 0 0 1 12 9.5zm5.25-3.25a1.25 1.25 0 1 0 1.25 1.25 1.251 1.251 0 0 0-1.25-1.25z" />
          </svg>
        </div>
        <div className="p-6">
          <h2 className="font-semibold text-xl mb-2">Follow us on Instagram</h2>
          <p className="text-gray-600">
            You can find photos and videos on Instagram at{' '}
            <span className="font-medium">@the_rejectedpremed_podcast</span>.
          </p>
        </div>
      </a>
    </div>
  );
}
