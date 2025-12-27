export const metadata = {
  title: "Support and Resources",
  description: "Support the author and the podcast.",
};

export default function SupportPage() {
  return (
    <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      <h1 className="text-3xl sm:text-4xl font-bold mb-4">Support</h1>
      <p className="text-gray-600 mb-6">
        If you'd like to support the author and the podcast, here is the official link.
      </p>

      {/* Card-styled CTA matching Podcasts page */}
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
          <h2 className="font-semibold text-xl mb-2">Support</h2>
          <p className="text-gray-600">
            Support: <span className="font-medium">buymeacoffee.com/valeriarusnak</span>
          </p>
        </div>
      </a>
    </div>
  );
}
