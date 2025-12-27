import Link from "next/link";
import { getEpisodes, getVideos } from "@/lib/content";

export default function Home() {
  const latestEpisodes = getEpisodes().slice(0, 3);
  const latestVideos = getVideos().slice(0, 2);

  return (
  <div className="container mx-auto px-4 py-10 sm:py-12 md:py-16">
      {/* Hero Section */}
      <section className="text-center mb-12 sm:mb-16">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 text-gray-900">
          Welcome to 
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            The Rejected Pre-Med Podcast
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 mx-auto">
          Your source for inspiring conversations, stories, and connections.
          Join us as we explore topics that matter.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/podcasts"
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Listen to the Podcast
          </Link>
          <Link
            href="/videos"
            className="bg-white border border-blue-400 hover:bg-blue-50 text-blue-600 px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors"
          >
            Watch Videos
          </Link>
        </div>
      </section>

      {/* Latest Episodes */}
      <section className="mb-12 sm:mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Episodes</h2>
          <Link href="/podcasts" className="text-blue-600 hover:text-blue-700 font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {latestEpisodes.map((episode) => (
            <Link
              key={episode.slug}
              href={`/podcasts/${episode.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48" style={{ background: `linear-gradient(135deg, var(--primary), #7c3aed)` }}></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{episode.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{episode.description}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>{episode.date}</span>
                  <span>{episode.duration}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Videos */}
      <section className="mb-12 sm:mb-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Videos</h2>
          <Link href="/videos" className="text-blue-700 hover:text-blue-700 font-semibold">
            View All →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {latestVideos.map((video) => (
            <Link
              key={video.slug}
              href={`/videos/${video.slug}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video" style={{ background: `linear-gradient(135deg, #ef4444, var(--primary))` }}></div>
              <div className="p-6">
                <h3 className="font-semibold text-lg mb-2">{video.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{video.description}</p>
                <div className="text-sm text-gray-500">{video.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="rounded-lg p-8 sm:p-12 text-center" style={{ background: 'var(--muted)' }}>
        <h2 className="text-3xl font-bold mb-4">About The Rejected Pre-Med Podcast</h2>
        <p className="text-gray-700 max-w-3xl mx-auto mb-6">
          We create meaningful content that inspires, educates, and connects people.
          Join our community and be part of conversations that matter.
        </p>
        <Link
          href="/about"
          className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold transition-colors"
        >
          Learn More About Us
        </Link>
      </section>
    </div>
  );
}
